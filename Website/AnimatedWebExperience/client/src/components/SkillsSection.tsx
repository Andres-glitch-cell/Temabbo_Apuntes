import { useEffect, useRef } from "react";

const skills = [
  { name: "JavaScript", percentage: 95 },
  { name: "React", percentage: 90 },
  { name: "GSAP Animations", percentage: 88 },
  { name: "Three.js", percentage: 85 }
];

const timelineItems = [
  { year: "2024 - Presente", title: "Especialista en Animaciones Web Avanzadas" },
  { year: "2023", title: "Desarrollador Frontend Senior" },
  { year: "2022", title: "Certificación en Three.js y WebGL" },
  { year: "2021", title: "Inicio en Desarrollo Web" }
];

export default function SkillsSection() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.gsap) {
      // Animate progress bars
      progressRefs.current.forEach((bar, index) => {
        if (bar) {
          const skill = skills[index];
          window.gsap.fromTo(bar, {
            width: '0%'
          }, {
            width: skill.percentage + '%',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });

      // Animate counters
      counterRefs.current.forEach((counter, index) => {
        if (counter) {
          const skill = skills[index];
          window.gsap.fromTo(counter, {
            innerHTML: 0
          }, {
            innerHTML: skill.percentage,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });
    }
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-gradient text-6xl font-bold text-center mb-12"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Habilidades
        </h2>
        
        <div className="mt-12">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-xl">{skill.name}</span>
                <span className="text-xl text-blue-400">
                  <span 
                    ref={el => counterRefs.current[index] = el}
                    className="counter"
                  >
                    0
                  </span>%
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  ref={el => progressRefs.current[index] = el}
                  className="progress-fill"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline mt-20">
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item glass-card rounded-2xl p-8 mb-8 ${
                index % 2 === 0 ? '' : 'ml-auto'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.year}</h3>
              <p className="text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
