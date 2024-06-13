const colors = {
  white: "#fff",
  black: "#000",
  primary_5: "#EFF5FF",
  primary_10: "#D3E1FB",
  primary_20: "#A7C4F7",
  primary_30: "#7CA6F3",
  primary_40: "#5089EF",
  primary_50: "#245BEB",
  primary_60: "#1D56BC",
  primary_70: "#16408D",
  primary_80: "#0E2B5E",
  primary_90: "#07152F",

  secondary_5: "#EDF1F5",
  secondary_10: "#CDD7E4",
  secondary_20: "#B4C4D6",
  secondary_30: "#99B0CB",
  secondary_40: "#2A5C96",
  secondary_50: "#003675",
  secondary_60: "#002B5E",
  secondary_70: "#002046",
  secondary_80: "#00162F",
  secondary_90: "#000B17",

  grayscale_5: "#F8F8F8",
  grayscale_10: "#F0F0F0",
  grayscale_20: "#E4E4E4",
  grayscale_30: "#D8D8D8",
  grayscale_40: "#C6C6C6",
  grayscale_50: "#8E8E8E",
  grayscale_60: "#717171",
  grayscale_70: "#555555",
  grayscale_80: "#2D2D2D",
  grayscale_90: "#1D1D1D",
} as Colors;

const fonts = {
  ft10: 10,
  ft12: 12,
  ft14: 14,
  ft16: 16,
  ft18: 18,
  ft20: 20,
  ft36: 36,
  ft48: 48,
} as const;

const fontSizes = {
  xs: fonts.ft10,
  sm: fonts.ft12,
  md: fonts.ft14,
  lg: fonts.ft16,
  xl: fonts.ft20,
  xxl: fonts.ft36,
  xxxl: fonts.ft48,
} as const;

const fontWeights = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
} as const;

const styleConfigs = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
};
export default styleConfigs;
