import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2, suffix = '', className = '' }: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
      const animation = animate(count, value, {
        duration,
        ease: 'easeOut',
      });

      return animation.stop;
    }
  }, [isIntersecting, hasAnimated, count, value, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [rounded]);

  return (
    <div ref={ref} className={className}>
      <motion.span>
        {displayValue}
        {suffix}
      </motion.span>
    </div>
  );
}
