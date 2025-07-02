import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Componente para efectos de ondas de agua
export function WaveAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          initial={{ d: "M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z" }}
          animate={{ 
            d: [
              "M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z",
              "M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z",
              "M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 69, 19, 0.3)" />
            <stop offset="50%" stopColor="rgba(0, 191, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(138, 43, 226, 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Componente para partículas mejoradas con físicas
export function AdvancedParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const particleCount = 80;
    const colors = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Componente para efectos de brillo dinámico
export function GlowEffect({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        filter: [
          "drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))",
          "drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))",
          "drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))"
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

// Componente para texto con efecto de máquina de escribir mejorado
export function AdvancedTypewriter({ 
  texts, 
  speed = 80, 
  deleteSpeed = 40, 
  pauseTime = 1500,
  className = "" 
}: {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-purple-400 font-light ml-1"
      >
        |
      </motion.span>
    </div>
  );
}

// Componente para revelar texto con animación
export function RevealText({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Componente para líneas animadas de conexión
export function ConnectedLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 20}%`}
            y1="0%"
            x2={`${30 + i * 15}%`}
            y2="100%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Interfaz para rastros de estrellas
interface StarTrail {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  velocity: { x: number; y: number };
  size: number;
  color: string;
}

// Componente para efecto de cursor con rastro de estrellas
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [starTrails, setStarTrails] = useState<StarTrail[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      // Calcular velocidad del movimiento
      const velocity = {
        x: newPos.x - lastPosRef.current.x,
        y: newPos.y - lastPosRef.current.y
      };
      
      // Crear rastro suave solo con movimiento moderado
      const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      if (speed > 5) {
        // Limitar creación de partículas para fluidez
        const shouldCreate = Date.now() - (window as any).lastParticleTime > 50; // Max 20 partículas por segundo
        if (shouldCreate) {
          (window as any).lastParticleTime = Date.now();
          
          setStarTrails(prev => {
            // Máximo 8 estrellas activas
            if (prev.length >= 8) return prev.slice(-7);
            
            const newStar: StarTrail = {
              id: trailIdRef.current++,
              x: newPos.x + (Math.random() - 0.5) * 8,
              y: newPos.y + (Math.random() - 0.5) * 8,
              timestamp: Date.now(),
              velocity: {
                x: (Math.random() - 0.5) * 1,
                y: (Math.random() - 0.5) * 1
              },
              size: Math.random() * 4 + 2,
              color: ['text-purple-300', 'text-cyan-300'][Math.floor(Math.random() * 2)]
            };
            
            return [...prev, newStar];
          });
        }
      }
      
      lastPosRef.current = newPos;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    // Optimización con requestAnimationFrame para mejor rendimiento
    let animationFrameId: number;
    let lastFrameTime = 0;
    
    const animateStars = (currentTime: number) => {
      // Limitar a 30fps para mejor rendimiento
      if (currentTime - lastFrameTime < 33) {
        animationFrameId = requestAnimationFrame(animateStars);
        return;
      }
      lastFrameTime = currentTime;
      
      const now = Date.now();
      setStarTrails(prev => {
        const filtered = prev.filter(star => now - star.timestamp < 2000);
        
        // Actualizar posiciones solo si hay estrellas y no demasiadas
        if (filtered.length > 0 && filtered.length < 20) {
          return filtered.map(star => ({
            ...star,
            x: star.x + star.velocity.x * 0.2,
            y: star.y + star.velocity.y * 0.2,
            velocity: {
              x: star.velocity.x * 0.995,
              y: star.velocity.y * 0.995 + 0.02
            }
          }));
        }
        return filtered;
      });
      
      animationFrameId = requestAnimationFrame(animateStars);
    };
    
    animationFrameId = requestAnimationFrame(animateStars);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Cursor principal ultra-fluido */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full ${
          isPointer 
            ? 'w-12 h-12 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 border-2 border-purple-400' 
            : 'w-8 h-8 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border border-purple-400/50'
        }`}
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
          boxShadow: isPointer 
            ? '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)' 
            : '0 0 10px rgba(147, 51, 234, 0.3)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Rastro de estrellas y purpurina */}
      {starTrails.map((star) => {
        const age = Date.now() - star.timestamp;
        const progress = age / 2000; // 2 segundos
        const opacity = Math.max(0, 1 - progress);
        const scale = 1 - progress * 0.3;
        
        return (
          <motion.div
            key={star.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: star.x,
              top: star.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1, 0.8],
              rotate: [0, 180, 360],
              transition: { duration: 2, ease: "easeOut" }
            }}
          >
            {/* Brillo exterior */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                width: star.size * 2,
                height: star.size * 2,
                background: `radial-gradient(circle, rgba(147, 51, 234, ${opacity * 0.6}) 0%, rgba(6, 182, 212, ${opacity * 0.4}) 50%, transparent 70%)`,
                filter: 'blur(3px)',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Estrella principal */}
            <div 
              className={`absolute ${star.color}`}
              style={{
                fontSize: `${star.size}px`,
                transform: 'translate(-50%, -50%)',
                textShadow: `0 0 ${star.size}px currentColor, 0 0 ${star.size * 2}px rgba(147, 51, 234, ${opacity})`,
                filter: `brightness(${1 + opacity * 0.5}) saturate(${1 + opacity})`,
              }}
            >
              ✨
            </div>

            {/* Partículas de purpurina simplificadas */}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i === 0 
                    ? `rgba(147, 51, 234, ${opacity})` 
                    : `rgba(6, 182, 212, ${opacity})`,
                  left: `${(i - 0.5) * star.size * 0.3}px`,
                  top: `${(i - 0.5) * star.size * 0.2}px`,
                  transform: 'translate(-50%, -50%)',
                  animation: `twinkle ${0.6 + i * 0.2}s ease-in-out infinite alternate`,
                  boxShadow: `0 0 3px currentColor`,
                }}
              />
            ))}
          </motion.div>
        );
      })}
    </>
  );
}

// Componente para fondo animado con patrones geométricos
export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Líneas geométricas animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.polygon
            key={i}
            points={`${50 + i * 10},${20 + i * 15} ${70 + i * 5},${40 + i * 10} ${60 + i * 8},${60 + i * 12}`}
            fill="none"
            stroke="url(#polygon-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        <defs>
          <linearGradient id="polygon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}