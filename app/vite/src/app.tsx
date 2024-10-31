import { RouterProvider } from "react-router-dom";
import { routerConfig, styleConfig } from "./configs";

styleConfig();

function App() {
  return <RouterProvider router={routerConfig} />;
}

export default App;
{
  /* <main className={isDarkMode ? blueTheme.dark : blueTheme.light} style={{ height: "100vh" }}>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "밝기모드" : "다크모드"}</button>
        <ExampleButtons />
        <ExampleHeadings />
        <ExampleCanvasEditor />
      </main> */
}

{
  /* <Flex dir="column">
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

      <Sidebar /> */
}
{
  /* <Flyout /> */
}
