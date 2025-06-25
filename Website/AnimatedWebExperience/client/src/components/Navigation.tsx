import { useEffect } from "react";

const navigationItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Acerca" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];

export default function Navigation() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href) {
        const element = document.querySelector(href);
        if (element && window.gsap) {
          window.gsap.to(window, {
            duration: 1.5,
            scrollTo: element,
            ease: 'power2.inOut'
          });
        }
      }
    };

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 nav-glass rounded-full px-8 py-4">
      <ul className="flex gap-8 list-none">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-white font-medium text-lg relative pb-1 transition-all duration-300 hover:text-blue-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
