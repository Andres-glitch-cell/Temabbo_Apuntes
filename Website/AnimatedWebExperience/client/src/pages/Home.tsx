import Home from './pages/Home';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AdvancedParticles, GlowEffect, RevealText, AdvancedTypewriter, GeometricBackground, CustomCursor } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';

const heroFeatures = [
  {
    title: 'Animaciones Extraordinarias',
    description: 'Efectos visuales que cautivan y sorprenden',
    icon: 'fas fa-magic',
    color: 'from-purple-500 to-pink-500',
    link: '/about'
  },
  {
    title: 'Portfolio 3D Interactivo',
    description: 'Proyectos con tecnologías de vanguardia',
    icon: 'fas fa-cube',
    color: 'from-cyan-500 to-blue-500',
    link: '/portfolio'
  },
  {
    title: 'Habilidades Avanzadas',
    description: 'Dominio técnico en múltiples tecnologías',
    icon: 'fas fa-code',
    color: 'from-emerald-500 to-green-500',
    link: '/skills'
  },
  {
    title: 'Experiencia Profesional',
    description: 'Años de evolución y crecimiento',
    icon: 'fas fa-chart-line',
    color: 'from-orange-500 to-red-500',
    link: '/experience'
  },
];

const quickStats = [
  { number: 500, label: 'Proyectos', suffix: '+', color: 'text-purple-400' },
  { number: 250, label: 'Clientes', suffix: '+', color: 'text-cyan-400' },
  { number: 99, label: 'Satisfacción', suffix: '%', color: 'text-emerald-400' },
  { number: 5, label: 'Años Exp.', suffix: '+', color: 'text-orange-400' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <CustomCursor />
      <AdvancedParticles />
      <GeometricBackground />
      <EnhancedNavigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-8"
              initial={{ scale: 0.5, rotateX: 45 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <span className="text-gradient">ULTRA MEGA</span>
            </motion.h1>
            
            {/* Animated Subtitle */}
            <div className="text-xl md:text-3xl lg:text-4xl mb-12 h-16 font-light">
              <AdvancedTypewriter
                texts={[
                  'Experiencia Visual Extraordinaria',
                  'Animaciones Mágicas Avanzadas',
                  'Código Innovador y Elegante',
                  'Diseño Espectacular y Funcional',
                  'Tecnología de Vanguardia'
                ]}
                speed={80}
                deleteSpeed={40}
                pauseTime={2000}
              />
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/portfolio">
                <GlowEffect>
                  <Button
                    className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover-lift"
                    size="lg"
                  >
                    <span className="flex items-center space-x-3">
                      <span>Explorar Portfolio</span>
                      <motion.i
                        className="fas fa-rocket"
                        animate={{ x: [0, 5, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </span>
                  </Button>
                </GlowEffect>
              </Link>
              
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                  size="lg"
                >
                  <span className="flex items-center space-x-2">
                    <span>Iniciar Proyecto</span>
                    <i className="fas fa-arrow-right" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`text-3xl md:text-4xl font-orbitron font-black mb-2 ${stat.color}`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll para explorar</span>
            <motion.i
              className="fas fa-chevron-down text-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
              Explora Nuestro Mundo
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre cada sección de nuestro portfolio y sumérgete en un universo 
              de tecnología, creatividad y innovación sin límites.
            </p>
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -20,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <Link href={feature.link}>
                  <GlowEffect>
                    <Card className="glass-effect hover-lift group h-full cursor-pointer overflow-hidden">
                      <CardContent className="p-8 text-center">
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rounded-full transition-all duration-500`}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <i className={`${feature.icon} text-3xl text-white`} />
                        </motion.div>
                        
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-100 transition-colors duration-300">
                          {feature.description}
                        </p>

                        <motion.div
                          className="mt-6 inline-flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-semibold">Explorar</span>
                          <i className="fas fa-arrow-right ml-2" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
              ¿Listo para lo Extraordinario?
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Únete a nosotros en este viaje hacia el futuro del desarrollo web. 
              Donde cada línea de código cuenta una historia y cada animación cobra vida.
            </p>
          </RevealText>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/contact">
              <GlowEffect>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 px-12 py-6 text-xl font-semibold rounded-full hover-lift"
                >
                  <span className="flex items-center space-x-3">
                    <span>Comenzar Ahora</span>
                    <motion.i
                      className="fas fa-star"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </Button>
              </GlowEffect>
            </Link>
            
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300 rounded-full"
              >
                <span className="flex items-center space-x-2">
                  <span>Conocer Más</span>
                  <i className="fas fa-info-circle" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
