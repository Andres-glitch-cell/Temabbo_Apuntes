import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useTheme } from './theme-provider';
import { Button } from './button';
import { GlowEffect } from './advanced-animations';

const navItems = [
  { path: '/', label: 'Inicio', icon: 'fas fa-home' },
  { path: '/about', label: 'Acerca', icon: 'fas fa-user' },
  { path: '/portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
  { path: '/skills', label: 'Habilidades', icon: 'fas fa-code' },
  { path: '/experience', label: 'Experiencia', icon: 'fas fa-timeline' },
  { path: '/contact', label: 'Contacto', icon: 'fas fa-envelope' },
];

export function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50, scale: 0.8 },
    open: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <GlowEffect>
              <Link href="/">
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-gradient cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.8))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ULTRA MEGA
                </motion.div>
              </Link>
            </GlowEffect>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Link href={item.path}>
                    <motion.div
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer group ${
                        location === item.path
                          ? 'text-purple-400 bg-purple-500/20'
                          : 'text-white hover:text-purple-400'
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center space-x-2">
                        <motion.i 
                          className={`${item.icon} text-sm`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      
                      {location === item.path && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                          layoutId="activeIndicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <GlowEffect>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="glass-effect p-3 rounded-full hover:bg-purple-500/20 transition-all duration-300"
                >
                  <motion.i 
                    className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} text-lg`}
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </GlowEffect>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden glass-effect p-3 rounded-full hover:bg-purple-500/20"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <motion.i 
                  className="fas fa-bars text-lg"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Progress Bar */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center glass-effect"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-8 right-8 p-3 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times text-2xl" />
              </motion.button>

              {/* Menu Items */}
              <div className="space-y-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                  >
                    <Link href={item.path}>
                      <motion.div
                        className={`flex items-center space-x-4 text-2xl font-semibold cursor-pointer ${
                          location === item.path
                            ? 'text-purple-400'
                            : 'text-white hover:text-purple-400'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ 
                          scale: 1.1, 
                          x: 20,
                          filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.i 
                          className={item.icon}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span>{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="absolute bottom-16 flex space-x-6"
                variants={itemVariants}
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
                    className={`text-gray-400 ${social.color} transition-colors text-xl`}
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Action Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <GlowEffect>
              <motion.button
                className="w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className="fas fa-arrow-up text-white text-lg" />
              </motion.button>
            </GlowEffect>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}