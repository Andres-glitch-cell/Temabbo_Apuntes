import { useRef } from "react";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  return {
    cursorRef,
    followerRef
  };
}
