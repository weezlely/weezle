import type { StyleConfig } from "../configs/type";
import { styleConfigs } from "../configs";

const defaultTheme: StyleConfig = {
  ...styleConfigs,
};

const createTheme = <T>(customizations: T) => {
  return {
    ...defaultTheme,
    ...customizations,
  };
};
export default createTheme;
