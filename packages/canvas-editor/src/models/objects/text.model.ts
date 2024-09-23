import { fabric } from "fabric";
import * as CSS from "csstype";

export class TextModel extends fabric.Text {
  objectId?: string;
  size?: number = 100;
  zIndex?: number = 0;
  color: CSS.Properties["color"] = "#fff";
  fontWeight: CSS.Properties["fontWeight"] = 400;
  pointer: { start: number; end: number } = { start: 0, end: 0 };

  constructor(text: string, options?: any) {
    super(text, options);
    this.objectId = options.id || options.objectId || "";
    this.color = options.fill;
    this.fontWeight = options.fontWeight;
    this.backgroundColor = options.backgroundColor;
    this.borderColor = options.stroke;
    this.canvas = options.canvas;

    this.on("scaling", this.onResizeScaling);

    // 마우스가 내려오기전
    this.on("mousedown:before", function (e) {
      // console.log("🟦 \t\t mousedown:before :", e);
    });

    // 마우스가 내려올때
    this.on("mousedown", function (e) {
      // console.log("🟦 \t\t mousedown : ", e);
    });

    // 마우스가 올라오기전
    this.on("mouseup:before", function (e) {
      // console.log("🟦 \t\t mouseup:before :", e);
    });

    // 마우스가 올라올때
    this.on("mouseup", (mouseUpEvent) => {
      this._blockOutside(mouseUpEvent.target! || null);
      // console.log("🟦 \t\t mouseup : ", mouseUP);
    });

    // 마우스가 객체에 접근했을때,
    this.on("mouseover", function (e) {
      // console.log("🟦 \t\t mouseover : ", e);
    });

    // 마우스가 객체에서 벗어날때
    this.on("mouseout", function (e) {
      // console.log("🟦 \t\t mouseout : ", e);
    });

    this.on("skewing", function (e) {
      // console.log("🟦 \t\t skewing : ", e);
    });

    // 선택 생성
    this.on("selection:created", function (e) {
      // const selectedText = e.target.text.slice(e.target.selectionStart, e.target.selectionEnd);
      // console.log("🟦 \t\t selection:created : ", e);
    });

    // 선택 변경
    this.on("selection:changed", (e) => {
      console.log("🟦 \t\t 선택한 모델의 ID : ", e, this.objectId);
    });
  }

  public onGetData = () => {
    return Object.keys(this).reduce((acc, key) => {
      acc[key] = (this as any)[key];
      return acc;
    }, {} as any);
  };

  /** @description 스타일 변경 */
  public onChangeStyle(type: "font" | "object", key: string, value: unknown) {
    /**
     * 이 함수는 주어진 값으로 속성을 설정합니다.
     * 위치나 크기와 관련된 속성(예: left, top, scale, angle 등)을 변경할 때, set 메서드는 객체의 경계선이나 컨트롤의 위치를 업데이트하지 않습니다.
     * 만약 경계선이나 컨트롤의 위치를 업데이트할 필요가 있다면, setCoords() 메서드를 호출해야 합니다.
     * @param key 속성의 이름
     * @param value 속성의 값 (만약 값이 함수인 경우, 해당 함수에 현재 값이 전달되고 그 반환 값이 새로운 값으로 사용됩니다.)
     * @exam 예제, set<K extends keyof this>(key: K, value: this[K] | ((value: this[K]) => this[K])): Object;
     */
    return this.set(key as any, value);
  }

  /** @description 텍스트 변경 */
  public onChangeText(text: string) {
    this.set("text", text);
    this.canvas?.requestRenderAll();
  }

  /** @description Config옵션에 맞게 원하는 데이터 가져오기 */
  public getObjectData<C extends object, T>(config?: C) {
    if (!config) return;

    return Object.entries(config)
      .filter(([_, value]) => value === true)
      .reduce((object, [key, _]) => {
        object[key] = this[key as keyof this];
        return object;
      }, {} as Record<string, any>);
  }

  /** @description 객체 리사이즈시에 변경된 값처리  */
  private onResizeScaling = (e: fabric.IEvent<MouseEvent>) => {
    const newWidth: number = this.getScaledWidth();
    const newHeight: number = this.getScaledHeight();
    const scalingFactor: number = this.scaleX || 1;
    const fontSize: number = this.fontSize || 10;
    const newFontSize: number = fontSize * scalingFactor || 12;

    console.info(` 
    ====== Resize Object =====
      이벤트 : ${e}
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
