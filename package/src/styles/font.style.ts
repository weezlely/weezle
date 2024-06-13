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

export const fontSizes = {
  xs: fonts.ft10,
  sm: fonts.ft12,
  md: fonts.ft14,
  lg: fonts.ft16,
  xl: fonts.ft20,
  xxl: fonts.ft36,
  xxxl: fonts.ft48,
} as const;

export const fontWeights = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
} as const;
