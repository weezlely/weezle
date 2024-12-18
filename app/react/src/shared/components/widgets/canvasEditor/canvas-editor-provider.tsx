import { fabric } from "fabric";
import * as React from "react";
import { AnyCanvasObjectModelType, CanvasModel, canvasConfig } from "@taeopia/canvas-editor";

// Constants for canvas configuration
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 800;
const BACKGROUND_COLOR = "black";
const LINE_COLOR = "#000";
const TEXT_COLOR = "#fff";
const FONT_SIZE = 8;
const PIXEL = 16;

const initializeCanvas = (canvasModel: CanvasModel) => {
  const { width, height } = canvasModel;

  for (let sw = 1; sw < width!; sw++) {
    if (sw % 2 === 0) {
      canvasModel.add(new fabric.Text(String(sw * PIXEL), { left: PIXEL * sw, top: 0, fill: TEXT_COLOR, fontSize: FONT_SIZE, selectable: false }));
    }

    canvasModel.add(
      new fabric.Line([0, 10 * sw, width!, 10 * sw], {
        stroke: LINE_COLOR,
        strokeWidth: 0.1,
        selectable: false,
        strokeDashArray: [0.5, 0.5],
        excludeFromExport: true,
      })
    );

    canvasModel.add(
      new fabric.Line([0, PIXEL * sw, width!, PIXEL * sw], {
        stroke: LINE_COLOR,
        strokeWidth: 1,
        selectable: false,
        strokeDashArray: [1, 1],
        excludeFromExport: true,
      })
    );
  }

  for (let sh = 1; sh < height!; sh++) {
    if (sh % 2 === 0) {
      canvasModel.add(
        new fabric.Text(String(sh * PIXEL), { left: 0, top: PIXEL * sh, fill: LINE_COLOR, fontSize: FONT_SIZE, selectable: false, excludeFromExport: true })
      );
    }

    canvasModel.add(
      new fabric.Line([10 * sh, 0, 10 * sh, height!], {
        stroke: LINE_COLOR,
        strokeWidth: 0.1,
        selectable: false,
        strokeDashArray: [0.5, 0.5],
        excludeFromExport: true,
      })
    );

    canvasModel.add(
      new fabric.Line([PIXEL * sh, 0, PIXEL * sh, height!], {
        stroke: LINE_COLOR,
        strokeWidth: 1,
        selectable: false,
        strokeDashArray: [1, 1],
        excludeFromExport: true,
      })
    );
  }

  return canvasModel;
};

function useCanvasEditorController() {
  const [canvas, setCanvas] = React.useState<CanvasModel | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const canvasModel = new CanvasModel(canvasRef.current, {
      configs: canvasConfig({ width: 1200, height: 800, background: "black" }),
      selectedUpdatedFn: () => {},
    });

    if (!canvasModel) return;
    canvasModel.getCanvasContext();

    if (canvasModel) {
      setCanvas(initializeCanvas(canvasModel));
    }

    setCanvas(canvasModel);

    return () => {
      canvasModel.dispose();
    };
  }, [canvasRef]);

  // 텍스트 추가 함수
  const addTextToCanvas = (text: string, left: number, top: number) => {
    if (!canvas) return;

    const textObject = canvas.createObjectByType("text", text, {
      left,
      top,
      fill: "#000",
      fontSize: 32,
      selectable: true,
    });

    console.log("여기?");
    canvas.add(textObject as AnyCanvasObjectModelType);
    canvas.requestRenderAll(); // 캔버스 다시 그리기
  };

  return { canvasRef, addTextToCanvas };
}
export interface ICanvasEditorContext {
  canvasRef: React.RefObject<HTMLCanvasElement> | null;
  addTextToCanvas: (text: string, left: number, top: number) => void;
}

const CanvasEditorContext = React.createContext<ICanvasEditorContext>({ canvasRef: null, addTextToCanvas() {} });

export const useCanvasEditorHandler = () => {
  const context = React.useContext(CanvasEditorContext);

  if (!context) {
    throw "Canvas-editor context's value is not provided";
  }

  return context;
};

export interface ICanvasEditorProvider extends React.PropsWithChildren {}

export const CanvasEditorProvider = ({ children }: ICanvasEditorProvider) => {
  const canvasEditorCtx = useCanvasEditorController();

  return <CanvasEditorContext.Provider value={{ ...canvasEditorCtx }}>{children}</CanvasEditorContext.Provider>;
};
