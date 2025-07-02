import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const techStack = [
  { icon: 'fab fa-html5', name: 'HTML', color: 'text-orange-500' },
  { icon: 'fab fa-css3-alt', name: 'CSS', color: 'text-blue-500' },
  { icon: 'fab fa-js-square', name: 'JS', color: 'text-yellow-500' },
  { icon: 'fab fa-react', name: 'React', color: 'text-cyan-400' },
  { icon: 'fas fa-code', name: 'GSAP', color: 'text-green-500', customIcon: 'G' },
  { icon: 'fas fa-cube', name: 'Three.js', color: 'text-purple-600', customIcon: '3D' },
];

export function Portfolio() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="portfolio" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Portfolio 3D
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.1,
                type: 'spring',
                stiffness: 200 
              }}
            >
              <Card className="glass-effect hover-lift group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="mb-4"
                    whileHover={{ 
                      scale: 1.25, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tech.customIcon ? (
                      <div className={`w-12 h-12 mx-auto ${tech.color.replace('text-', 'bg-')} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
                        {tech.customIcon}
                      </div>
                    ) : (
                      <i className={`${tech.icon} text-4xl ${tech.color}`} />
                    )}
                  </motion.div>
                  <h4 className="font-orbitron font-semibold">{tech.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
