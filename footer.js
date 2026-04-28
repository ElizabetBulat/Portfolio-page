const footer = `
<footer class="footer">
    <div class="container footer-grid">
        <div class="footer-col">
            <h4>Navigation</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="skill.html">Skills</a>
            <a href="project.html">Projects</a>
            <a href="experience.html">Experience</a>
        </div>

        <div class="footer-col">
            <h4>Contacts</h4>
            <a href="https://github.com/ElizabetBulat" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:exaple@gmail.com">
lizabulat888@gmail.com</a>
            <p>+371 88 888 888</p>
        </div>
    </div>

    <div class="container footer-bottom">
        © 2026 Core Project Management Skills / Communication & Leadership / Technical / IT Understanding / Tools & Workflow / Personal Strengths
    </div>
</footer>
`;

const placeholder = document.getElementById("footer-placeholder");

if (placeholder) {
    placeholder.innerHTML = footer;
}
