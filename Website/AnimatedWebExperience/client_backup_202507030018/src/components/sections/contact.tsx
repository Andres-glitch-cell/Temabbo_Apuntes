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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

const stats = [
  { value: 495, label: 'Proyectos Completados', color: 'text-purple-400' },
  { value: 247, label: 'Clientes Satisfechos', color: 'text-cyan-400' },
  { value: 49, label: 'Satisfacción', suffix: '%', color: 'text-emerald-400' },
];

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Gracias por contactarnos. Te responderemos pronto.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: 'Error al enviar mensaje',
        description: error.message || 'Ocurrió un error inesperado.',
        variant: 'destructive',
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: 'Campos requeridos',
        description: 'Por favor completa todos los campos.',
        variant: 'destructive',
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Contacto
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass-effect hover-lift">
                <CardContent className="p-8 text-center">
                  <div className={`text-5xl font-orbitron font-black mb-2 ${stat.color}`}>
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix || ''} 
                      duration={2}
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{stat.label}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="glass-effect">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="bg-slate-700/50 border-slate-600 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="bg-slate-700/50 border-slate-600 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-semibold mb-2 block">
                    Asunto
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Asunto del mensaje"
                    className="bg-slate-700/50 border-slate-600 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold mb-2 block">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tu mensaje aquí..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 focus:border-purple-500 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover-lift"
                  size="lg"
                  disabled={contactMutation.isPending}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>
                      {contactMutation.isPending ? 'Enviando...' : 'Enviar Mensaje'}
                    </span>
                    <i className="fas fa-paper-plane" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex justify-center space-x-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { icon: 'fab fa-github', color: 'hover:text-purple-400' },
              { icon: 'fab fa-linkedin', color: 'hover:text-cyan-400' },
              { icon: 'fab fa-twitter', color: 'hover:text-pink-400' },
              { icon: 'fab fa-dribbble', color: 'hover:text-emerald-400' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${social.icon} text-2xl`} />
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            © 2024 ULTRA MEGA. Todos los derechos reservados.
          </motion.p>
        </div>
      </footer>
    </section>
  );
}
