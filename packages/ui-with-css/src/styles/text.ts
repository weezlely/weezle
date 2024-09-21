import { fonts, FontsValue } from "./fonts";

export type TextConfig = {
  xxs?: FontsValue;
  xs?: FontsValue;
  sm?: FontsValue;
  md?: FontsValue;
  lg?: FontsValue;
  xl?: FontsValue;
  xxl?: FontsValue;
};

const text = {
  display: {
    lg: fonts.ft66,
    md: fonts.ft50,
    sm: fonts.ft40,
  },
  heading: {
    lg: fonts.ft50,
    md: fonts.ft40,
    sm: fonts.ft32,
  },
  title: {
    xxl: fonts.ft32,
    xl: fonts.ft25,
    lg: fonts.ft21,
    md: fonts.ft19,
    sm: fonts.ft17,
    xs: fonts.ft15,
  },
  body: {
    lg: fonts.ft19,
    md: fonts.ft17,
    sm: fonts.ft15,
  },
  detail: {
    lg: fonts.ft17,
    md: fonts.ft15,
    sm: fonts.ft13,
  },
  label: {
    lg: fonts.ft19,
    md: fonts.ft17,
    sm: fonts.ft17,
    xs: fonts.ft15,
  },
  link: {
    lg: fonts.ft19,
    md: fonts.ft17,
    sm: fonts.ft15,
  },
} as const;
export default text;
