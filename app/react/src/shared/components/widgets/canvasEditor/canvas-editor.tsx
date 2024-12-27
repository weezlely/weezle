import { useCanvasEditorHandler } from "./canvas-editor-provider";

export const ExampleCanvasEditor = () => {
  const { canvasRef } = useCanvasEditorHandler();
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "400px",
        margin: "auto",
      }}
    />
  );
};
