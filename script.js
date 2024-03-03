document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0, // Change this threshold as needed
  });

  boxes.forEach((box) => {
    observer.observe(box);
  });
});

const links = document.querySelectorAll("nav li");
const check = document.getElementById("check");
const menu = document.getElementById("menu");
const closeIcone = document.getElementById("close");

check.addEventListener("change", function () {
  if (this.checked) {
    console.log("La checkbox est cochée.");
    menu.style.display = "none";
    closeIcone.style.display = "block";
  } else {
    console.log("La checkbox est décochée.");
    menu.style.display = "block";
    closeIcone.style.display = "none";
  }
});

check.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
