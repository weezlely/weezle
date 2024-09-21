import { styleConfigs } from "../configs";
import { createLightAndDarkThemes } from "./themeRepository";

const { palette } = styleConfigs;
// Navy Theme
export const navyTheme = createLightAndDarkThemes(palette.navy, palette.blue);

// Blue Theme
export const blueTheme = createLightAndDarkThemes(palette.blue, palette.navy);

// RoyalBlue Theme
export const royalBlueTheme = createLightAndDarkThemes(palette.royalBlue, palette.skyBlue);

// SkyBlue Theme
export const skyBlueTheme = createLightAndDarkThemes(palette.skyBlue, palette.royalBlue);

// Aqua Theme
export const aquaTheme = createLightAndDarkThemes(palette.aqua, palette.teal);

// Teal Theme
export const tealTheme = createLightAndDarkThemes(palette.teal, palette.aqua);

// Green Theme
export const greenTheme = createLightAndDarkThemes(palette.green, palette.limeGreen);

// LimeGreen Theme
export const limeGreenTheme = createLightAndDarkThemes(palette.limeGreen, palette.green);

// Lime Theme
export const limeTheme = createLightAndDarkThemes(palette.lime, palette.olive);

// Olive Theme
export const oliveTheme = createLightAndDarkThemes(palette.olive, palette.lime);

// Yellow Theme
export const yellowTheme = createLightAndDarkThemes(palette.yellow, palette.gold);

// Gold Theme
export const goldTheme = createLightAndDarkThemes(palette.gold, palette.yellow);
