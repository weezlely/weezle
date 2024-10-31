import React from "react";
import { CanvasEditorProvider } from "../canvas-editor/canvas-editor-provider";

export const withCanvasEditor = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    return (
      <CanvasEditorProvider>
        <WrappedComponent {...props} />
      </CanvasEditorProvider>
    );
  };
  return ComponentWithAuth;
};
