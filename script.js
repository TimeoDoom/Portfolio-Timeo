// Intersection reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("active");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href");
    if (id === "#") return;
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Micro interactions: button tilt
document.querySelectorAll(".btn").forEach((b) => {
  b.addEventListener("pointermove", (ev) => {
    const r = b.getBoundingClientRect();
    const x = ((ev.clientX - r.left - r.width / 2) / r.width) * 24;
    const y = ((ev.clientY - r.top - r.height / 2) / r.height) * 24;
    b.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(0)`;
  });
  b.addEventListener("pointerleave", () => (b.style.transform = ""));
});

// Mobile menu toggle

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Project modal
const projectDetails = {
  chandelier: {
    title: "Chandelier Connecte",
    image: "./assets/projet1.png",
    description:
      "En collaboration avec Benoit Mirambeau et mon lycee, j ai codeveloppe un chandelier connecte, presente au Concours Lepine 2024, ou nous avons remporte l or dans la categorie univers connecte. J ai concu le site web, une application mobile, contribue au developpement du micro-logiciel et de l electronique pour faire fonctionner les prototypes.",
    technologies: ["Python", "HTML", "CSS", "React Native", "Electronique"],
    link: "https://chandelier-connecte.onrender.com/",
  },
  jo: {
    title: "Site JO Paris 2024 (BUT info)",
    image: "./assets/projet2.png",
    description:
      "Dans le cadre de mon BUT informatique, j ai realise un projet portant sur la creation d un site fictif dedie aux JO Paris 2024. Ce travail m a permis de repondre a un besoin client de maniere complete, en passant par l analyse des exigences, la conception, le developpement et la mise en ligne. J ai egalement applique des methodologies de gestion de projet pour assurer une livraison conforme aux attentes.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "",
  },
  snake: {
    title: "Jeu snake dans le terminal",
    image: "./assets/projet3.png",
    description:
      "Dans le cadre de mon BUT informatique, j ai realise un projet portant sur la creation du jeu snake dans le terminal. Dans cette version, il y a des obstacles ainsi que des portes dans les bordures du plateau qui servent de raccourcis. Le projet m a permis de renforcer ma logique algorithmique et la gestion des collisions en temps reel.",
    technologies: ["C", "Algorithmie", "Terminal", "Structures de donnees"],
    link: "",
  },
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("project-modal-title");
const modalDescription = document.getElementById("project-modal-description");
const modalImage = document.getElementById("project-modal-image");
const modalTech = document.getElementById("project-modal-tech");
const modalLink = document.getElementById("project-modal-link");
const modalBody = document.querySelector(".project-modal-body");

function openProjectModal(key) {
  const data = projectDetails[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modalImage.src = data.image;
  modalImage.alt = `Apercu du projet ${data.title}`;

  modalTech.innerHTML = "";
  data.technologies.forEach((tech) => {
    const chip = document.createElement("span");
    chip.className = "project-modal-chip";
    chip.textContent = tech;
    modalTech.appendChild(chip);
  });

  if (data.link) {
    modalLink.style.display = "inline-block";
    modalLink.href = data.link;
  } else {
    modalLink.style.display = "none";
  }

  if (modalBody) {
    modalBody.scrollTop = 0;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProjectModal(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(card.dataset.project);
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeProjectModal();
  }
});
