import { useEffect } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function CustomCursor() {
  const { cursorRef, followerRef } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = e.clientX - 20 + 'px';
          followerRef.current.style.top = e.clientY - 20 + 'px';
        }
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [cursorRef, followerRef]);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
