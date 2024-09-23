"use strict";
import { fabric } from "fabric";

export class ImageModel extends fabric.Image {
  objectId?: string;

  src?: string;
  image?: fabric.Image;
  options?: { [key in string]: any };

  constructor(src: string, options: any) {
    super(options.image.getElement(), options);
    this.src = src;
    this.objectId = options?.objectId || options.id;
    this.options = options;
    options.image.getElement();
    this.image = options.image;

    // 마우스가 올라올때
    this.on("mouseup", (mouseUpEvent) => {
      this._blockOutside(mouseUpEvent.target! || null);
    });
  }

  public getImageElement() {
    this.image && this.image.getElement();
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

  public getObjectAnyData(config?: any) {
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
