import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScroll(): {
  scrollY?: number;
  scrollX?: number;
  scrollDirection?: ScrollDirection;
  // eslint-disable-next-line indent
} {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect>();
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    if (bodyOffset) {
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
