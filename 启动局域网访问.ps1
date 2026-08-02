param(
    [ValidateRange(1, 65535)]
    [int]$Port = 8080,

    [ValidateRange(0, 1000000)]
    [int]$MaxRequests = 0
)

$ErrorActionPreference = "Stop"
$siteRoot = [System.IO.Path]::GetFullPath($PSScriptRoot)
$utf8 = [System.Text.UTF8Encoding]::new($false)

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".pdf"  = "application/pdf"
}

function Send-Response {
    param(
        [System.Net.Sockets.NetworkStream]$Stream,
        [int]$StatusCode,
        [string]$StatusText,
        [byte[]]$Body,
        [string]$ContentType = "text/plain; charset=utf-8",
        [bool]$HeadersOnly = $false
    )

    $headerText = @(
        "HTTP/1.1 $StatusCode $StatusText"
        "Content-Type: $ContentType"
        "Content-Length: $($Body.Length)"
        "Cache-Control: no-cache"
        "X-Content-Type-Options: nosniff"
        "Connection: close"
        ""
        ""
    ) -join "`r`n"
    $headerBytes = $utf8.GetBytes($headerText)
    $Stream.Write($headerBytes, 0, $headerBytes.Length)
    if (-not $HeadersOnly -and $Body.Length -gt 0) {
        $Stream.Write($Body, 0, $Body.Length)
    }
}

function Get-LanAddresses {
    $addresses = [System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() |
        Where-Object { $_.OperationalStatus -eq "Up" -and $_.NetworkInterfaceType -ne "Loopback" } |
        ForEach-Object { $_.GetIPProperties().UnicastAddresses } |
        ForEach-Object { $_.Address } |
        Where-Object {
            if ($_.AddressFamily -ne [System.Net.Sockets.AddressFamily]::InterNetwork) { return $false }
            $bytes = $_.GetAddressBytes()
            return $bytes[0] -eq 10 -or
                ($bytes[0] -eq 172 -and $bytes[1] -ge 16 -and $bytes[1] -le 31) -or
                ($bytes[0] -eq 192 -and $bytes[1] -eq 168)
        }
    return $addresses | Sort-Object -Unique
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
$servedRequests = 0

try {
    $listener.Start()
    Clear-Host
    Write-Host "Array Field Station is running" -ForegroundColor Green
    Write-Host ""
    Write-Host "This computer: http://localhost:$Port/"
    foreach ($address in Get-LanAddresses) {
        Write-Host "Other devices: http://$address`:$Port/" -ForegroundColor Cyan
    }
    Write-Host ""
    Write-Host "Connect the other device to the same Wi-Fi, then open the address above."
    Write-Host "Keep this window open. Press Ctrl+C to stop sharing."
    Write-Host "If Windows Firewall asks, allow access on Private networks."
    Write-Host ""

    while ($MaxRequests -eq 0 -or $servedRequests -lt $MaxRequests) {
        $client = $listener.AcceptTcpClient()
        $stream = $null
        $reader = $null
        try {
            $client.ReceiveTimeout = 5000
            $stream = $client.GetStream()
            $reader = [System.IO.StreamReader]::new($stream, $utf8, $false, 1024, $true)
            $requestLine = $reader.ReadLine()
            if ([string]::IsNullOrWhiteSpace($requestLine)) { continue }

            while (-not [string]::IsNullOrEmpty($reader.ReadLine())) { }

            $parts = $requestLine.Split(" ")
            if ($parts.Count -lt 2 -or $parts[0] -notin @("GET", "HEAD")) {
                Send-Response $stream 405 "Method Not Allowed" ($utf8.GetBytes("Method Not Allowed"))
                continue
            }

            $requestPath = [System.Uri]::UnescapeDataString(($parts[1] -split "\?")[0])
            if ($requestPath -eq "/") { $requestPath = "/index.html" }
            $relativePath = $requestPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
            $webPath = $relativePath.Replace([System.IO.Path]::DirectorySeparatorChar, "/")
            $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($siteRoot, $relativePath))
            $insideRoot = $filePath.Equals($siteRoot, [System.StringComparison]::OrdinalIgnoreCase) -or
                $filePath.StartsWith($siteRoot + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)
            $isWebsiteFile = $webPath -in @("index.html", "styles.css", "app.js", "content.js") -or
                $webPath.StartsWith("assets/", [System.StringComparison]::OrdinalIgnoreCase)

            if (-not $insideRoot -or -not $isWebsiteFile -or -not [System.IO.File]::Exists($filePath)) {
                Send-Response $stream 404 "Not Found" ($utf8.GetBytes("404 - Not Found"))
                continue
            }

            $body = [System.IO.File]::ReadAllBytes($filePath)
            $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
            $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
            Send-Response $stream 200 "OK" $body $contentType ($parts[0] -eq "HEAD")
        }
        catch {
            Write-Warning $_.Exception.Message
        }
        finally {
            if ($reader) { $reader.Dispose() }
            if ($stream) { $stream.Dispose() }
            $client.Dispose()
            $servedRequests++
        }
    }
}
finally {
    $listener.Stop()
}
