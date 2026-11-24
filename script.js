
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// CURRENT YEAR

const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Krizia Ravida. All Rights Reserved.</p>
    <p>Designed & Developed with passion.</p>
`;

console.log("Krizia Ravida Portfolio Loaded Successfully!");
