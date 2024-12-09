import { Theme } from "@taeopia/react-table";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

/**
 * @Refactors
 *
 * @goals
 * 1. localStorage 접근 최소화: 초기화 시와 테마 변경 시에만 접근하도록 최적화.
 * 2. useEffect와 초기화 분리: useEffect의 역할을 테마 설정으로 제한하고 초기화 작업을 useState 내부에서 처리.
 * 3. 중복 코드 제거: setMode와 관련된 코드 최적화.
 * 4. 타입 안정성 강화: theme 값 검증 추가.
 */

export function useTheme(themeKey: string = "taeopia-theme", targetClass?: string) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(themeKey) as Theme;
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
  });

  useEffect(() => {
    if (targetClass) {
      const $el = document.getElementsByClassName(targetClass);

      Array.from($el).forEach((el) => {
        el.setAttribute("data-theme", theme);
      });
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    localStorage.setItem(themeKey, theme);
  }, [theme, themeKey]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme,
    onChange,
  } as const;
}
