import React from "react";

import { ExampleButtons } from "@/components";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <article>
      <ExampleButtons />
    </article>
  );
}
