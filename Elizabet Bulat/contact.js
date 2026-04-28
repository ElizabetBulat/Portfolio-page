document.addEventListener("DOMContentLoaded", () => {
    const contactCard = document.querySelector(".contact-card");
    if (!contactCard) return;

    const iconMap = {
        email: "✉",
        github: "◆",
        phone: "☎"
    };

    const rows = Array.from(contactCard.querySelectorAll("p"));
    const fragment = document.createDocumentFragment();

    rows.forEach((row) => {
        const text = row.textContent.trim();
        if (!text.includes(":")) return;

        const [rawLabel, ...rest] = text.split(":");
        const label = rawLabel.trim();
        const value = rest.join(":").trim();
        const key = label.toLowerCase();

        const item = document.createElement("div");
        item.className = "contact-row";

        const iconEl = document.createElement("div");
        iconEl.className = "contact-icon";
        iconEl.textContent = iconMap[key] || "•";

        const contentEl = document.createElement("div");
        contentEl.className = "contact-content";

        const labelEl = document.createElement("div");
        labelEl.className = "contact-label";
        labelEl.textContent = label;

        const valueEl = document.createElement("div");
        valueEl.className = "contact-value";

        let copyValue = value;
        let shouldShowCopy = false;

        if (!value) {
            valueEl.innerHTML = `<span>Not provided</span>`;
        } else if (key === "email") {
            valueEl.innerHTML = `<a href="mailto:${value}">${value}</a>`;
            shouldShowCopy = true;
        } else if (key === "github") {
            valueEl.innerHTML = `<a href="${value}" target="_blank" rel="noopener noreferrer">${value}</a>`;
            shouldShowCopy = true;
        } else if (key === "phone") {
            const telValue = value.replace(/\s+/g, "");
            valueEl.innerHTML = `<a href="tel:${telValue}">${value}</a>`;
            copyValue = value;
            shouldShowCopy = true;
        } else {
            valueEl.textContent = value;
        }

        contentEl.appendChild(labelEl);
        contentEl.appendChild(valueEl);

        item.appendChild(iconEl);
        item.appendChild(contentEl);

        if (shouldShowCopy) {
            const btn = document.createElement("button");
            btn.className = "contact-copy-btn";
            btn.type = "button";
            btn.textContent = "⧉";
            btn.dataset.copy = copyValue;
            btn.setAttribute("aria-label", `Copy ${label}`);

            btn.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(btn.dataset.copy);
                    btn.textContent = "✓";
                    btn.classList.add("copied");

                    setTimeout(() => {
                        btn.textContent = "⧉";
                        btn.classList.remove("copied");
                    }, 1300);
                } catch (error) {
                    btn.textContent = "!";

                    setTimeout(() => {
                        btn.textContent = "⧉";
                    }, 1300);
                }
            });

            item.appendChild(btn);
        }

        fragment.appendChild(item);
    });

    contactCard.innerHTML = "";
    contactCard.appendChild(fragment);
});