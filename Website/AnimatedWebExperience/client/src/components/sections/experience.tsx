import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    year: '2024 - Presente',
    title: 'Especialista en Animaciones Web Avanzadas',
    description: 'Creando experiencias visuales extraordinarias con las últimas tecnologías de animación web.',
    color: 'bg-purple-500',
    textColor: 'text-purple-400',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Desarrollador Frontend Senior',
    description: 'Liderando proyectos de desarrollo frontend con enfoque en UX/UI innovador.',
    color: 'bg-cyan-500',
    textColor: 'text-cyan-400',
    side: 'right',
  },
  {
    year: '2022',
    title: 'Certificación en Three.js y WebGL',
    description: 'Especialización en gráficos 3D y animaciones avanzadas para web.',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    side: 'left',
  },
  {
    year: '2021',
    title: 'Inicio en Desarrollo Web',
    description: 'Comenzando el viaje en el mundo del desarrollo web moderno.',
    color: 'bg-pink-500',
    textColor: 'text-pink-400',
    side: 'right',
  },
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Experiencia
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-cyan-500"
              initial={{ height: 0 }}
              animate={isIntersecting ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    exp.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <motion.div
                    className={`absolute left-6 md:left-1/2 w-4 h-4 ${exp.color} rounded-full transform -translate-x-2 md:-translate-x-2 z-10`}
                    initial={{ scale: 0 }}
                    animate={isIntersecting ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${exp.side === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="glass-effect hover-lift">
                      <CardContent className="p-6">
                        <div className={`${exp.textColor} font-semibold mb-2`}>{exp.year}</div>
                        <h4 className="text-xl font-orbitron font-semibold mb-2">{exp.title}</h4>
                        <p className="text-gray-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
