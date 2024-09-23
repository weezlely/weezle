export class Helper {
  public getUid() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * @description 비디오 파일의 URL을 변환 하는 함수
   * @param event
   * @returns {HTMLVideoElement | null} src를 반환
   */

  public onLoadVideoFromUrl<T extends { target: { [key in string]: any } }>(event: T): string | null {
    const file = event.target.files?.[0];
    if (!file) return null;
    const src = URL.createObjectURL(file);
    return src;
  }

  /**
   * @description 매개변수에 해당하는 엘리먼트를 'focus'하는 이벤트 함수
   * @param {HTMLElement} current
   * @returns
   */
  public onClickCurrent(current: HTMLElement): void | null {
    if (!current) return null;
    current.click();
  }

  /**
   * @description instance 찾기
   * @returns {boolean}
   */
  public whatInstance<T>(rawData: unknown, model: new (...args: any[]) => T): rawData is T {
    return rawData instanceof model;
  }

  public isEmptyObject(obj: object) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  public isEmptyArray(arr: any[]) {
    return arr.length === 0;
  }

  public convertTextModelToPlainObject(textModelInstance: any) {
    return {
      objectId: textModelInstance.objectId || "",
      backgroundColor: textModelInstance.backgroundColor || "",
      zIndex: textModelInstance.zIndex || 0,
      left: textModelInstance.left || 0,
      top: textModelInstance.top || 0,
      width: textModelInstance.width || 0,
      height: textModelInstance.height || 0,
      isBlank: "N", // 기본값 설정
      style: textModelInstance.style || {}, // 필요에 따라 style 변환 추가
    };
  }
}
