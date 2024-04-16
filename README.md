# Taeo-ui Library for React

## Rollup 실행

```bash

# Rollup 실행 및 감시
npm run watch


```

## Example

- example 폴더는 라이브러리가 잘 작동하는지 확인하기 위한 폴더로 cra로 구성하였습니다.

```json
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.96",
    "@types/react": "^18.2.77",
    "@types/react-dom": "^18.2.25",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "taeo-ui": "file:..", // 설치 경로
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },

```

- 설치경로를 다음과 같이 설정합니다. `"taeo-ui": "file:.."`

- 그리고나서, `npm i` 를 통해 패키지를 설치합니다.

## Example 실행

```bash

npm run exam

```

## Trouble Shooting

- [보러가기](https://tkolab.tistory.com/search/rollup)
