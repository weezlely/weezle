import { fabric } from "fabric";

export class VideoModel extends fabric.Image {
  objectId?: string;

  private element?: HTMLVideoElement;
  private options?: { [key in string]: any };

  constructor(element: HTMLVideoElement, options: any = {}) {
    super(element, options);
    new fabric.Image(this.element!, { ...this.options });
    this.element = element;
    this.objectId = options.objectId || options.id || options.vmsPictItemId;
    this.options = options;

    // 마우스가 올라올때
    this.on("mouseup", (mouseUpEvent) => {
      this._blockOutside(mouseUpEvent.target! || null);
    });
  }

  /**
   * Config옵션에 맞게 원하는 데이터 가져오기
   * @returns
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
