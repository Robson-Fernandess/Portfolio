// progressValue voltar ao top
function initProgressValue() {
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
}
initProgressValue();
// fim progressValue

// MENU HAMBURGE
function initMenuHamburge() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
initMenuHamburge();
// FIM MENU HAMBURGE

// MENU e SCROLL ATIVO
function initMenuAtivo() {
  let links = document.querySelectorAll(".js-link");
  let jsSections = document.querySelectorAll(".js-section");
  links[0].classList.add("menu-ativo");

  window.addEventListener("scroll", () => {
    jsSections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 90;
      let heightSection = section.offsetHeight;
      let idSection = section.getAttribute("id");

      if (top > offset && top < offset + heightSection) {
        links.forEach((link) => {
          link.classList.remove("menu-ativo");
        });

        document
          .querySelector(` nav ul li a[href*='#${idSection}']`)
          .classList.add("menu-ativo");
      }
    });
  });
}
initMenuAtivo();
// FIM MENU SCROLL ATIVO

// // ANIMAR SCROLL
function initAnimaScroll() {
  // Seleciona todas as seções com a classe .js-scroll
  const sectionScroll = document.querySelectorAll(".js-animation");
  // Função que será chamada sempre que o usuário rolar a página
  function animaScroll() {
    // Para cada seção com a classe .js-scroll
    sectionScroll.forEach((section) => {
      // Obtém a posição da seção em relação ao topo da janela de visualização
      const top = section.getBoundingClientRect().top;

      // Calcula a posição da seção, considerando a altura da janela de visualização
      const sectionTop = top - innerHeight;

      // Se a posição da seção for maior que -120px (a seção passou a um ponto específico)
      if (sectionTop < -120) {
        // Adiciona a classe "sectionAtiva", que pode ser usada para ativar a animação ou outro estilo
        section.classList.add("show");
      } else {
        // Caso contrário, remove a classe "sectionAtiva"
        section.classList.remove("show");
      }
    });
  }

  animaScroll(); // Chama a função uma vez logo após o carregamento da página para verificar as seções ativas

  // Adiciona um ouvinte de evento para o scroll da página, chamando animaScroll a cada rolagem
  window.addEventListener("scroll", animaScroll);
}
// Chama a função para inicializar o comportamento de animação do scroll
initAnimaScroll();

/*
function myObserverAnimation() {
  const myObserver = new IntersectionObserver((observerEntry) => {
    observerEntry.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //   entry.target.classList.remove("show");
      // }
    });
  });
  const jsAnimation = document.querySelectorAll(".js-animation");

  jsAnimation.forEach((element) => myObserver.observe(element));
}
myObserverAnimation();
*/
