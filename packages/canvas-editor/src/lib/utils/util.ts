"use strict";
import { fabric } from "fabric";

import type { KeyAble } from "../../types";

type UnknownObject<T> = T extends { objectId: string | number } ? T : never;

export class Util {
  /**
   * =========================================================================================
   *                                       public Methods
   *
   * 규칙 1) 알파벳 순으로 배치
   * 규칙 2) 접두사를 통해 함수의 기능을 내포한다.
   *
   * 1. check- : 특정 조건을 실행시키기 위해 확인하는 로직의 함수
   * 2. find- : number 또는 T를 반환하며, 배열 형태의 데이터에서 특정 값을 찾기 위한 로직의 함수
   * 3. is- : boolean을 반환하며, input에 대한 참/거짓을 표출하는 로직의 함수
   * 4. on- : 특정 이벤트를 발생시키는 로직의 함수
   * 5. what- : boolean을 반환하며, 제네릭(generic)에 대한 인스턴스를 확인하는 로직의 함수
   * 6. algor- : 알고리즘관련 로직의 함수
   * =========================================================================================
   */

  /**
   * @description 삽입 정렬 알고리즘
   */

  public algorInsertionSort(array: number[]) {
    // 두번째 자리부터 시작하여, 배열의 길이만큼 순회한다.
    for (let i = 1; i < array.length; i++) {
      const checkValue: number = array[i];
      let left = i - 1;

      while (left >= 0 && array[left] > checkValue) {
        array[left + 1] = array[left];
        left--;
      }
      array[left + 1] = checkValue;
    }
    return array;
  }

  /**
   * @description 타입스크립트에서 함수를 사용할 수 있도록 타입 체커 함수
   * @param func
   * @param args
   */
  public checkFunctionAfterExecute<T extends (...args: any[]) => void>(func: T | undefined, ...args: Parameters<T>) {
    if (func && typeof func === "function") {
      func(...args);
    }
  }

  /**
   * @description 특정 아이디 값 찾는 로직
   * @param {unknown} list - 알기를 원하는 배열
   * @param {string|number} targetId - 알고자하는 데이터 또는 Key-value
   * @param {string|number} standardId - 비교의 기준이 되는 객체의 Key-value
   * @returns {number} - 있을 경우 index 없을 경우 -1
   */
  public findIndexById(list: KeyAble<string>[], targetId: string | number, standardId: string = "id"): number {
    // 입력값 검증
    if (!Array.isArray(list)) {
      throw new Error("리스트가 배열이 아닙니다.");
    }

    if (!targetId) {
      throw new Error("객체 ID가 없습니다.");
    }

    if (typeof standardId !== "string" || !standardId.trim()) {
      throw new Error("기준 ID가 유효하지 않습니다.");
    }

    // findIndex를 사용하여 대상 ID 검색
    const index = list.findIndex((data) => data[standardId] === targetId);

    // 해당 ID가 없는 경우 -1 반환
    if (index === -1) {
      console.warn(`ID가 ${targetId}인 객체를 찾을 수 없습니다.`);
    }

    return index;
  }

  /**
   * 중간값 찾기
   * @param {number[]} array - 숫자가 담긴 배열
   * @returns {number} 중간값
   */
  public findMedian(array: number[]) {
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return (array[middle - 1] + array[middle]) / 2;
    } else {
      return array[middle];
    }
  }

  /**
   * @description 빈 배열 찾기
   * @param list
   * @returns {boolean}
   */
  public isEmptyArray(list: unknown[]) {
    if (!Array.isArray(list)) throw "배열의 형태가 아닙니다.";
    return list.length === 0;
  }

  /**
   * @description 빈 객체 찾기
   * @param object
   * @returns {boolean} - 빈 객체일 경우, true 빈 객체가 아닐 경우, false
   */
  public isEmptyObject(object?: object) {
    if (!object) return true;
    return Object.keys(object).length === 0;
  }

  /**
   * @description 매개변수에 해당하는 class를 가진 엘리먼트를 'focus'하는 이벤트 함수
   * @param {string} className - Focus이벤트를 할 클래스명
   * @returns {void|null}
   */

  public isClickElement(className: string): void | null {
    if (!className) return null;

    const toFocusingEl = document.getElementsByClassName(className);

    if (toFocusingEl.length > 0) {
      const element = toFocusingEl[0] as HTMLElement;
      element.style.display = "block";
      element.click();
    }
  }

  /**
   * @description 매개변수에 해당하는 엘리먼트를 'focus'하는 이벤트 함수
   * @param {HTMLElement} current
   * @returns
   */
  public isClickCurrent(current: HTMLElement): void | null {
    if (!current) return null;
    current.click();
  }

  /**
   * @description 값이 있는지 확인하는 함수
   * @param {unknown} target
   * @returns {boolean}
   */
  public isBeingChecker(target: unknown): boolean {
    if (target === undefined || target === null) {
      console.warn(`Value '${target}' is undefined or null.`);
      return false;
    }
    return true;
  }

  /**
   * @description 이미지를 파일 형식으로 불러오는 함수
   * @param {string} src - 이미지 URL
   * @returns {Promise | null}
   */

  public onLoadImageFromUrl(src: string): null | Promise<unknown> | undefined {
    if (!src) return null;

    return new Promise((resolve, reject) => {
      fabric.Image.fromURL(src!, (image) => {
        if (image) {
          image.getElement();
          resolve(image);
        } else {
          reject(new Error("이미지 로드 실패"));
        }
      });
    });
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
   * @description instance 찾기
   * @returns {boolean}
   */
  public whatInstance<T>(rawData: unknown, model: new (...args: any[]) => T): rawData is T {
    return rawData instanceof model;
  }
}
