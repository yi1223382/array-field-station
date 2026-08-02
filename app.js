(() => {
  const briefs = Array.isArray(window.DAILY_BRIEFS) ? window.DAILY_BRIEFS : [];
  const $ = (selector) => document.querySelector(selector);
  const issueSelect = $("#issueSelect");
  const contentGrid = $("#contentGrid");
  const moduleNav = $("#moduleNav");

  function textToHtml(text = "") {
    return text
      .split("\n")
      .filter(Boolean)
      .map(line => `<p>${line}</p>`)
      .join("");
  }

  function renderBlocks(blocks = []) {
    return blocks.map(block => {
      if (block.type === "heading") return `<h4>${block.text}</h4>`;
      if (block.type === "formula") return `<div class="formula">${block.text}</div>`;
      if (block.type === "list") return `<ul>${block.items.map(item => `<li>${item}</li>`).join("")}</ul>`;
      if (block.type === "sources") {
        return `<div class="source-list">${block.items.map(item =>
          `<a href="${item.url}" target="_blank" rel="noreferrer">↗ ${item.label}</a>`
        ).join("")}</div>`;
      }
      return textToHtml(block.text);
    }).join("");
  }

  function renderBrief(index) {
    const brief = briefs[index];
    if (!brief) {
      contentGrid.innerHTML = "<p>尚无简报内容。</p>";
      return;
    }

    $("#briefDate").textContent = brief.dateLabel;
    $("#issueNumber").textContent = String(brief.issue).padStart(2, "0");
    $("#updateStatus").textContent = `最近更新 ${brief.updatedAt}`;
    $("#footerUpdate").textContent = `ISSUE ${String(brief.issue).padStart(2, "0")} · ${brief.updatedAt}`;
    $("#briefHeader").innerHTML = `
      <div>
        <h2>${brief.title}</h2>
        <p>${brief.summary}</p>
      </div>
      <div class="reading-time">预计阅读<br><b>${brief.readingMinutes} MIN</b></div>
    `;

    moduleNav.innerHTML = brief.modules.map((module, i) =>
      `<button type="button" data-target="module-${i}">${String(i + 1).padStart(2, "0")} ${module.label}</button>`
    ).join("");

    contentGrid.innerHTML = brief.modules.map((module, i) => `
      <article id="module-${i}" class="module-card ${module.layout || ""} ${module.tone || ""}" style="animation-delay:${i * 60}ms">
        <span class="card-index">${String(i + 1).padStart(2, "0")} / ${module.label.toUpperCase()}</span>
        ${module.priority ? `<span class="priority" style="float:right">${module.priority}</span>` : ""}
        <h3>${module.title}</h3>
        ${renderBlocks(module.blocks)}
        ${module.tags?.length ? `<div class="tag-row">${module.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
      </article>
    `).join("");
  }

  briefs.forEach((brief, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${brief.dateLabel}｜${brief.title}`;
    issueSelect.appendChild(option);
  });

  issueSelect.addEventListener("change", event => renderBrief(Number(event.target.value)));
  moduleNav.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#printButton").addEventListener("click", () => window.print());

  renderBrief(0);
})();
