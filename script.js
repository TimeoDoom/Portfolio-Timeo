document.querySelectorAll(".nav-item").forEach((item) => {
  const dot = item.querySelector(".dot");

  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = 50; // Ajustement pour correspondre à la nouvelle position du point

    const distX = (x - centerX) / 2; // Augmentation de la sensibilité horizontale
    const distY = (y - centerY) / 2; // Augmentation de la sensibilité verticale

    dot.style.transform = `translate(${distX}px, ${distY}px)`;
  });

  item.addEventListener("mouseleave", () => {
    dot.style.transform = `translateX(-50%)`;
  });
});

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const themeIcon = document.getElementById("icon");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  themeIcon.src = "./assets/sun.svg";
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  themeIcon.src = "./assets/moon.svg";
  localStorage.setItem("darkmode", "null");
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

