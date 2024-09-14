import { createThemeContract } from "@vanilla-extract/css";

// 테마 변수를 정의하는 계약 (Contract)
export const themeVars = createThemeContract({
  color: {
    // 배경 색상. 페이지나 컴포넌트의 기본 배경색을 나타냅니다.
    background: null,

    // 텍스트 색상. 제목이나 대표 메뉴에 사용되는 색상을 나타냅니다.
    heading: null,

    // 텍스트 색상. 본문이나 기본 텍스트에 사용되는 색상을 나타냅니다.
    text: null,

    // 기본 강조 색상. 주로 버튼, 링크 등의 주요 인터랙티브 요소에 사용됩니다.
    primary: null,

    // 보조 강조 색상. primary 색상과 대조적으로 사용되며, 부가적인 강조 요소에 사용됩니다.
    secondary: null,

    // 포인트를 주기 위한 액센트 색상. primary, secondary와는 다른 포인트 역할을 하며, 작은 부분이나 특정 상황에서 사용됩니다.
    accent: null,

    // 덜 강조된 요소들에 사용되는 색상. 텍스트, 배경 등의 보조적이고 덜 두드러지는 영역에 사용됩니다.
    muted: null,

    // 테두리 색상. 버튼, 카드 등의 테두리에 사용됩니다.
    border: null,

    // 하이라이트 색상. 사용자가 상호작용하거나 강조할 때 사용하는 배경 또는 테두리 색상입니다.
    highlight: null,

    success: null,

    error: null,

    warning: null,
  },
  font: {
    // 본문 텍스트의 폰트 패밀리. 일반 텍스트에 사용됩니다.
    body: null,

    // 제목 텍스트의 폰트 패밀리. 주로 헤딩에 사용됩니다.
    heading: null,
  },
  spacing: {
    // 매우 작은 간격. 작은 요소 사이의 간격에 사용됩니다.
    xs: null,

    // 작은 간격. 작은 요소 사이의 간격에 사용됩니다.
    sm: null,

    // 중간 간격. 일반적인 요소 사이의 간격에 사용됩니다.
    md: null,

    // 큰 간격. 큰 요소 사이의 간격에 사용됩니다.
    lg: null,

    // 매우 큰 간격. 큰 요소 사이의 간격에 사용됩니다.
    xl: null,
  },
  border: {
    // 기본 테두리 색상. 일반적인 UI 요소의 테두리 색상에 사용됩니다.
    defaultColor: null,

    // 포커스된 상태의 테두리 색상. 포커스된 요소를 강조하기 위한 색상입니다.
    focusColor: null,

    // 에러 상태의 테두리 색상. 에러를 나타내는 UI 요소에 사용됩니다.
    errorColor: null,

    // 성공 상태의 테두리 색상. 성공을 나타내는 UI 요소에 사용됩니다.
    successColor: null,

    width: {
      // 기본 테두리 두께. 일반적인 UI 요소의 테두리 두께입니다.
      default: null,

      // 강조된 테두리 두께. 강조된 요소에 사용되는 두꺼운 테두리입니다.
      thick: null,
    },

    radius: {
      xs: null,

      // 작은 테두리 반경. 작은 요소에 사용되는 테두리 반경입니다.
      sm: null,

      // 중간 테두리 반경. 일반적인 요소에 사용되는 테두리 반경입니다.
      md: null,

      // 큰 테두리 반경. 큰 요소에 사용되는 테두리 반경입니다.
      lg: null,

      xl: null,

      xxl: null,
    },

    style: {
      // 기본 테두리 스타일. 일반적인 UI 요소에 사용되는 테두리 스타일입니다 (예: solid, dashed).
      default: null,

      // 강조된 테두리 스타일. 강조된 요소에 사용되는 테두리 스타일입니다.
      emphasis: null,
    },
  },
  shadow: {
    // 기본 그림자. 카드나 버튼 등에서 사용되는 기본 그림자입니다.
    default: null,

    // 강조된 그림자. 강조된 요소에 사용되는 두꺼운 그림자입니다.
    emphasis: null,
  },
  opacity: {
    // 기본 투명도. 일반적인 UI 요소에 사용되는 기본 투명도 값입니다.
    default: null,

    // 비활성화된 상태의 투명도. 비활성화된 요소에서 사용되는 투명도 값입니다.
    disabled: null,
  },
  interactive: {
    // hover 상태의 색상. 요소가 마우스 오버될 때 적용되는 색상입니다.
    hoverColor: null,

    // focus 상태의 색상. 요소가 포커스될 때 적용되는 색상입니다.
    focusColor: null,

    // active 상태의 색상. 요소가 클릭될 때 적용되는 색상입니다.
    activeColor: null,
  },
});
