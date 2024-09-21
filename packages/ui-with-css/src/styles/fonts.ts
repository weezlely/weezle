export type Fonts = typeof fonts;
export type FontsValue = (typeof fonts)[keyof typeof fonts];

export const fonts = {
  ft10: 10,
  ft12: 12,
  ft13: 13,
  ft14: 14,
  ft15: 15,
  ft16: 16,
  ft17: 17,
  ft18: 18,
  ft19: 19,
  ft20: 20,
  ft21: 21,
  ft25: 25,
  ft32: 32,
  ft36: 36,
  ft40: 40,
  ft48: 48,
  ft50: 50,
  ft66: 66,
} as const;
