const cards = [
  {
    icon: "fas fa-magic",
    title: "Animaciones Mágicas",
    description: "Creamos experiencias visuales que cautivan y sorprenden a los usuarios con cada interacción.",
    color: "#6366f1"
  },
  {
    icon: "fas fa-code",
    title: "Código Innovador",
    description: "Utilizamos las últimas tecnologías para crear interfaces únicas y funcionales.",
    color: "#8b5cf6"
  },
  {
    icon: "fas fa-palette",
    title: "Diseño Espectacular",
    description: "Cada elemento está cuidadosamente diseñado para crear una experiencia visual impactante.",
    color: "#06b6d4"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-gradient text-6xl font-bold text-center mb-12"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Acerca de Nosotros
        </h2>
        
        <div className="morphing-shape" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-x-1"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <i 
                className={`${card.icon} text-5xl mb-4 block`}
                style={{ color: card.color }}
              />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
