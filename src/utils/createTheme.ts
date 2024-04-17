import { colors } from "styles";

const defaultTheme = {
  colors,
};

const createTheme = <T>(customizations: T) => {
  return {
    ...defaultTheme,
    ...customizations,
  };
};
export default createTheme;
