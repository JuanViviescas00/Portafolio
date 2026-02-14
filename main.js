// Función type para el efecto de escritura (usando Typed.js)
function type() {
  new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity
  });
}

// Función movingBackgroundImage (sin dependencias)
function movingBackgroundImage() {
  var container = document.querySelector(".hero-full-container");
  if (container) {
    var widthFactor = window.innerWidth / 5;
    var heightFactor = window.innerHeight / 5;
    container.addEventListener("mousemove", function(event) {
      var x = event.clientX / widthFactor;
      var y = event.clientY / heightFactor;
      container.style.transform = "translate3d(-" + 1.5 * x + "px, -" + 1.5 * y + "px, 0)";
    });
  }
}

// Función navActivePage reescrita en JavaScript vanilla (sin jQuery)
function navActivePage() {
  var currentPath = location.pathname;
  var links = document.querySelectorAll('nav li a');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === '.' + currentPath || (currentPath === '/' && href === './index.html')) {
      link.classList.add('active');
    }
  });
}

// Función para el colapso del navbar (dependencia de Bootstrap simplificada en vanilla)
function initNavbarCollapse() {
  var toggle = document.querySelector('.navbar-toggle');
  var collapse = document.querySelector('#navbar-collapse');
  if (toggle && collapse) {
    toggle.addEventListener('click', function() {
      var isExpanded = collapse.classList.contains('in');
      if (isExpanded) {
        collapse.classList.remove('in');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        collapse.classList.add('in');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  }
}

// Inicializar funciones al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  type();
  navActivePage();
  movingBackgroundImage();
  initNavbarCollapse();
});