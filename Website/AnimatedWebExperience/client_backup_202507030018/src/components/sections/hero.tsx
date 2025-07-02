import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter';
import { FloatingElements } from '@/components/ui/particles';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-orbitron font-black mb-6 text-gradient"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ULTRA MEGA
          </motion.h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8 font-light">
            <Typewriter
              texts={[
                'Experiencia Visual Extraordinaria',
                'Animaciones Mágicas',
                'Código Innovador',
                'Diseño Espectacular'
              ]}
              speed={100}
              delay={2000}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover-lift"
              size="lg"
            >
              <span className="flex items-center space-x-2">
                <span>Explorar Ahora</span>
                <motion.i
                  className="fas fa-rocket"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <FloatingElements />
    </section>
  );
}
