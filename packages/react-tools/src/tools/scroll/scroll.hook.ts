import type { RefObject } from "react";
import { useEffect, useState } from "react";

interface UseScrollSpyProps {
  refs: RefObject<HTMLElement & HTMLDivElement>[];
}

export function useScrollSpy({ refs = [] }: UseScrollSpyProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // 활성화 상태 업데이트
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.findIndex((ref) => ref.current === entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return activeSection;
}

export const scrollToSection = (ref: RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
