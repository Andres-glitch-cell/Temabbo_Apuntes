import { useCallback, useEffect } from "react";

export function useAnimations() {
  const initializeAnimations = useCallback(() => {
    if (!window.gsap) return;

    // Floating Elements Animation
    window.gsap.to('.floating-element', {
      y: '-=30',
      duration: 3,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      window.gsap.to('.floating-element', {
        x: (mouseX - 0.5) * 50,
        y: (mouseY - 0.5) * 50,
        duration: 1,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Section Animations
    window.gsap.utils.toArray('section').forEach((section: any) => {
      const bg = section.querySelector('.morphing-shape');
      if (bg) {
        window.gsap.fromTo(bg, {
          rotation: 0,
          scale: 0.8,
          opacity: 0
        }, {
          rotation: 360,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });

    // Cards Animation
    window.gsap.utils.toArray('.glass-card').forEach((card: any, i: number) => {
      window.gsap.fromTo(card, {
        y: 100,
        opacity: 0,
        rotationX: -90
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Background Color Change on Scroll
    window.gsap.to('body', {
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0a0a0a)',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true
      }
    });

    window.gsap.to('body', {
      background: 'linear-gradient(135deg, #16213e, #0f3460, #533483)',
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true
      }
    });

    // Navigation Hover Effects
    window.gsap.utils.toArray('nav a').forEach((link: any) => {
      link.addEventListener('mouseenter', () => {
        window.gsap.to(link, {
          scale: 1.1,
          color: '#6366f1',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        window.gsap.to(link, {
          scale: 1,
          color: '#ffffff',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { initializeAnimations };
}
