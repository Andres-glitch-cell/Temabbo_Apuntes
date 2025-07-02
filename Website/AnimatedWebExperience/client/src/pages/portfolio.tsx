import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdvancedParticles, GlowEffect, RevealText, GeometricBackground } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';

const techStack = [
  { 
    icon: 'fab fa-html5', 
    name: 'HTML5', 
    color: 'text-orange-500',
    bg: 'from-orange-500 to-red-500',
    level: 95,
    description: 'Estructura semántica moderna'
  },
  { 
    icon: 'fab fa-css3-alt', 
    name: 'CSS3', 
    color: 'text-blue-500',
    bg: 'from-blue-500 to-indigo-500',
    level: 90,
    description: 'Estilos avanzados y animaciones'
  },
  { 
    icon: 'fab fa-js-square', 
    name: 'JavaScript', 
    color: 'text-yellow-500',
    bg: 'from-yellow-500 to-orange-500',
    level: 92,
    description: 'ES6+ y programación funcional'
  },
  { 
    icon: 'fab fa-react', 
    name: 'React', 
    color: 'text-cyan-400',
    bg: 'from-cyan-400 to-blue-500',
    level: 88,
    description: 'Hooks y componentes modernos'
  },
  { 
    icon: 'fas fa-code', 
    name: 'TypeScript', 
    color: 'text-blue-600',
    bg: 'from-blue-600 to-purple-600',
    level: 85,
    description: 'Tipado estático avanzado',
    customIcon: 'TS'
  },
  { 
    icon: 'fab fa-node-js', 
    name: 'Node.js', 
    color: 'text-green-500',
    bg: 'from-green-500 to-emerald-500',
    level: 82,
    description: 'Backend y APIs RESTful'
  },
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Ultra',
    description: 'Plataforma de comercio electrónico con animaciones 3D y realidad aumentada para preview de productos.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    category: 'web',
    featured: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de control interactivo con visualizaciones de datos en tiempo real y animaciones fluidas.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'D3.js', 'WebSocket', 'Express'],
    category: 'dashboard',
    featured: true,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    title: 'Gaming Portal',
    description: 'Portal de juegos con efectos visuales impresionantes y integración de APIs de gaming.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'GSAP', 'WebGL', 'Firebase'],
    category: 'gaming',
    featured: false,
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 4,
    title: 'Mobile App Design',
    description: 'Aplicación móvil con UI/UX innovador y microinteracciones que mejoran la experiencia del usuario.',
    image: '/api/placeholder/600/400',
    tech: ['React Native', 'Framer Motion', 'Redux', 'Firebase'],
    category: 'mobile',
    featured: false,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    description: 'Interfaz de chat con IA que incluye animaciones de tipeo y respuestas dinámicas en tiempo real.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'OpenAI API', 'Socket.io', 'TypeScript'],
    category: 'ai',
    featured: true,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'VR Experience',
    description: 'Experiencia de realidad virtual para web con controles gestuales y navegación inmersiva.',
    image: '/api/placeholder/600/400',
    tech: ['A-Frame', 'WebXR', 'Three.js', 'WebRTC'],
    category: 'vr',
    featured: false,
    color: 'from-pink-500 to-rose-500'
  },
];

const categories = [
  { id: 'all', label: 'Todos', icon: 'fas fa-th' },
  { id: 'web', label: 'Web Apps', icon: 'fas fa-globe' },
  { id: 'mobile', label: 'Mobile', icon: 'fas fa-mobile-alt' },
  { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-bar' },
  { id: 'gaming', label: 'Gaming', icon: 'fas fa-gamepad' },
  { id: 'ai', label: 'AI/ML', icon: 'fas fa-brain' },
  { id: 'vr', label: 'VR/AR', icon: 'fas fa-vr-cardboard' },
];

export default function Portfolio() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              <span className="text-gradient">Portfolio 3D</span>
            </RevealText>
            <RevealText delay={0.3} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explora nuestros proyectos más impresionantes donde la tecnología 
              y la creatividad se combinan para crear experiencias únicas.
            </RevealText>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Tecnologías Dominadas
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </RevealText>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
                animate={isIntersecting ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                  z: 50
                }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift group overflow-hidden">
                    <CardContent className="p-4 md:p-6 text-center relative">
                      <motion.div
                        className="mb-4 relative"
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {tech.customIcon ? (
                          <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-r ${tech.bg} rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl`}>
                            {tech.customIcon}
                          </div>
                        ) : (
                          <i className={`${tech.icon} text-4xl md:text-5xl ${tech.color}`} />
                        )}
                      </motion.div>
                      
                      <h4 className="font-orbitron font-semibold text-sm md:text-base mb-2">{tech.name}</h4>
                      <p className="text-xs text-gray-400 mb-3">{tech.description}</p>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.bg} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isIntersecting ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-1 block">{tech.level}%</span>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Proyectos Destacados
            </h2>
          </RevealText>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <i className={`${category.icon} text-sm`} />
                  <span className="text-sm md:text-base">{category.label}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                <GlowEffect>
                  <Card className={`glass-effect overflow-hidden group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="relative overflow-hidden">
                      {/* Project Image Placeholder */}
                      <div className={`h-48 md:h-56 bg-gradient-to-br ${project.color} relative`}>
                        <motion.div
                          className="absolute inset-0 bg-black/20"
                          animate={hoveredProject === project.id ? { opacity: 0 } : { opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Animated Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                          initial={{ y: '100%' }}
                          animate={hoveredProject === project.id ? { y: 0 } : { y: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Action Buttons */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center space-x-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                          >
                            <i className="fas fa-eye mr-2" />
                            Ver Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/20"
                          >
                            <i className="fab fa-github mr-2" />
                            Código
                          </Button>
                        </motion.div>
                      </div>
                      
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          DESTACADO
                        </motion.div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-xs rounded-full text-gray-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              ¿Listo para tu Proyecto?
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Convierte tus ideas en realidad con nuestras soluciones tecnológicas avanzadas.
            </p>
          </RevealText>
          <RevealText delay={0.6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlowEffect>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <span className="flex items-center space-x-2">
                    <span>Iniciar Proyecto</span>
                    <motion.i
                      className="fas fa-rocket"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </Button>
              </GlowEffect>
            </motion.div>
          </RevealText>
        </div>
      </section>
    </div>
  );
}