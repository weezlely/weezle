import { fabric } from "fabric";
import * as CSS from "csstype";

export class TextBoxModel extends fabric.Textbox {
  objectId?: string;
  /** 외부 모듈 */

  size?: number = 100;
  zIndex?: number = 0;
  color: CSS.Properties["color"] = "#fff";
  fontWeight: CSS.Properties["fontWeight"] = 400;
  pointer: { start: number; end: number } = { start: 0, end: 0 };

  constructor(text: string, options?: any) {
    super(text, { ...options, padding: 4, lineHeight: 1.1 }); // 부모 클래스의 생성자를 호출
    // 여기에서 커스텀 초기화 코드를 추가
    // this.toolbar = new ToolbarModel();

    this.objectId = options.id || options.objectId || "";
    this.color = options.fill;
    this.fontWeight = options.fontWeight;
    this.backgroundColor = options.backgroundColor;
    this.borderColor = options.stroke;
    this.canvas = options.canvas;

    const origin = { width: this.width, height: this.height, coordX: this.left, coordY: this.top };

    // this.originState = origin

    this.on("scaling", this.onResizeScaling);

    this.on("mousedown:before", function (e) {
      // 마우스가 내려오기전
      // console.log("🟦 \t\t mousedown:before :", e);
    });
    this.on("mousedown", function (e) {
      // 마우스가 내려올때
      // console.log("🟦 \t\t mousedown : ", e);
    });
    this.on("mouseup:before", function (e) {
      // 마우스가 올라오기전
      // console.log("🟦 \t\t mouseup:before :", e);
    });
    this.on("mouseup", (mouseUpEvent) => {
      // 마우스가 올라올때
      this._blockOutside(mouseUpEvent.target! || null);

      // console.log("🟦 \t\t mouseup : ", e);
    });
    this.on("mouseover", function (e) {
      // 마우스가 객체에 접근했을때,
      // console.log("🟦 \t\t mouseover : ", e);
    });
    this.on("mouseout", function (e) {
      // 마우스가 객체에서 벗어날때
      // console.log("🟦 \t\t mouseout : ", e);
    });
    this.on("skewing", function (e) {
      // console.log("🟦 \t\t skewing : ", e);
    });
    this.on("selection:created", function (e) {
      // const selectedText = e.target.text.slice(e.target.selectionStart, e.target.selectionEnd);
      console.log("🟦 \t\t selection:created : ", e);
    });
    this.on("selection:changed", (e) => {
      const start = this.selectionStart; // 선택 시작
      const end = this.selectionEnd; // 선택 마지막

      if (!start || !end) return;

      this.pointer.start = start;
      this.pointer.end = end;
    });

    this.on("changed", (e) => {
      // const { width: canvasWidth, height: canvasHeight } = this.canvas!;
      // this.width = this.dynamicMinWidth;
      // this.canvas?.renderAll();
    });
  }

  public onGetData = () => {
    return Object.keys(this).reduce((acc, key) => {
      acc[key] = (this as any)[key];
      return acc;
    }, {} as any);
  };

  public onChangeStyle(type: "font" | "object", key: string, value: unknown) {
    if (type === "font") {
      if (key === "textAlign") {
        console.log(type, key, value);
        return this.set("textAlign", value as string);
      } else if (key === "fontFamily") {
        return this.set("fontFamily", value as string);
      }

      return this.setSelectionStyles({ [key]: value }, this.selectionStart, this.selectionEnd || this._text.length);
    } else if (type === "object") {
      return this.set(key as any, value);
    }
  }

  /**
   * @description Config옵션에 맞게 원하는 데이터 가져오기
   */

  public getObjectData<C extends object, T>(config?: C) {
    if (!config) return;

    return Object.entries(config)
      .filter(([_, value]) => value === true)
      .reduce((object, [key, _]) => {
        object[key] = this[key as keyof this];
        return object;
      }, {} as Record<string, any>);
  }

  /**
   * @description 객체 리사이즈시에 변경된 값처리
   */
  private onResizeScaling = (e: fabric.IEvent<MouseEvent>) => {
    console.log("🟦 \t\t Resize :", e);

    const newWidth: number = this.getScaledWidth();
    const newHeight: number = this.getScaledHeight();
    const scalingFactor: number = this.scaleX || 1;
    const fontSize: number = this.fontSize || 10;
    const newFontSize: number = fontSize * scalingFactor || 12;

    console.log(` 
    ====== Resize Object =====
      너비 : ${newWidth}
      높이 : ${newHeight}
      폰트사이즈 : ${newFontSize}
    
    `);

    this.setSelectionStyles({ fontSize: newFontSize }, 0, this._text.length);
    this.setCoords();
  };

  /** @description 객체 외부로 나가는거 막는 이벤트 */
  private _blockOutside(target: fabric.Object) {
    if (!target || !this.canvas) return null;

    // 왼쪽 밖으로 나갈때
    if (target?.left! < 0) {
      target.left = 0;
    }
    // 오른쪽 밖으로 나갈때
    else if (target?.left! + target?.width! > this.canvas?.width!) {
      target.left = this.canvas.width! - target.width!;
    }
    // 위쪽 밖으로 나갈때
    else if (target?.top! < 0) {
      target.top = 0;
    } else if (target.top! + target.height! > this.canvas.height!) {
      target.top = this.canvas.height! - target.height!;
    }

    this.canvas?.requestRenderAll();
  }
}
