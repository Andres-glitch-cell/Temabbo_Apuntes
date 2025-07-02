import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { AdvancedParticles, GlowEffect, RevealText, GeometricBackground } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';

const experiences = [
  {
    year: '2024 - Presente',
    title: 'Especialista en Animaciones Web Avanzadas',
    company: 'Ultra Mega Studio',
    description: 'Creando experiencias visuales extraordinarias con las últimas tecnologías de animación web. Lidero un equipo de desarrolladores especializados en crear interfaces que superan las expectativas.',
    achievements: [
      'Aumento del 150% en engagement de usuarios',
      'Reducción del 40% en tiempo de carga',
      'Implementación de 50+ animaciones personalizadas',
      'Certificación en Three.js y WebGL avanzado'
    ],
    technologies: ['React', 'Framer Motion', 'Three.js', 'GSAP', 'WebGL'],
    color: 'bg-purple-500',
    textColor: 'text-purple-400',
    side: 'left',
    icon: 'fas fa-magic'
  },
  {
    year: '2023',
    title: 'Desarrollador Frontend Senior',
    company: 'TechVision Inc.',
    description: 'Liderando proyectos de desarrollo frontend con enfoque en UX/UI innovador. Responsable de la arquitectura y optimización de aplicaciones de alto rendimiento.',
    achievements: [
      'Migración exitosa de 10+ aplicaciones a React 18',
      'Implementación de Design System completo',
      'Mejora del 60% en métricas de rendimiento',
      'Mentoría de 5 desarrolladores junior'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    color: 'bg-cyan-500',
    textColor: 'text-cyan-400',
    side: 'right',
    icon: 'fas fa-code'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    description: 'Desarrollo de aplicaciones web completas desde el concepto hasta la implementación. Especialización en integración de APIs y optimización de bases de datos.',
    achievements: [
      'Desarrollo de 15+ aplicaciones web completas',
      'Integración con 20+ APIs externas',
      'Optimización de consultas SQL (70% más rápidas)',
      'Implementación de arquitectura microservicios'
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    side: 'left',
    icon: 'fas fa-server'
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'StartupHub',
    description: 'Comenzando el viaje en el mundo del desarrollo web moderno. Enfoque en crear interfaces de usuario intuitivas y responsive.',
    achievements: [
      'Desarrollo de 8 sitios web responsive',
      'Implementación de PWA para móviles',
      'Colaboración en equipo ágil (Scrum)',
      'Certificación en React y JavaScript ES6+'
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Firebase'],
    color: 'bg-pink-500',
    textColor: 'text-pink-400',
    side: 'right',
    icon: 'fas fa-laptop-code'
  },
  {
    year: '2020',
    title: 'Junior Web Developer',
    company: 'CodeCraft Agency',
    description: 'Primeros pasos en el desarrollo profesional. Aprendizaje intensivo de tecnologías modernas y mejores prácticas de desarrollo.',
    achievements: [
      'Contribución en 12+ proyectos cliente',
      'Dominio de HTML5, CSS3 y JavaScript',
      'Implementación de responsive design',
      'Colaboración con equipos de diseño'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    color: 'bg-orange-500',
    textColor: 'text-orange-400',
    side: 'left',
    icon: 'fas fa-graduation-cap'
  },
];

const skills = [
  { category: 'Frontend', count: 15, color: 'text-purple-400' },
  { category: 'Backend', count: 12, color: 'text-cyan-400' },
  { category: 'Database', count: 8, color: 'text-emerald-400' },
  { category: 'DevOps', count: 6, color: 'text-orange-400' },
];

export default function Experience() {
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
              <span className="text-gradient">Mi Experiencia</span>
            </RevealText>
            <RevealText delay={0.3} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Un viaje de crecimiento constante en el mundo del desarrollo web, 
              desde los primeros pasos hasta liderar proyectos de vanguardia.
            </RevealText>
          </motion.div>

          {/* Skills Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
            {skills.map((skill, index) => (
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
                        className={`text-3xl md:text-4xl font-orbitron font-black mb-2 ${skill.color}`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {skill.count}+
                      </motion.div>
                      <p className="text-sm md:text-base text-gray-300 font-medium">{skill.category}</p>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Trayectoria Profesional
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </RevealText>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-emerald-500 rounded-full"
                initial={{ height: 0 }}
                animate={isIntersecting ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 3, delay: 0.5 }}
              />
              
              {/* Timeline Items */}
              <div className="space-y-16 md:space-y-20">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      exp.side === 'right' ? 'md:flex-row-reverse' : ''
                    }`}
                    initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute left-6 md:left-1/2 w-6 h-6 ${exp.color} rounded-full transform -translate-x-3 md:-translate-x-3 z-10 border-4 border-slate-900 flex items-center justify-center`}
                      initial={{ scale: 0 }}
                      animate={isIntersecting ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                      whileHover={{ scale: 1.5 }}
                    >
                      <i className={`${exp.icon} text-white text-xs`} />
                    </motion.div>

                    {/* Content Card */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${exp.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                      <GlowEffect>
                        <Card className="glass-effect hover-lift overflow-hidden">
                          <CardContent className="p-6 md:p-8">
                            <div className={`${exp.textColor} font-semibold mb-2 text-sm md:text-base`}>
                              {exp.year}
                            </div>
                            <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-2 text-white">
                              {exp.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-gray-300 mb-4">
                              {exp.company}
                            </h4>
                            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                              {exp.description}
                            </p>
                            
                            {/* Achievements */}
                            <div className="mb-6">
                              <h5 className="font-semibold text-white mb-3">Logros Destacados:</h5>
                              <div className="space-y-2">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <motion.div
                                    key={achIndex}
                                    className="flex items-center space-x-2 text-sm text-gray-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 1.5 + index * 0.2 + achIndex * 0.05 }}
                                  >
                                    <motion.i 
                                      className="fas fa-check-circle text-green-400"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ duration: 2, delay: achIndex * 0.2, repeat: Infinity }}
                                    />
                                    <span>{achievement}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="font-semibold text-white mb-3">Tecnologías:</h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                  <motion.span
                                    key={techIndex}
                                    className="px-3 py-1 bg-slate-700/50 text-xs rounded-full text-gray-300 border border-slate-600"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1.8 + index * 0.1 + techIndex * 0.05 }}
                                    whileHover={{ 
                                      scale: 1.1, 
                                      backgroundColor: 'rgba(139, 92, 246, 0.3)',
                                      borderColor: 'rgba(139, 92, 246, 0.5)'
                                    }}
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </GlowEffect>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Growth Visualization */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Evolución Profesional
            </h2>
          </RevealText>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Desarrollo Técnico',
                  description: 'Evolución constante en tecnologías frontend y backend',
                  icon: 'fas fa-chart-line',
                  color: 'from-purple-500 to-pink-500',
                  stats: ['15+ Tecnologías', '5 Años Exp.', '100+ Proyectos']
                },
                {
                  title: 'Liderazgo',
                  description: 'Crecimiento en roles de liderazgo y mentoría',
                  icon: 'fas fa-users',
                  color: 'from-cyan-500 to-blue-500',
                  stats: ['3 Equipos Liderados', '10+ Mentorías', '5 Certificaciones']
                },
                {
                  title: 'Innovación',
                  description: 'Implementación de soluciones creativas y avanzadas',
                  icon: 'fas fa-lightbulb',
                  color: 'from-emerald-500 to-green-500',
                  stats: ['50+ Animaciones', '20+ APIs', '10+ Optimizaciones']
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                >
                  <GlowEffect>
                    <Card className="glass-effect hover-lift h-full">
                      <CardContent className="p-8 text-center">
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <i className={`${area.icon} text-3xl text-white`} />
                        </motion.div>
                        
                        <h3 className="text-xl font-orbitron font-bold mb-4 text-white">
                          {area.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {area.description}
                        </p>

                        <div className="space-y-2">
                          {area.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              className="text-xs text-gray-400 bg-slate-700/30 rounded-full px-3 py-1"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + index * 0.1 + statIndex * 0.05 }}
                            >
                              {stat}
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
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              Hacia el Futuro
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Mi viaje apenas comienza. Cada proyecto es una oportunidad para innovar, 
              aprender y crear experiencias que marquen la diferencia.
            </p>
          </RevealText>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: 'fas fa-vr-cardboard', title: 'Realidad Virtual', desc: 'WebXR y experiencias inmersivas' },
              { icon: 'fas fa-brain', title: 'Inteligencia Artificial', desc: 'ML en frontend y automización' },
              { icon: 'fas fa-rocket', title: 'Innovación Web', desc: 'Tecnologías emergentes y experimentación' },
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <i className={`${goal.icon} text-2xl text-white`} />
                </motion.div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-white">{goal.title}</h3>
                <p className="text-gray-400">{goal.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}