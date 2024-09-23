import { fabric } from "fabric";

// Types
import type { CanvasConfigs } from "../../configs";
import type { AnyCanvasObjectModelType, CanvasObjectVariant, KeyAble, IImage, IToolbarOptions } from "../../types";
// Models
import { ImageModel, TextBoxModel, TextModel, VideoModel } from "../../models";
// lib
import { Helper } from "../../lib/helpers";
import { Util } from "../../lib/utils";

type CallbackFunction = (objects?: AnyCanvasObjectModelType[] | null) => void;

type Parameters = {
  configs: CanvasConfigs;
  selectedUpdatedFn: CallbackFunction;
};

export class CanvasModel extends fabric.Canvas {
  public error: Error | null;

  public history: any;
  public historyStep: number = 0;
  public context: CanvasRenderingContext2D | null; // Canvas's context
  public pixel: number = 30;

  public cachedX: number;
  public cachedY: number;

  public deletedObjectIds?: string[] = [];
  public needObjectList: unknown[]; // 데이터를 추출하고자 하는 객체 리스트

  public selectedObjects?: AnyCanvasObjectModelType[] | null;
  public selectedImage?: Pick<IImage, "src" | "alt" | "createdAt">;
  public matchedObjectsFromConfigs?: any;

  private utils?: Util; // 공통으로 사용할 함수
  private valueHelper?: Helper;
  private callbackFn?: () => void;

  private selectedOptions?: IToolbarOptions;

  constructor(current: HTMLCanvasElement, params: Parameters) {
    super(current!, params.configs);

    this.context = null;
    this.error = null;

    this.needObjectList = [];
    this.utils = new Util();
    this.valueHelper = new Helper();

    this.cachedX = 0;
    this.cachedY = 0;

    /**
     * @event Drag - Canvas로 Drag된 요소가 접근했을때
     */
    this.on("dragenter", (e) => {
      // console.log("🟥 \t dragenter : ", e);
    });
    /**
     * @event Drag - Canvas로 Drag된 요소가 위에 올라와있을 때
     */
    this.on("dragover", (e) => {
      // console.log("🟥 \t dragover : ", e);
    });
    /**
     * @event Drag - 요소가 사라졌을 때
     */
    this.on("dragleave", (e) => {
      // console.log("🟥 \t dragleave : ", e);
    });
    /**
     * @event Drag - Drag 이벤트가 끝나고 Drop을 시작하기 전 실행
     */
    this.on("drop:before", (e) => {
      // console.log("🟥 \t drop:before : ", this.selectedImage);
    });
    /**
     * @event Drop 전단계가 끝나고 Drop이 완료되었을 때 실행
     */
    this.on("drop", async (e) => {
      // Check point 1. 선택한 이미지의 src가 있는지 확인한다.
      if (!this.selectedImage?.src) {
        return;
      }

      // 이미지 객체 모델 생성
      this._createImageModel(this.selectedImage.src!, { objectId: this.valueHelper?.getUid() });

      // 선택한 이미지 비우기
      this._clearSelectedImage();

      // 콜백이 있을 경우 실행
      if (this.callbackFn && typeof this.callbackFn === "function") {
        this.callbackFn();
      }
    });

    /**
     * @event selection:created 그룹이 생성되었을때
     */
    this.on("selection:created", ({ e, selected }) => {
      // console.log("🟥 \t selection:created :", e, selected);

      // Check Point 1. 그룹의 요소가 비어있는지 확인
      if (this.utils?.isEmptyArray(selected!)) {
        return null;
      }
      // Callback 을 실행
      params?.selectedUpdatedFn(selected! as AnyCanvasObjectModelType[]);

      this._updateSelectedObjects(selected! as AnyCanvasObjectModelType[]);
    });

    /**
     * @event selection:updated 그룹의 요소가 변경되었을때
     */
    this.on("selection:updated", ({ deselected, e, selected }) => {
      // console.log("🟥 \t selection:updated :", selected);

      // Check Point 1. 그룹의 요소가 비어있는지 확인
      if (this.utils?.isEmptyArray(selected!)) {
        return null;
      }

      // selected된 객체들을 Callback을 통해 보내기
      params?.selectedUpdatedFn(selected! as AnyCanvasObjectModelType[]);

      // Selected된 객체들을 selectedObjects에 갱신한다.
      this._updateSelectedObjects(selected! as AnyCanvasObjectModelType[]);
    });

    /**
     * @event mouseup 마우스가 올라왔을때
     */
    this.on("mouse:up", (e) => {
      console.log("🟥 \t mouseup :", e);
      // this.selectedObjects = e.target;
    });
    /**
     * @event mouse:down 마우스의 클릭이 내려왔을때
     */
    this.on("mouse:down", (e) => {
      console.log("🟥 \t mouse:down :", e);

      // Check Point 1. 객체가 있는지 확인
      if (!e.target) {
        // 선택한 객체정보 초기화

        return (this.selectedObjects = null);
      }

      const snapshot = Array(e.target);
      return (this.selectedObjects = snapshot as AnyCanvasObjectModelType[]);
    });
    /**
     * @event after:render 렌더링이 끝난 시점
     */
    this.on("after:render", (e) => {
      // console.log("🟦🟥🟫🟩🟨🟩 \t after:render :", e);
    });

    this.on("object:modified", (e) => {
      console.log("object:modified", e);
    });

    this.on("object:moving", (objMovingEvent: any) => {
      let debounceTimer;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.cachedX = objMovingEvent.target.left;
        this.cachedY = objMovingEvent.target.top;
      }, 10);
    });
  }

  /**
   * ====================================================================
   *                           public Methods
   *
   * 규칙 : 알파벳 순으로 배치
   * 1. add : 데이터를 추가
   * 2. clear : 데이터를 초기화 및 삭제
   * 3. create : 데이터를 생성
   * 4. delete : 데이터를 삭제하기
   * 5. draw : 레이아웃 그리기
   * 6. get : 데이터를 가져오기
   * 7. update : 데이터를 갱신하기
   * 8. un- : 이벤트 취소
   * ====================================================================
   */

  /**
   * @event 추가 - Canvas안에 객체(텍스트, 이미지, 비디오 등)을 추가 이벤트
   * @param {AnyCanvasObjectModelType} object - 객체 모델로서, Text, Image, Video Model 등
   */
  public addModel(object: AnyCanvasObjectModelType) {
    return this.add(object);
  }

  /** @event 취소및해제 - 캔버스 취소 및 해제 이벤트*/
  public clearCanvas() {
    this.clear();
    this.dispose();
  }
  /** @event 삭제 - 삭제된 객체 아이디 리스트 정리 */
  public clearDeletedObjectIds = () => {
    this.deletedObjectIds = [];
  };

  /**
   * @event 생성 - Canvas를 통하여 객체 생성 이벤트
   * @param {ObjectVariant} type - 어떤 객체를 불러올지에대한 Key에 해당한다.
   * @param {string} value - text, textBox일 경우 글자에 들어갈 내용, image, video일 경우 url에 해당한다.
   * @param {KeyAble<string>} options - 객체의 추가적으로 들어갈 option값에 해당한다.

   */
  public createObjectByType(type: CanvasObjectVariant, value: string, options: KeyAble<any> = {}): object | null | void {
    switch (type) {
      case "text":
        return this._createTextModel(value, options);
      case "textBox":
        return this._createTextBoxModel(value, options);
      case "image":
        return null;
      case "video":
        return null;
      case "circle":
        return null;
      case "rect":
        return null;
      default:
        console.warn(`Unsupported object type: ${type}`);
        return;
    }
  }

  /** @event 추가 - 비디오 추가하기 이벤트   */

  public createVideoModelByElement(videoElement: HTMLVideoElement, option = {}) {
    return this._createVideoModel(videoElement, option);
  }

  /** @event 삭제 - 선택한 객체 삭제 이벤트  */
  public deleteSelectedObjects(): void {
    // 선택된 객체가 없거나 빈 배열인 경우 경고 메시지를 출력하고 함수를 종료
    if (!this.selectedObjects || this.selectedObjects.length === 0) {
      console.warn("삭제할 객체가 선택되지 않았습니다");
      return;
    }

    // 각 선택된 객체를 캔버스에서 제거
    this.selectedObjects?.forEach((object, _) => {
      this.remove(object);
      this.deletedObjectIds?.push((object as AnyCanvasObjectModelType).objectId!);
    });
    // 캔버스를 다시 렌더링
    this.requestRenderAll();
  }

  public drawGridBackground() {}

  /** @event GET - Canvas의 Context를 호출하는 이벤트  */
  public getCanvasContext(): CanvasRenderingContext2D | null {
    this.context = this.getContext();
    return this.context;
  }
  /** @event GET - Canvas내에 있는 객체들 전부 가져오는 이벤트  */

  public getAllObjects() {
    return this._objects;
  }

  public getOnlyUsedObjects() {
    const rawDataList = [...this.getAllObjects()];

    if (this.utils?.isEmptyArray(rawDataList)) return null;
    while (!this.utils?.isEmptyArray(rawDataList)) {
      const poppedObject = rawDataList.pop(); // 2. 꺼낸 객체 선언

      if (
        this.utils?.whatInstance(poppedObject, TextBoxModel) ||
        this.utils?.whatInstance(poppedObject, TextModel) ||
        this.utils?.whatInstance(poppedObject, ImageModel) ||
        this.utils?.whatInstance(poppedObject, VideoModel)
      ) {
      }
    }
  }

  public getSelectsAll() {
    this.discardActiveObject();
    const result: AnyCanvasObjectModelType[] = [];
    const snapshot = this.getObjects();

    if (this.utils?.isEmptyArray(snapshot)) return null;

    snapshot.forEach((object) => {
      if (
        this.utils?.whatInstance(object, TextModel) ||
        this.utils?.whatInstance(object, TextBoxModel) ||
        this.utils?.whatInstance(object, ImageModel) ||
        this.utils?.whatInstance(object, VideoModel)
      ) {
        result.push(object);
      }
    });

    if (result.length > 0) {
      const selection = new fabric.ActiveSelection(result, { canvas: this });
      this.setActiveObject(selection);
      this.requestRenderAll();
    }
  }

  /** @event GET - Canvas내에서 활성화된 객체를 가져오는 이벤트 */
  public getSelectedObjects() {
    return this.getActiveObjects();
  }

  /** @event GET - 선택한 이미지 객체 가져오기 */
  public getSelectedImage(src: string, alt: string, callbackFn: () => void): void | null {
    const draggedImage: Pick<IImage, "src" | "alt"> = { src, alt };

    if (!draggedImage.src) return null;
    const snapshot = { ...this.selectedImage, ...draggedImage };
    this.selectedImage = snapshot;
    this.callbackFn = callbackFn;
  }

  /**
   * @event GET - 선택한 객체들의 Direction을 배열의 형태로 가져오기
   * [가장 왼쪽, 가장 오른쪽, 가장 위쪽, 가장 아래쪽, 수직 중앙, 수평 중앙]
   */
  public getSelectedAlignDirections() {
    // let [_left, _right, _top, _bottom, _verticalCenter, _horizonCenter]= [0, 0, 0, 0, 0, 0] as number[];
    const leftList = [] as number[];
    const topList = [] as number[];

    const snapshot = this.selectedObjects || [];

    // 선택한 객체들이 보통의 겨웅 20개 내외이기 때문에 "삽입정렬"을 통해 Direction 배열값을 구함.
    if (this.utils?.isEmptyArray(snapshot!)) {
      return;
    }

    for (const object of snapshot) {
      if (!object) continue;

      const { left, top } = object;

      leftList.push(left || 0);
      topList.push(top || 0);
    }

    const minLeft = Math.min(...leftList) || 0;
    const maxLeft = Math.max(...leftList) || 0;
    const minTop = Math.min(...topList) || 0;
    const maxTop = Math.max(...topList) || 0;
    const middleLeft = this.utils?.findMedian(leftList) || 0;
    const middleTop = this.utils?.findMedian(topList) || 0;

    return [minLeft, maxLeft, maxTop, minTop, middleTop, middleLeft];
  }

  /** @event 변경 - Toolbar에서 선택한 옵션 값의 변경 이벤트  * */
  public updateConfigsOption(options: IToolbarOptions): void {
    this.selectedOptions = options; // 선택된 옵션을 갱신

    // check point 1. type 속성이 있는지 확인
    if (!this.selectedOptions.var) {
      return;
    }

    // 선택된 객체들을 순회하면서 스타일을 적용
    this.selectedObjects?.forEach((object: any, _: number) => {
      // 선택 옵션의 폰트 색상을 객체의 선택 영역에 적용합니다.
      object.setSelectionStyles({ fill: options.font.color }, object.pointer.start, object.pointer.end);
    });
  }

  /**
   * @event 업데이트 - 선택한 객체 리스트 변경
   * @description 선택된 객체들을 변경하고 캔버스에서 활성 객체로 설정합니다.
   * @param {AnyModelType[]} objects - 선택할 객체들의 배열.
   */
  public updateSelectedObjects(objects: AnyCanvasObjectModelType[]) {
    this.selectedObjects = objects; // 선택된 객체들을 설정

    // check point 1. 선택된 객체 배열이 정의되어 있고 실제 배열인지 확인
    if (!this.selectedObjects || !Array.isArray(this.selectedObjects)) {
      console.warn("잘못된 객체가 제공되었습니다. 정의된 데이터 타입이 아닙니다.");
      return;
    }

    // check point 2. 선택된 객체 배열이 비어있는지 확인
    if (this.selectedObjects.length === 0) {
      console.warn("선택된 객체가 없습니다.");
      return;
    }

    this._updateActiveObjects(this.selectedObjects);
  }

  /** @event 업데이트 - Pixel 값을 변경하는 이벤트 */
  public updatePixel(pixel: number): void {
    if (!pixel) {
      return;
    }
    this.pixel = pixel;
  }

  public updateWh(key: "w" | "h", value: number) {
    if (key === "w") {
      this.width = value;
    } else if (key === "h") {
      this.height = value;
    }

    return;
  }

  /** @event 취소 앞 동작의 실행 취소   */
  public undo(): void | null {
    // Check Point 1. Context가 있는지 확인
    if (!this.context) return null;
  }

  /**
   * ========================================================================================
   *                                    Private Methods
   *
   * 규칙 1) private 내장 메서드는 _ 를 붙임으로써 public 메서드와 구분됩니다.
   * 규칙 2) 알파벳 순으로 배치
   *
   * 1. _clear : 데이터를 초기화
   * 2. _create : 데이터를 생성하기
   * 3. _delete : 데이터를 삭제하기
   * 4. _get : 데이터를 가져오기
   * 5. _update : 데이터를 갱신하기
   * ========================================================================================
   */

  /** @description 선택한 이미지 객체 비우기 */
  private _clearSelectedImage() {
    this.selectedImage = { src: "", alt: "", createdAt: "" };
  }

  /** @description Canvas 내의 객체 비우기  */
  public _clearObjects() {
    this._objects = [];
  }

  /** @description 텍스트 객체 모델 생성 */
  private _createTextModel(text: string, options = {}): object | null {
    // Check Point 1. Context가 있는지 확인
    if (!this.context) return null;

    return new TextModel(text, options);
  }

  /** @description 텍스트 박스 객체 모델 생성   */
  private _createTextBoxModel(text: string, options = {}): object | null {
    // Check Point 1. Context가 있는지 확인
    if (!this.context) return null;

    const { fontSize, fontFamily, fill, underline, backgroundColor, ...rest } = options as { [key: string]: unknown };

    const newTextBox = new TextBoxModel(text, options);

    const textArray = newTextBox._text;

    newTextBox.setSelectionStyles({ fontSize, fontFamily, fill, underline, backgroundColor }, 0, textArray.length);

    return newTextBox;
  }

  /** @description 이미지 객체 모델 생성, 이미지 변환 처리를 위한 utils에서 ImageModel을 추가  */
  private _createImageModel(src: string, options = {}) {
    // Check point 1. Context가 없거나 또는 src가 없는 경우
    if (!this.context || !src) return null;

    return this.utils
      ?.onLoadImageFromUrl(src!)
      ?.then((image) => {
        const imageModel = new ImageModel(src, {
          image: image as fabric.Image,
          ...options,
        });
        // Check point 2. 이미지 모델을 만들 수 없을 경우
        if (!imageModel) {
          return;
        }
        this.add(imageModel); // 이미지 객체 모델 추가
      })
      .catch((error: Error) => {
        this.error = error;
        console.error("Error loading image: ", error); // 에러 발생시 에러 메시지
      })
      .finally(() => {
        this.requestRenderAll(); // 결과를 마친 후 다시 그리기
      });
  }

  /** @description 비디오 객체 모델 생성   */
  private _createVideoModel(element: HTMLVideoElement, options = {}): VideoModel | null {
    // Check Point 1. Context가 있는지 확인
    if (!this.context) return null;

    return new VideoModel(element, options);
  }

  /** @description 캔버스로부터 모든 객체 가져오기 */
  private _getObjectsOfCanvas(type?: string): unknown[] | [] {
    return this.getObjects(type) || [];
  }

  /**
   * @description 선택된 객체를 순회하여 스타일을 변경
   * @param {AnyCanvasObjectModelType[]} objects
   */
  private _updateActiveObjects(objects: AnyCanvasObjectModelType[]) {
    try {
      // 각 선택된 객체를 순회
      for (const object of objects) {
        // 각 객체를 검증하여 객체인지와 'id' 속성을 가지고 있는지 확인
        if (!object || typeof object !== "object" || !("objectId" in object)) {
          console.error("선택된 객체 목록에 유효하지 않은 객체가 포함되어 있습니다:", object);
          continue;
        }

        this.setActiveObject(object); // 현재 객체를 활성 객체로 설정
      }
    } catch (error) {
      console.error("객체를 처리하는 중 오류 발생:", error); // 처리 중에 발생하는 모든 오류를 로그
    }

    this.renderAll(); // 변경 사항을 반영하기 위해 캔버스를 리렌더링
  }

  /** @description 캔버스로부터 선택한 객체 모델 업데이트 */
  private _updateSelectedObjects(objects: AnyCanvasObjectModelType[] | null): void {
    // Check Point 1. objects가 null이거나 배열이 아닌 경우 처리
    if (!Array.isArray(objects) || objects.length === 0) {
      this.selectedObjects = null;
      return;
    }
    // selectedObjects 업데이트
    this.selectedObjects = objects;
  }
}
