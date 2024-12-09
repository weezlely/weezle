import React from "react";
import { CanvasEditorProvider, ExampleCanvasEditor, ExampleCanvasEditorToolbar, withCanvasEditor } from "@/shared/components";

const CanvasPage = () => {
  return (
    <CanvasEditorProvider>
      <article className="container">
        <ExampleCanvasEditorToolbar />
        <ExampleCanvasEditor />
      </article>
    </CanvasEditorProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CanvasPage;
