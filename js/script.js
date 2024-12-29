// progressValue volatar ao top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let topDistancia = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((topDistancia * 100) / calcHeight);

  if (topDistancia > 400) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// fim

const myObserver = new IntersectionObserver((observerEntry) => {
  observerEntry.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});
const classHidden = document.querySelectorAll(".hidden");

classHidden.forEach((element) => myObserver.observe(element));

// DEIXAR O MENU DE NAVEGAÇÃO ATIVO
let links = document.querySelectorAll(".js-link");
let sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 620;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute("id");
    console.log(idSection);

    if (top > offset && top < offset + heightSection) {
      links.forEach((link) => {
        link.classList.remove("actived");
      });

      document
        .querySelector(`section nav ul  a[href*='#${idSection}']`)
        .classList.add("actived");
    }
  });
});
