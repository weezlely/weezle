import { Img } from "@/shared";
import { Heading } from "@taeopia/ui-with-css";
import React from "react";

interface MainViewProps {}

export const MainView = (props: MainViewProps) => {
  return (
    <main className="main-content">
      <section className="hero-image m-b-10">
        <div className="hero-image-overlay">
          <Heading as="h1" style={{ color: "var(--text)" }}>
            Chakra UI is a component system for building products with speed
          </Heading>
          <Heading as="h4" style={{ color: "var(--text)" }}>
            Accessible React components for building high-quality web apps and design systems. Works with Next.js RSC
          </Heading>{" "}
        </div>

        <Img src="main" alt="메인" style={{ width: "100%" }} />
      </section>

      <article className="main-description">
        <div style={{ flex: 1, background: "blue" }}>왼</div>
        <div style={{ flex: 1, background: "red" }}>오</div>
      </article>
    </main>
  );
};
