import { useEffect, useRef } from "react";

const stats = [
  { number: 1000, label: "Proyectos Completados", color: "#6366f1" },
  { number: 500, label: "Clientes Satisfechos", color: "#8b5cf6" },
  { number: 99, label: "% Satisfacción", color: "#06b6d4" }
];

export default function ContactSection() {
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.gsap) {
      counterRefs.current.forEach((counter, index) => {
        if (counter) {
          const stat = stats[index];
          window.gsap.fromTo(counter, {
            innerHTML: 0
          }, {
            innerHTML: stat.number,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });
    }
  }, []);

  return (
    <section id="contact" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-gradient text-6xl font-bold text-center mb-12"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-2xl p-8">
              <div 
                ref={el => counterRefs.current[index] = el}
                className="text-6xl font-bold mb-4"
                style={{ color: stat.color }}
              >
                0
              </div>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
