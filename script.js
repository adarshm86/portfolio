// Scroll reveal animation
const elements = document.querySelectorAll(".fade-in");

function reveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// Auto-fill skill progress bars
document.querySelectorAll(".skill-progress").forEach(bar => {
    const progress = bar.getAttribute("data-progress");
    setTimeout(() => {
        bar.style.width = progress + "%";
    }, 300);
});
