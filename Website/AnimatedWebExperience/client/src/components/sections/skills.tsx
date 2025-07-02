import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { SkillBar } from '@/components/ui/skill-bar';

const skills = [
  { name: 'JavaScript', percentage: 47, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
  { name: 'React', percentage: 45, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
  { name: 'GSAP Animations', percentage: 44, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  { name: 'Three.js', percentage: 42, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Habilidades
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <SkillBar
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={0.5 + index * 0.2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
