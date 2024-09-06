import * as React from "react";
import { navyTheme, limeGreenTheme, blueTheme } from "taeo-ui";

import TaeoUiButtons from "./components/taeoui-button";
import TaeouiHeading from "./components/taeoui-heading";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <main className={isDarkMode ? blueTheme.dark : blueTheme.light} style={{ height: "100vh" }}>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "밝기모드" : "다크모드"}</button>
        <TaeoUiButtons />
        <TaeouiHeading />
      </main>

      {/* <Flex dir="column">
        <Flex>
          <Radio />
        </Flex>
        <Flyout />
      </Flex>

      <Heading>테스트 1</Heading>
      <Heading>테스트 1</Heading>
      <Heading>테스트 1</Heading>

      <Flex>
        <Button variant="secondary">버튼</Button>
        <Button variant="primary">버튼</Button>
        <Button variant="error">버튼</Button>
        <Button variant="success">버튼</Button>
      </Flex>

      <Sidebar /> */}
      {/* <Flyout /> */}
    </>
  );
}

export default App;
