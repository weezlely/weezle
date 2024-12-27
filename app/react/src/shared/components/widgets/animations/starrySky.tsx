import { useMemo } from "react";
import type { PropsWithChildren } from "react";

interface StarrySkyWrapperProps extends PropsWithChildren {}

export const StarrySkyWrapper = (props: StarrySkyWrapperProps) => {
  return <div className="starry-sky">{props.children}</div>;
};

const generateStars = (count: number) => {
  return useMemo(() => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const size = `${Math.random() * 3 + 1}px`; // 별 크기: 1px ~ 4px
      const delay = `${Math.random() * 2}s`; // 애니메이션 딜레이: 0s ~ 2s

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left,
            top,
            width: size,
            height: size,
            animationDelay: delay,
          }}
        />
      );
    }
    return stars;
  }, [count]);
};

export const StarrySky = () => {
  const stars = generateStars(70);
  return <>{stars}</>;
};
