import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.gsap && titleRef.current && subtitleRef.current && buttonRef.current) {
      const tl = window.gsap.timeline();
      
      tl.from(titleRef.current, { 
        duration: 2, 
        y: 100, 
        opacity: 0, 
        ease: 'power4.out' 
      })
      .from(subtitleRef.current, { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
      }, '-=1')
      .from(buttonRef.current, { 
        duration: 1, 
        scale: 0, 
        opacity: 0, 
        ease: 'back.out(1.7)' 
      }, '-=0.5');
    }
  }, []);

  const handleButtonClick = () => {
    if (window.gsap && buttonRef.current) {
      window.gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative hero-gradient">
      <div className="text-center z-10">
        <h1 
          ref={titleRef}
          className="glitch text-gradient text-8xl font-black mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ULTRA MEGA
        </h1>
        <p 
          ref={subtitleRef}
          className="text-2xl mb-12 opacity-80"
        >
          Experiencia Visual Extraordinaria
        </p>
        <button 
          ref={buttonRef}
          onClick={handleButtonClick}
          className="cta-button text-white px-12 py-4 rounded-full text-xl font-semibold cursor-pointer"
        >
          <i className="fas fa-rocket mr-2"></i>
          Explorar Ahora
        </button>
      </div>
    </section>
  );
}
