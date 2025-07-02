import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ name, percentage, color = 'bg-gradient-to-r from-purple-500 to-cyan-500', delay = 0 }: SkillBarProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        <span className="text-purple-400 font-bold">{percentage}%</span>
      </div>
      <div className="skill-bar h-3 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className={`skill-progress h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isIntersecting ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 2, 
            delay,
            ease: [0.4, 0, 0.2, 1] 
          }}
        />
      </div>
    </div>
  );
}
