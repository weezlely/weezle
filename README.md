# Taeo-ui Library for React

## Rollup 실행

```bash

# Rollup 실행 및 감시
npm run watch

```

## Example

example 폴더는 라이브러리가 잘 작동하는지 확인하기 위한 폴더입니다. 초기에는 확인하기 위해 cra로 구성하였으나, 로컬에서 React가 중복이 발생하여 이슈들이 생겨 간단하게 프로젝트를 열 수 있도록 `webpack` 을 통해 구성하였습니다.

#### 패키지 설치

```bash
# npm

$ npm i --dev @types/react @types/react-dom html-loader html-webpack-plugin react react-dom ts-loader typescript webpack webpack-cli webpack-dev-server

```

#### 1) package.json

```json
  "dependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "html-loader": "^4.2.0",
    "html-webpack-plugin": "^5.5.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "ts-loader": "^9.4.2",
    "typescript": "^4.6.2",
    "webpack": "^5.77.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.2"
  },

```

- 설치경로를 다음과 같이 설정합니다. `"taeo-ui": "file:.."`

- 그리고나서, `npm i` 를 통해 패키지를 설치합니다.

#### 2) webpack.config.js

```js
const path = require("path");
const HTMLWeebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

## 테스트 실행

```bash

npm run exam

```

## Trouble Shooting

- [보러가기](https://tkolab.tistory.com/search/rollup)
