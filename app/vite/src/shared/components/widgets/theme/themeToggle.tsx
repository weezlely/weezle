import { useTheme } from "@taeopia/react-table";

import { keyConstant } from "@/shared/constants";

export const ThemeToggle = () => {
  const themes = useTheme(keyConstant.THEME, {});

  return (
    <div className="lightmode">
      <div className="inner template">
        <input type="radio" name="toggle" id="toggle-radio-light" onChange={themes.toggleTheme} checked={themes.theme === "light"} />
        <label htmlFor="toggle-radio-light" className="tolight">
          <i className="fas fa-sun tolight"></i>
        </label>

        <input type="radio" name="toggle" id="toggle-radio-dark" onChange={themes.toggleTheme} checked={themes.theme === "dark"} />
        <label htmlFor="toggle-radio-dark" className="todark">
          <i className="fas fa-moon todark"></i>
        </label>
      </div>
    </div>
  );
};
