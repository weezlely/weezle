import { useEffect, useRef, useState } from "react";

interface UseElementOnScreen extends IntersectionObserverInit {
  callback: (isEntry: boolean) => void;
}

export const useElementOnScreen = (options: UseElementOnScreen) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      const isEntry = entry.isIntersecting;
      setIsVisible(isEntry);
      options?.callback(isEntry);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return { ref, isVisible };
};

// import { createRef, useEffect, useState, RefObject } from "react";

// interface UseElementOnScreen extends IntersectionObserverInit {
//   elementReferences?: number; // 관찰할 ref 개수
//   callback?: (isEntry: boolean) => void; // 각 ref의 상태에 대한 콜백
// }

// export const useElementOnScreen = (options: UseElementOnScreen) => {
//   const { elementReferences = 1, callback } = options;
//   const refs: RefObject<HTMLDivElement>[] = Array.from({ length: elementReferences }, () => createRef<HTMLDivElement>());
//   const [visibleStates, setVisibleStates] = useState<boolean[]>(Array(elementReferences).fill(false));

//   useEffect(() => {
//     if (!refs.length) return;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = refs.findIndex((ref) => ref.current === entry.target);
//         if (index !== -1) {
//           const isEntry = entry.isIntersecting;
//           setVisibleStates((prev) => {
//             const newState = [...prev];
//             newState[index] = isEntry;
//             return newState;
//           });

//           if (callback) callback(isEntry);
//         }
//       });
//     }, options);

//     refs.forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       refs.forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [refs, options, callback]);

//   return { refs, visibleStates };
// };
