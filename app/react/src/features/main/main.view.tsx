import type { RefObject } from "react";

import { BaseCard, Img, Markdown, StarrySky } from "@/shared/components";
import { mainInformationResponse } from "@/assets";

const MOCK_CODE = `
import { defineTokens } from "@chakra-ui/react"

export const tokens = defineTokens({
  colors: {
    primary: { value: "#0FEE0F" },
    secondary: { value: "#EE0F0F" },
  },
  fonts: {
    body: { value: "system-ui, sans-serif" },
  },
  animations: {
    "slide-in-right": { value: "slide-in-right 0.5s ease-in-out" },
  },
})`;

const MOCK_CARD_LIST = ["TextMate 문법 지원,", " VS Code와 동일한 엔진.", "VS Code로 개선."];

interface MainViewProps {
  entryRef?: RefObject<HTMLElement & HTMLDivElement>;
  goToPage?: (path: string) => void;
}

export const MainView = (props: MainViewProps) => {
  const { entryRef, goToPage } = props;
  const { hero } = mainInformationResponse.results;
  return (
    <div className="layout__main-content starry-sky">
      {/* Section - Hero */}
      <section className="hero" ref={entryRef}>
        <div className="hero__overlay">
          <div className="hero__overlay-content">
            <div className="animation__glowing-border overlay__inner">
              {/* Hero Title */}
              <h1 className="text_wh fs_48 m-b-20">{hero.overlay.title}</h1>
              {/* Hero Title */}

              {/* Hero - Sub Title */}
              <h4 className="text_wh fs_24_medium">{hero.overlay.subtitle}</h4>
              {/* Hero - Sub Title */}

              {/* Hero - Button */}
              <div className="flex-row gap_8 m-t-20">
                {hero.overlay.buttons.map((button) => (
                  <button
                    // Hero Buttons
                    className={`btn__${button.type} pri btn_${button.size} fs_20_medium text_wh w160`}
                    onClick={() => goToPage?.(button.action)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
              {/* Hero - Button */}
            </div>
          </div>
        </div>

        {/* Hero - overLay */}
        <Img {...hero.overlay.image} />
        {/* Hero - overLay */}
      </section>
      {/* Section - Hero */}

      <section className="layout__main-description">
        <div className="description__section">
          <div className="section__info section__inner-50">
            <div>
              <h3 className="text_bk_wh fs_28_bold">Development</h3>
              <h5 className="text_bk_wh fs_18_medium lh-150">
                TAEOPIA strives to provide users with a variety of developer experiences to reduce the time it takes to build products. Build a design system based on TAEOPIA.
              </h5>
            </div>
          </div>
          <div className="section__visual section__inner-50">
            <div>
              <Markdown
                content={{
                  type: "javascript",
                  code: MOCK_CODE,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="layout__main-description bg_pri-05">
        <div className="description__section">
          <div className="section__card">
            <div className="dflx_jcent flex__box">
              <BaseCard className="bg_gray" title={"정확하고 아름답다"} description={MOCK_CARD_LIST}>
                <div className="dflx gap_8">
                  <button className="card__actions action-button">버튼</button>
                  <button className="card__actions action-button">버튼</button>
                </div>
              </BaseCard>
              <BaseCard className="bg_gray" title={"정확하고 아름답다"} description={MOCK_CARD_LIST}>
                <div className="dflx gap_8">
                  <button className="card__actions action-button">버튼</button>
                  <button className="card__actions action-button">버튼</button>
                </div>
              </BaseCard>
              <BaseCard className="bg_gray" title={"정확하고 아름답다"} description={MOCK_CARD_LIST}>
                <div className="dflx gap_8">
                  <button className="card__actions action-button">버튼</button>
                  <button className="card__actions action-button">버튼</button>
                </div>
              </BaseCard>
              <BaseCard className="bg_gray" title={"정확하고 아름답다"} description={MOCK_CARD_LIST}>
                <div className="dflx gap_8">
                  <button className="card__actions action-button">버튼</button>
                  <button className="card__actions action-button">버튼</button>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </section>

      <section className="layout__main-description bg_secondary-05">
        <div className="description__section">
          <div className="section__info section__inner-50">
            <div>
              <h3 className="text_bk_wh fs_32_bold">Components</h3>
              <h5 className="text_bk_wh fs_18_medium lh-150">
                "Developed to simplify UI development and state management tasks in React-based projects, TAEOPIA provides a lightweight and extensible structure. It includes a variety of features,
                from basic UI components such as buttons and input forms to dark mode and data fetching management, making it fast and It supports consistent UI development and allows custom themes to
                be applied, making it suitable for design system integration.”
              </h5>
            </div>
          </div>
          <div className="section__visual-card  ">
            <div className="flex__box">
              <BaseCard className="bg_gray" title={"UI"} description={["@taeopia/ui-with-css"]} onClick={() => goToPage?.("/ui/guide")} />
              <BaseCard className="bg_gray" title={"applications"} description={["@taeopia/react-table"]} onClick={() => goToPage?.("/applications/table")} />
              <BaseCard className="bg_gray" title={"text-editor"} description={["@taeopia/text-editor"]} />
              {/* <BaseCard className="bg_gray" title={"canvas"} description={["@taeopia/canvas"]} /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="layout__main-description">
        <div className="description__section">
          <div className="section__info">
            <div>
              <h3 className="text_bk_wh fs_28_bold">Taeopia 를 기반으로 디자인 시스템을 구축하세요.</h3>
              <h5 className="text_bk_wh fs_18_medium lh-150">Spend less time writing UI code and more time building a great experience for your customers.</h5>
            </div>
          </div>
        </div>
      </section>
      <StarrySky />
    </div>
  );
};
