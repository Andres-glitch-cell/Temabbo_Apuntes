import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { AdvancedParticles, GlowEffect, RevealText, WaveAnimation, GeometricBackground } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';

const aboutItems = [
  {
    icon: 'fas fa-magic',
    title: 'Animaciones Mágicas',
    description: 'Creamos experiencias visuales que cautivan y sorprenden a los usuarios con cada interacción. Utilizamos las últimas tecnologías de animación para dar vida a cada elemento.',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
    features: ['Framer Motion', 'GSAP Avanzado', 'CSS Animations', 'Three.js']
  },
  {
    icon: 'fas fa-code',
    title: 'Código Innovador',
    description: 'Utilizamos las últimas tecnologías para crear interfaces únicas y funcionales. Nuestro código es limpio, escalable y mantenible.',
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-400',
    features: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS']
  },
  {
    icon: 'fas fa-palette',
    title: 'Diseño Espectacular',
    description: 'Cada elemento está cuidadosamente diseñado para crear una experiencia visual impactante. Combinamos estética y funcionalidad.',
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-400',
    features: ['UI/UX Design', 'Glass Morphism', 'Gradientes', 'Responsive']
  },
  {
    icon: 'fas fa-rocket',
    title: 'Rendimiento Optimizado',
    description: 'Optimizamos cada aspecto para garantizar la máxima velocidad y eficiencia. Tu sitio web será increíblemente rápido.',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    features: ['Lazy Loading', 'Code Splitting', 'Image Optimization', 'PWA']
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Totalmente Responsive',
    description: 'Diseños que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas ultra anchas.',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    features: ['Mobile First', 'Flexbox', 'Grid', 'Breakpoints']
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Seguridad Avanzada',
    description: 'Implementamos las mejores prácticas de seguridad para proteger tu aplicación y los datos de tus usuarios.',
    color: 'from-indigo-500 to-purple-500',
    textColor: 'text-indigo-400',
    features: ['HTTPS', 'Sanitización', 'Validación', 'CORS']
  },
];

const stats = [
  { number: 500, label: 'Proyectos Completados', suffix: '+', color: 'text-purple-400' },
  { number: 250, label: 'Clientes Felices', suffix: '+', color: 'text-cyan-400' },
  { number: 99, label: 'Satisfacción', suffix: '%', color: 'text-emerald-400' },
  { number: 24, label: 'Soporte', suffix: '/7', color: 'text-orange-400' },
];

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <AdvancedParticles />
      <GeometricBackground />
      <EnhancedNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RevealText className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6">
              <span className="text-gradient">Acerca de Nosotros</span>
            </RevealText>
            <RevealText delay={0.3} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos expertos en crear experiencias digitales extraordinarias que combinan 
              tecnología avanzada, diseño innovador y animaciones impresionantes.
            </RevealText>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift text-center">
                    <CardContent className="p-6 md:p-8">
                      <motion.div
                        className={`text-3xl md:text-4xl lg:text-5xl font-orbitron font-black mb-2 ${stat.color}`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {stat.number}{stat.suffix}
                      </motion.div>
                      <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              Nuestros Servicios
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                animate={isIntersecting ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift group h-full overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rounded-full transition-all duration-500`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, 0],
                          boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <i className={`${item.icon} text-2xl md:text-3xl text-white`} />
                      </motion.div>
                      
                      <h3 className={`text-xl md:text-2xl font-orbitron font-bold mb-4 ${item.textColor} text-center`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 text-center text-sm md:text-base">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            className="flex items-center space-x-2 text-sm text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 + fIndex * 0.05 }}
                          >
                            <motion.i 
                              className="fas fa-check text-green-400"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, delay: fIndex * 0.2, repeat: Infinity }}
                            />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <WaveAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                Nuestra Misión
              </h2>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Transformar ideas en experiencias digitales extraordinarias que inspiren, 
                conecten y emocionen. Creamos no solo sitios web, sino mundos digitales 
                donde la tecnología y el arte se encuentran para crear algo verdaderamente mágico.
              </p>
            </RevealText>
            <RevealText delay={0.6}>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlowEffect>
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-1 rounded-2xl">
                    <div className="bg-slate-900 px-8 py-4 rounded-2xl">
                      <span className="text-lg font-semibold text-white">
                        "Innovación sin límites, resultados extraordinarios"
                      </span>
                    </div>
                  </div>
                </GlowEffect>
              </motion.div>
            </RevealText>
          </div>
        </div>
      </section>
    </div>
  );
}