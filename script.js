// Sidebar toggle
function toggleNav() {
  const aside = document.getElementById("aside");
  const icon = document.getElementById("toggleIcon");

  aside.classList.toggle("show");
  aside.classList.toggle("hide");

  if (aside.classList.contains("hide")) {
    icon.innerHTML = `&#9776;`;
  } else {
    icon.innerHTML = `&times;`;
  }
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// ScrollSpy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// footer section
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

