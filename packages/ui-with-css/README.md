## @taeopia/css-in-ts-ui

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript&logoColor=white)![Rollup](https://img.shields.io/badge/Rollup-3.28.0-EC4A3F?logo=rollup.js&logoColor=white)![Vanilla Extract](https://img.shields.io/badge/Vanilla_Extract-2.3.2-3b82f6?logo=css3&logoColor=white)

> This is library for ui based on @vanilla-extract/css. for the more information you can click [here](https://vanilla-extract.style/).

## Get Started

```bash
# insatll when you are npm
$ npm i @taeopia/ui-with-css

# install when you are yarn
$ yarn add @taeopia/ui-with-css
```

## Example created Theme

```javascript
{
    color: {
      background: palette.black["60"],
      heading: palette.white["50"],
      text: palette.black["50"],
      primary: primaryColor["05"],
      secondary: secondaryColor["05"],
      accent: primaryColor["60"],
      muted: primaryColor["70"],
      border: primaryColor["80"],
      highlight: primaryColor["90"],
      success: palette.green["50"],
      warning: palette.coral["50"],
      error: palette.red["50"],
    },
    font: {
      body: "Arial, sans-serif",
      heading: "Georgia, serif",
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
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
      emphasis: "0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16);",
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
  }
```

## 🎨 Palette

![image-20240915182957271](https://github.com/weezlely/assets/blob/master/taeopia-ui-with-css/themeColor.png?raw=true)

### Update Schedule

| 일정     | 내용                                                       | 버전          |
| -------- | ---------------------------------------------------------- | ------------- |
| 24.09.14 | 초기 버전 <br/> `button`, `typography`, `bottomSheet` 구현 | 1.0.0 - 1.0.1 |
| 24.09.18 | UI 컴포넌트 추가 <br/> `Flex`,`Switch` 구현                | 1.0.2         |
| 24.09.19 | UI 컴포넌트 추가 <br/> `Checkbox` 구현                     | 1.0.3         |
| 24.09.20 | UI 컴포넌트 추가 <br/> `Flyout` 구현                       | 1.0.4         |
| 24.09.21 | UI 컴포넌트 추가 <br/> `Modal` 구현                        | 1.0.5         |

### Community

- 이메일을 보내주시거나 이슈를 통해 의견을 주시면 감사하겠습니다.
- Send me an email(ohtk1119@gmail.com) or Contribute on Issues, I glad to hear your suggestion.

### License

[MIT License](https://rmm5t.mit-license.org/)
