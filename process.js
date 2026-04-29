<script>
const gifs = document.querySelectorAll(".gif");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    if (scroll < 300) {
        setActive(0);
    } else if (scroll < 700) {
        setActive(1);
    } else {
        setActive(2);
    }
});

function setActive(index) {
    gifs.forEach(g => g.classList.remove("active"));
    gifs[index].classList.add("active");
}
</script>
