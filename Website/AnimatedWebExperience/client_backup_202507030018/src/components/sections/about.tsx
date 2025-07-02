import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const aboutItems = [
  {
    icon: 'fas fa-magic',
    title: 'Animaciones Mágicas',
    description: 'Creamos experiencias visuales que cautivan y sorprenden a los usuarios con cada interacción.',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
  },
  {
    icon: 'fas fa-code',
    title: 'Código Innovador',
    description: 'Utilizamos las últimas tecnologías para crear interfaces únicas y funcionales.',
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-400',
  },
  {
    icon: 'fas fa-palette',
    title: 'Diseño Espectacular',
    description: 'Cada elemento está cuidadosamente diseñado para crear una experiencia visual impactante.',
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-400',
  },
];

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Acerca de Nosotros
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <Card className="glass-effect hover-lift group h-full">
                <CardContent className="pt-8 text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <i className={`${item.icon} text-2xl text-white`} />
                  </motion.div>
                  <h3 className={`text-2xl font-orbitron font-bold mb-4 ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
