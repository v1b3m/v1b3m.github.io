import { useEffect, useState } from "react";
import { useScroll } from "./useScroll";

export function useHeader(): {
  visible: boolean;
  // eslint-disable-next-line indent
} {
  const [visible, setVisible] = useState(true);
  const { scrollY, scrollDirection } = useScroll();

  useEffect(() => {
    if (scrollY && scrollY > 50) {
      setVisible(false);
    }

    if (scrollDirection === "down") {
      setVisible(true);
    }
  }, [scrollY, scrollDirection]);

  return { visible };
}
