import React from "react";

import { ExampleButtons } from "@/shared/components";
import { Flex } from "@taeopia/ui-with-css";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <Flex>
      <article>
        <ExampleButtons />
      </article>
    </Flex>
  );
}
