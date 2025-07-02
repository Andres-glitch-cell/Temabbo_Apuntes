import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  count?: number;
}

export function Particles({ count = 50 }: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = Math.random() * 4 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}

export function FloatingElements() {
  const elements = [
    { size: 'w-4 h-4', color: 'bg-purple-500', delay: 1000, position: 'top-1/4 left-1/4' },
    { size: 'w-6 h-6', color: 'bg-cyan-400', delay: 2000, position: 'top-3/4 right-1/4' },
    { size: 'w-3 h-3', color: 'bg-pink-400', delay: 3000, position: 'bottom-1/4 left-1/3' },
    { size: 'w-5 h-5', color: 'bg-emerald-400', delay: 1500, position: 'top-1/2 right-1/3' },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full blur-sm opacity-60`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay / 1000,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
