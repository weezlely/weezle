import React from "react";
import { Button, Flex, Heading } from "@taeopia/ui-with-css";

import {} from "@taeopia/canvas-editor";
import { useCanvasEditorHandler } from "./canvas-editor-provider";

export function ExampleCanvasEditorToolbar() {
  const { addTextToCanvas } = useCanvasEditorHandler();

  return (
    <Flex as="div" dir="row" style={{ flexWrap: "nowrap", marginBottom: "16px" }}>
      <Flex dir="row" gap={8}>
        <Button variant="secondary">사각형</Button>
        <Button variant="primary">원형</Button>
        <Button variant="primary" onClick={() => addTextToCanvas("텍스트", 0, 0)}>
          텍스트
        </Button>
        <Button variant="primary">이미지</Button>
        <Button variant="primary">동영상</Button>
      </Flex>

      <Flex dir="row" gap={8}>
        <Button variant="primary">16</Button>
        <Button variant="primary">24</Button>
        <Button variant="primary">32</Button>
        <Button variant="primary">48</Button>
        <Button variant="primary">64</Button>
      </Flex>

      <Flex dir="row" gap={8}>
        <Button variant="primary" style={{ width: "max-content" }}>
          왼쪽
        </Button>
        <Button variant="primary" style={{ width: "max-content" }}>
          오른쪽
        </Button>
        <Button variant="primary" style={{ width: "max-content" }}>
          가운데
        </Button>
        <Button variant="primary" style={{ width: "max-content" }}>
          수직 아래
        </Button>
        <Button variant="primary" style={{ width: "max-content" }}>
          수직 위에
        </Button>
      </Flex>
    </Flex>
  );
}
