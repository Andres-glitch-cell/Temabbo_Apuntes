import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { AdvancedParticles, GlowEffect, RevealText, GeometricBackground } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';
import { SkillBar } from '@/components/ui/skill-bar';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'fas fa-laptop-code',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React & Next.js', percentage: 95, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
      { name: 'TypeScript', percentage: 92, color: 'bg-gradient-to-r from-blue-600 to-purple-600' },
      { name: 'Tailwind CSS', percentage: 90, color: 'bg-gradient-to-r from-teal-400 to-cyan-500' },
      { name: 'Framer Motion', percentage: 88, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
      { name: 'Three.js & WebGL', percentage: 85, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    ]
  },
  {
    title: 'Backend Development',
    icon: 'fas fa-server',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Node.js & Express', percentage: 90, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
      { name: 'Python & Django', percentage: 85, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
      { name: 'PostgreSQL & MongoDB', percentage: 88, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
      { name: 'GraphQL & REST APIs', percentage: 87, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
      { name: 'Docker & Kubernetes', percentage: 82, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
    ]
  },
  {
    title: 'Design & Animation',
    icon: 'fas fa-palette',
    color: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'UI/UX Design', percentage: 93, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
      { name: 'GSAP Animations', percentage: 89, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
      { name: 'Figma & Adobe XD', percentage: 91, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
      { name: 'Motion Graphics', percentage: 86, color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
      { name: 'Interactive Design', percentage: 88, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
    ]
  },
  {
    title: 'Mobile & Cross-Platform',
    icon: 'fas fa-mobile-alt',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React Native', percentage: 87, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
      { name: 'Flutter & Dart', percentage: 83, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
      { name: 'PWA Development', percentage: 90, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
      { name: 'Ionic Framework', percentage: 80, color: 'bg-gradient-to-r from-blue-400 to-cyan-500' },
      { name: 'Mobile Optimization', percentage: 92, color: 'bg-gradient-to-r from-emerald-500 to-green-500' },
    ]
  },
];

const certifications = [
  {
    title: 'React Advanced Certification',
    issuer: 'Meta (Facebook)',
    year: '2024',
    icon: 'fab fa-react',
    color: 'text-cyan-400'
  },
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
    icon: 'fab fa-aws',
    color: 'text-orange-400'
  },
  {
    title: 'Google UX Design Certificate',
    issuer: 'Google',
    year: '2023',
    icon: 'fab fa-google',
    color: 'text-blue-400'
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: 'fab fa-js-square',
    color: 'text-yellow-400'
  },
];

const tools = [
  { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
  { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: 'text-orange-500' },
  { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
  { name: 'Postman', icon: 'fas fa-paper-plane', color: 'text-orange-400' },
  { name: 'Slack', icon: 'fab fa-slack', color: 'text-purple-400' },
  { name: 'Notion', icon: 'fas fa-sticky-note', color: 'text-gray-400' },
  { name: 'Adobe Creative Suite', icon: 'fab fa-adobe', color: 'text-red-500' },
  { name: 'Jira', icon: 'fab fa-jira', color: 'text-blue-600' },
];

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

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
              <span className="text-gradient">Habilidades</span>
            </RevealText>
            <RevealText delay={0.3} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Dominio técnico avanzado en múltiples tecnologías y frameworks modernos 
              para crear soluciones digitales excepcionales.
            </RevealText>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Expertise Técnico
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </RevealText>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveCategory(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <i className={`${category.icon} text-sm`} />
                  <span className="text-sm md:text-base">{category.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <GlowEffect>
              <Card className="glass-effect overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-8">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <i className={`${skillCategories[activeCategory].icon} text-3xl text-white`} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl font-orbitron font-bold text-center mb-8 text-gradient">
                    {skillCategories[activeCategory].title}
                  </h3>
                  
                  <div className="space-y-6">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <SkillBar
                          name={skill.name}
                          percentage={skill.percentage}
                          color={skill.color}
                          delay={0.3 + index * 0.1}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </GlowEffect>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Certificaciones
            </h2>
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <i className={`${cert.icon} text-4xl ${cert.color}`} />
                      </motion.div>
                      <h4 className="font-orbitron font-semibold mb-2 text-white">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-purple-400 text-xs font-semibold">{cert.year}</p>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Herramientas & Tecnologías
            </h2>
          </RevealText>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift">
                    <CardContent className="p-4 md:p-6 flex flex-col items-center">
                      <i className={`${tool.icon} text-3xl md:text-4xl ${tool.color} mb-3`} />
                      <span className="text-sm md:text-base font-medium text-white text-center">
                        {tool.name}
                      </span>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              En Constante Evolución
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              La tecnología evoluciona constantemente, y nosotros también. Nos mantenemos 
              actualizados con las últimas tendencias y mejores prácticas para ofrecer 
              siempre soluciones de vanguardia.
            </p>
          </RevealText>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: '5+', label: 'Años de Experiencia', color: 'text-purple-400' },
              { number: '50+', label: 'Tecnologías Dominadas', color: 'text-cyan-400' },
              { number: '100+', label: 'Proyectos Completados', color: 'text-emerald-400' },
              { number: '15+', label: 'Certificaciones', color: 'text-orange-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-orbitron font-black mb-2 ${stat.color}`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}