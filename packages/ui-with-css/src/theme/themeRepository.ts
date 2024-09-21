import { createGlobalTheme, createTheme } from "@vanilla-extract/css";
import type { CreateThemePrams } from "./theme.type";
import { palette, themeVars } from "../vars";
import { styleConfigs } from "../configs";

// Light Mode와 Dark Mode 생성 함수
export const createLightAndDarkThemes = (primaryColor: CreateThemePrams, secondaryColor: CreateThemePrams) => {
  // 전역 테마 생성
  createGlobalTheme(":root", themeVars, {
    color: {
      background: primaryColor["05"], // 기본 배경색 밝은 버전
      heading: palette.black["50"],
      text: primaryColor["90"], // 어두운 텍스트 색상
      primary: primaryColor["50"], // 주요 색상
      secondary: secondaryColor["50"], // 부 색상
      accent: primaryColor["20"], // 강조 색상
      muted: primaryColor["05"], // 희미한 색상
      border: primaryColor["40"], // 중간 테두리 색상
      highlight: primaryColor["60"], // 밝은 하이라이트
      success: palette.green["50"],
      warning: palette.orange["50"],
      error: palette.red["50"],
    },
    font: {
      body: "Arial, sans-serif",
      heading: "Georgia, serif",
    },
    spacing: styleConfigs.spacings,
    border: {
      defaultColor: primaryColor["40"],
      focusColor: primaryColor["50"],
      errorColor: palette.red["50"],
      successColor: palette.green["50"],
      width: {
        default: "1px",
        thick: "2px",
      },
      radius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        xxl: "16px",
      },
      style: {
        default: "solid",
        emphasis: "dashed",
      },
    },
    shadow: {
      default: "0 2px 4px rgba(0, 0, 0, 0.1)",
      emphasis: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    opacity: {
      default: "1",
      disabled: "0.6",
    },
    interactive: {
      hoverColor: primaryColor["60"],
      focusColor: primaryColor["70"],
      activeColor: primaryColor["80"],
    },
  });

  return {
    light: createTheme(themeVars, {
      color: {
        background: primaryColor["05"],
        heading: palette.black["50"],
        text: palette.white["05"],
        primary: primaryColor["50"],
        secondary: secondaryColor["50"],
        accent: primaryColor["20"],
        muted: primaryColor["05"],
        border: primaryColor["40"],
        highlight: primaryColor["60"],
        success: palette.green["50"],
        warning: palette.coral["50"],
        error: palette.red["50"],
      },
      font: {
        body: "Arial, sans-serif",
        heading: "Georgia, serif",
      },
      spacing: styleConfigs.spacings,
      border: {
        defaultColor: primaryColor["40"],
        focusColor: primaryColor["70"],
        errorColor: palette.red["70"],
        successColor: palette.green["70"],
        width: {
          default: "1px",
          thick: "2px",
        },
        radius: {
          xs: "2px",
          sm: "4px",
          md: "8px",
          lg: "10px",
          xl: "12px",
          xxl: "16px",
        },
        style: {
          default: "solid",
          emphasis: "dashed",
        },
      },
      shadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.1)",
        emphasis: " 0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16);",
      },
      opacity: {
        default: "1",
        disabled: "0.6",
      },
      interactive: {
        hoverColor: primaryColor["60"],

        focusColor: primaryColor["70"],

        activeColor: primaryColor["80"],
      },
    }),
    dark: createTheme(themeVars, {
      color: {
        background: palette.black["60"], // 어두운 버전의 배경색
        heading: palette.white["50"],
        text: palette.black["50"], // 밝은 텍스트 색상
        primary: primaryColor["05"], // 기본 색상
        secondary: secondaryColor["05"], // 어두운 보조 색상
        accent: primaryColor["60"], // 강조 색상
        muted: primaryColor["70"], // 중간 밝기 색상
        border: primaryColor["80"], // 중간 테두리 색상
        highlight: primaryColor["90"], // 어두운 하이라이트
        success: palette.green["50"],
        warning: palette.coral["50"],
        error: palette.red["50"],
      },
      font: {
        body: "Arial, sans-serif",
        heading: "Georgia, serif",
      },
      spacing: styleConfigs.spacings,
      border: {
        defaultColor: primaryColor["40"],
        focusColor: primaryColor["70"],
        errorColor: palette.red["70"],
        successColor: palette.green["70"],
        width: {
          default: "1px",
          thick: "2px",
        },
        radius: {
          xs: "2px",
          sm: "4px",
          md: "8px",
          lg: "10px",
          xl: "12px",
          xxl: "16px",
        },
        style: {
          default: "solid",
          emphasis: "dashed",
        },
      },
      shadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.5)",
        emphasis: " 0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16);",
      },
      opacity: {
        default: "1",
        disabled: "0.4",
      },
      interactive: {
        hoverColor: primaryColor["60"],
        focusColor: primaryColor["70"],
        activeColor: primaryColor["80"],
      },
    }),
  };
};
