/**
 * transition의 스타일 옵션을 나타내는 함수
 * @param {number} timeout - 시간 설정
 * @returns
 */

export default function getTransition(timeout: number = 300) {
  return {
    entering: {
      position: "absolute",
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  };
}
