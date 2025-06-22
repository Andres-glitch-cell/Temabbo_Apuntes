// Iniciar AOS
AOS.init();

// ParticlesJS config con tema verde "terminal"
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.2, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.3 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typed.js
const typed = new Typed("#typed-text", {
  strings: ["Servidor Online", "Monitoreo Activo", "Estado: Estable"],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true,
  showCursor: true,
});

// Animaciones con Anime.js (por ejemplo)
anime({
  targets: ".card",
  translateY: [-10, 10],
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine",
  delay: anime.stagger(200),
});

// GSAP animación simple
gsap.to("header h1", { duration: 2, rotation: 360, repeat: -1, ease: "linear" });

// Lottie animación (si tienes animaciones)
// lottie.loadAnimation({
//   container: document.getElementById("lottie-container"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "animacion.json" // ruta a archivo JSON de animación Lottie
// });

// Splitting.js
Splitting();

// Aquí puedes añadir más lógica JS si quieres
