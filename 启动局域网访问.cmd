@echo off
chcp 65001 >nul
title 阵列场站 - 局域网共享
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0启动局域网访问.ps1"
pause
