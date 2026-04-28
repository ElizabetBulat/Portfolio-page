document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const [page, hash] = href.split("#");

        const matchesPage = (page || "index.html") === currentPage;
        const matchesHash = currentHash && hash ? `#${hash}` === currentHash : false;

        if (matchesPage && (!hash || matchesHash)) {
            link.classList.add("active");
        }
    });

    const handleHeaderState = () => {
        if (!header) return;

        if (window.scrollY > 16) {
            header.style.boxShadow = "0 10px 30px rgba(34, 23, 18, 0.08)";
        } else {
            header.style.boxShadow = "none";
        }
    };

    handleHeaderState();
    window.addEventListener("scroll", handleHeaderState);

    const revealItems = document.querySelectorAll(
        ".section-title, .hero-left, .hero-right, .about-card, .skill-card, .project-card, .timeline-item, .contact-card"
    );

    if ("IntersectionObserver" in window && revealItems.length) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.14
            }
        );

        revealItems.forEach((item) => {
            item.classList.add("reveal");
            observer.observe(item);
        });
    }
});