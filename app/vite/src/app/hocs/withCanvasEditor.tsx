import React from "react";
import { CanvasEditorProvider } from "../../shared/components/widgets/canvas-editor/canvas-editor-provider";

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
