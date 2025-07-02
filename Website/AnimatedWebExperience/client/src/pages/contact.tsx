import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { AdvancedParticles, GlowEffect, RevealText, WaveAnimation, GeometricBackground } from '@/components/ui/advanced-animations';
import { EnhancedNavigation } from '@/components/ui/enhanced-navigation';

const stats = [
  { value: 500, label: 'Proyectos Completados', suffix: '+', color: 'text-purple-400', icon: 'fas fa-project-diagram' },
  { value: 250, label: 'Clientes Satisfechos', suffix: '+', color: 'text-cyan-400', icon: 'fas fa-users' },
  { value: 99, label: 'Satisfacción', suffix: '%', color: 'text-emerald-400', icon: 'fas fa-heart' },
  { value: 24, label: 'Soporte', suffix: '/7', color: 'text-orange-400', icon: 'fas fa-headset' },
];

const contactMethods = [
  {
    title: 'Email Directo',
    description: 'Respuesta en menos de 24 horas',
    icon: 'fas fa-envelope',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400',
    contact: 'hello@ultramega.dev',
    action: 'Enviar Email'
  },
  {
    title: 'WhatsApp Business',
    description: 'Chat en tiempo real',
    icon: 'fab fa-whatsapp',
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-400',
    contact: '+1 (555) 123-4567',
    action: 'Abrir WhatsApp'
  },
  {
    title: 'Llamada Directa',
    description: 'Consulta personalizada',
    icon: 'fas fa-phone',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    contact: '+1 (555) 987-6543',
    action: 'Llamar Ahora'
  },
  {
    title: 'LinkedIn',
    description: 'Conexión profesional',
    icon: 'fab fa-linkedin',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    contact: 'linkedin.com/in/ultramega',
    action: 'Conectar'
  },
];

const services = [
  {
    title: 'Desarrollo Web Completo',
    description: 'Aplicaciones web modernas con las últimas tecnologías',
    price: 'Desde $2,500',
    features: ['Diseño Responsive', 'Animaciones Avanzadas', 'SEO Optimizado', 'Panel de Admin'],
    color: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    title: 'Animaciones Personalizadas',
    description: 'Efectos visuales únicos que cautivan a tus usuarios',
    price: 'Desde $800',
    features: ['Micro-interacciones', 'Efectos 3D', 'Transiciones Fluidas', 'Loading Animado'],
    color: 'from-cyan-500 to-blue-500',
    popular: false
  },
  {
    title: 'Optimización & Performance',
    description: 'Mejora la velocidad y rendimiento de tu sitio web',
    price: 'Desde $500',
    features: ['Análisis Completo', 'Optimización Código', 'CDN Setup', 'Monitoreo 24/7'],
    color: 'from-emerald-500 to-green-500',
    popular: false
  },
];

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: '¡Mensaje enviado con éxito!',
        description: 'Te responderemos en menos de 24 horas.',
      });
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
    },
    onError: (error: any) => {
      toast({
        title: 'Error al enviar mensaje',
        description: error.message || 'Por favor intenta nuevamente.',
        variant: 'destructive',
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: 'Campos requeridos',
        description: 'Por favor completa todos los campos obligatorios.',
        variant: 'destructive',
      });
      return;
    }
    contactMutation.mutate(formData);
  };

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
              <span className="text-gradient">Contacto</span>
            </RevealText>
            <RevealText delay={0.3} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ¿Listo para crear algo extraordinario? Hablemos sobre tu próximo proyecto 
              y hagamos realidad tus ideas más ambiciosas.
            </RevealText>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <i className={`${stat.icon} text-3xl md:text-4xl ${stat.color}`} />
                      </motion.div>
                      <div className={`text-3xl md:text-4xl lg:text-5xl font-orbitron font-black mb-2 ${stat.color}`}>
                        <AnimatedCounter 
                          value={stat.value} 
                          suffix={stat.suffix || ''} 
                          duration={2}
                        />
                      </div>
                      <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Formas de Contacto
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, rotateY: 5 }}
              >
                <GlowEffect>
                  <Card className="glass-effect hover-lift h-full group">
                    <CardContent className="p-6 md:p-8 text-center">
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rounded-full transition-all duration-500`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, 0],
                          boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <i className={`${method.icon} text-2xl md:text-3xl text-white`} />
                      </motion.div>
                      
                      <h3 className={`text-xl md:text-2xl font-orbitron font-bold mb-2 ${method.textColor}`}>
                        {method.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {method.description}
                      </p>

                      <p className="text-white font-mono text-sm mb-6 bg-slate-800/50 p-2 rounded">
                        {method.contact}
                      </p>

                      <Button
                        className={`w-full bg-gradient-to-r ${method.color} hover:scale-105 transition-transform duration-300`}
                        onClick={() => {
                          // Here you would implement the actual contact method
                          toast({
                            title: `${method.action} activado`,
                            description: `Redirigiendo a ${method.title}...`,
                          });
                        }}
                      >
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Nuestros Servicios
            </h2>
          </RevealText>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <GlowEffect>
                  <Card className={`glass-effect hover-lift h-full relative overflow-hidden ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {service.popular && (
                      <motion.div
                        className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-bold"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        POPULAR
                      </motion.div>
                    )}
                    
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <i className="fas fa-code text-2xl text-white" />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>

                      <div className="text-center mb-6">
                        <div className="text-3xl font-orbitron font-black text-gradient mb-2">
                          {service.price}
                        </div>
                        <p className="text-xs text-gray-500">USD - Precio base</p>
                      </div>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            className="flex items-center space-x-2 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + fIndex * 0.1 }}
                          >
                            <i className="fas fa-check text-green-400" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-transform duration-300`}
                      >
                        Solicitar Cotización
                      </Button>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={ref} className="py-20 relative">
        <WaveAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Envíanos un Mensaje
            </h2>
          </RevealText>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GlowEffect>
              <Card className="glass-effect overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold mb-2 block text-white">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          className="bg-slate-700/50 border-slate-600 focus:border-purple-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold mb-2 block text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          className="bg-slate-700/50 border-slate-600 focus:border-purple-500 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="budget" className="text-sm font-semibold mb-2 block text-white">
                          Presupuesto Estimado
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">Seleccionar rango</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-2500">$1,000 - $2,500</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000+">$5,000+</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-sm font-semibold mb-2 block text-white">
                          Tiempo Estimado
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">Seleccionar tiempo</option>
                          <option value="urgente">Urgente (1-2 semanas)</option>
                          <option value="normal">Normal (3-4 semanas)</option>
                          <option value="flexible">Flexible (1-2 meses)</option>
                          <option value="planificado">Planificado (3+ meses)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-semibold mb-2 block text-white">
                        Asunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Asunto de tu consulta"
                        className="bg-slate-700/50 border-slate-600 focus:border-purple-500 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold mb-2 block text-white">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                        rows={6}
                        className="bg-slate-700/50 border-slate-600 focus:border-purple-500 resize-none text-white"
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover-lift text-lg py-4"
                        size="lg"
                        disabled={contactMutation.isPending}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>
                            {contactMutation.isPending ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                          </span>
                          <motion.i
                            className="fas fa-paper-plane"
                            animate={contactMutation.isPending ? { rotate: 360 } : { x: [0, 5, 0] }}
                            transition={contactMutation.isPending ? { duration: 1, repeat: Infinity } : { duration: 2, repeat: Infinity }}
                          />
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </GlowEffect>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: 'fab fa-github', color: 'hover:text-purple-400', link: '#' },
              { icon: 'fab fa-linkedin', color: 'hover:text-cyan-400', link: '#' },
              { icon: 'fab fa-twitter', color: 'hover:text-pink-400', link: '#' },
              { icon: 'fab fa-dribbble', color: 'hover:text-emerald-400', link: '#' },
              { icon: 'fab fa-instagram', color: 'hover:text-orange-400', link: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className={`${social.icon} text-3xl`} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-400 mb-4">
              © 2024 ULTRA MEGA. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Hecho con ❤️ y mucha creatividad
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}