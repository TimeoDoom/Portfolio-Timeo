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
    console.log("La checkbox est cochÃ©e.");
    menu.style.display = "none";
    closeIcone.style.display = "block";
  } else {
    console.log("La checkbox est dÃ©cochÃ©e.");
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

// Typing Animation

let aText = new Array(
  "Je suis Timéo,",
  "passionné de développement web et mobile."
);
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ""; // initialise contents variable
let iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  let destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
