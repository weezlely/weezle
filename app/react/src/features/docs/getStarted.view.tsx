import type { RefsProps } from "@/types";
import type { GetStartedIntroResponse } from "@/assets";
import { BaseCard, CrumbTrail, Heading, StyledTypography, Typography } from "@/shared/components";

interface GetStartedViewProps {
  refs: RefsProps;
  dataset: GetStartedIntroResponse | null;
}

export const GetStartedView = (props: GetStartedViewProps) => {
  const { refs, dataset } = props;

  if (!dataset?.paragraphs) return <div>데이터가 없습니다...</div>;
  return (
    <article className="layout__sub-content">
      <CrumbTrail />

      {dataset?.paragraphs.map((paragraph, i) => {
        return (
          <section key={paragraph.id} ref={refs[i].ref} className="m-t-40 m-b-20 p-10">
            <Heading as={paragraph.tag} className="text_bk_wh">
              {paragraph.title}
            </Heading>
            {paragraph.type === "card" && (
              <div className="section__card-wrap">
                {paragraph.contents?.map((content, j) => (
                  <BaseCard
                    // 카드
                    key={`${content.contentType}-${j}`}
                    title={content.contentTitle}
                    description={[content.desc]}
                    style={{ width: "100%" }}
                  />
                ))}
              </div>
            )}

            {paragraph.type === "desc" && (
              <div className="section__description-wrap">
                {paragraph.contents?.map((content, k) => {
                  return (
                    <Typography key={k} className="text_bk_wh fs_18 lh-150">
                      <StyledTypography styled={content.style} style={{ margin: "4px" }}>
                        {content.desc}
                      </StyledTypography>
                    </Typography>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}

      {/* <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h1 className="text_bk_wh fs_28">개요21 (Overviews)</h1>
          <span className="indent text_bk_wh fs_18 lh-150">
            <span>
              @taeopia는 React 기반의 모듈형 UI 컴포넌트, Canvas 편집 기능, 대규모 데이터 테이블 관리, 그리고 생산성을 높이는 Hook 유틸리티를 제공합니다. 개발자들이 직면하는 다양한 문제를 효율적으로
              해결하며, 모던한 웹 애플리케이션 개발을 돕습니다.
            </span>
            <span className="underline-4 lh-150">쉽고 빠르게 다양한 UI를 구축할 수 있도록 설계된 React 기반의 컴포넌트 라이브러리 </span>
            <span>입니다. 다양한 테마 지원, 접근성 고려, 높은 확장성을 제공합니다.</span>
          </span>
          <span className="indent text_bk_wh fs_18"></span>
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">소개 (Introduction)</h3>
          <span className="indent text_bk_wh fs_18 lh-150">
            @taeopia는 React 기반의 모듈형 UI 컴포넌트, Canvas 편집 기능, 대규모 데이터 테이블 관리, 그리고 생산성을 높이는 Hook 유틸리티를 제공합니다. 개발자들이 직면하는 다양한 문제를 효율적으로
            해결하며, 모던한 웹 애플리케이션 개발을 돕습니다.
            <span className="underline-4 lh-150">쉽고 빠르게 다양한 UI를 구축할 수 있도록 설계된 React 기반의 컴포넌트 라이브러리 </span>
            <span>입니다. 다양한 테마 지원, 접근성 고려, 높은 확장성을 제공합니다.</span>
          </span>
          <span className="indent text_bk_wh fs_18"></span>
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">주요 기능(Main functions </h3>
        </div>
        <div className="section__contents flex-row gap_8">
          <BaseCard title={"모듈형 UI"} description={["커스터마이징 가능한 React UI 컴포넌트 모음."]} style={{ width: "100%" }} />
          <BaseCard title={"모듈형 UI 컴포넌트"} description={["커스터마이징 가능한 React UI 컴포넌트 모음."]} style={{ width: "100%" }} />
          <BaseCard title={"모듈형 UI 컴포넌트"} description={["커스터마이징 가능한 React UI 컴포넌트 모음."]} style={{ width: "100%" }} />
          <BaseCard title={"실용적인 Hook"} description={["반복 로직 제거 및 생산성 향상"]} style={{ width: "100%" }} />
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">설치 및 시작 가이드 (Quick Start)</h3>
        </div>
        <div className="section__contents flex-col">
          <span className="indent text_bk_wh fs_18 lh-150">
            @taeopia는 React 기반의 모듈형 UI 컴포넌트, Canvas 편집 기능, 대규모 데이터 테이블 관리, 그리고 생산성을 높이는 Hook 유틸리티를 제공합니다. 개발자들이 직면하는 다양한 문제를 효율적으로
            해결하며, 모던한 웹 애플리케이션 개발을 돕습니다.
            <span className="underline-4 lh-150">쉽고 빠르게 다양한 UI를 구축할 수 있도록 설계된 React 기반의 컴포넌트 라이브러리 </span>
            <span>입니다. 다양한 테마 지원, 접근성 고려, 높은 확장성을 제공합니다.</span>
          </span>
          <span className="indent text_bk_wh fs_18">asdsad</span>
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">대상 사용자 및 활용 사례</h3>
        </div>
        <div className="section__contents flex-col">
          <span className="indent text_bk_wh fs_18 lh-150">
            프론트엔드 개발자, UI/UX 디자이너, 데이터 시각화 전문가, 그리고 효율적인 개발 워크플로를 찾는 팀에게 적합합니다.
            <span className="underline-4 lh-150">대규모 웹 애플리케이션, 대시보드 개발, Canvas 기반 그래픽 편집 툴 제작 등 다양한 프로젝트에 활용할 수 있습니다.</span>
          </span>
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">기술 스택 및 철학</h3>
        </div>
        <div className="section__contents flex-col">
          <span className="indent text_bk_wh fs_18 lh-150">
            React와 TypeScript 기반으로 개발되었으며, 사용성과 확장성을 최우선으로 설계되었습니다. 모든 컴포넌트는 접근성을 고려하여 제작되었으며, 효율적인 개발을 위해 모듈화된 구조를 채택했습니다.
          </span>
        </div>
      </section>

      <section className="m-t-40 m-b-20 p-10">
        <div className="dflx_column gap_10">
          <h3 className="text_bk_wh fs_28">추가 정보 (More Information)</h3>
        </div>
        <div className="section__contents flex-col">
          <span className="indent text_bk_wh fs_18 lh-150">"시작하려면 Getting Started 페이지를 참고하세요. 자세한 API 문서는 API Reference에서 확인할 수 있습니다." </span>
        </div>
      </section> */}
    </article>
  );
};
