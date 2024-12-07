module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/src/__tests__"], // 테스트 파일의 기본 디렉토리

  preset: "ts-jest", // TypeScript 사용 시 ts-jest를 사용

  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest", // ts, tsx 파일을 babel-jest로 처리
    "^.+\\.(js|jsx)$": "babel-jest", // js, jsx 파일을 babel-jest로 처리
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Rollup alias를 Jest에서도 사용
  },

  testMatch: [
    // 테스트 파일
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],

  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  collectCoverage: true, // 코드 커버리지를 활성화
  collectCoverageFrom: [
    "src/**/*.ts", // src 디렉토리 내 모든 TypeScript 파일
    "src/**/*.tsx", // src 디렉토리 내 모든 TSX 파일
    "!src/__tests__/**", // __tests__ 폴더 제외
    "!src/**/*.test.{ts,tsx}", // 테스트 파일 제외
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/", // node_modules 제외
    "src/index.ts", // 필요 시 특정 파일 제외
  ],
  coverageDirectory: "<rootDir>/coverage", // 커버리지 보고서를 저장할 디렉토리
  coverageReporters: ["html", "text", "lcov"], // 커버리지 보고서 형식
};

// module.exports = {
//   verbose: true,
//   moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
//   transform: { "^.+\\.(ts|tsx)$": "ts-jest", "^.+\\.(js|jsx)?$": "babel-jest" },
//   moduleNameMapper: { "^@src/(.*)$": "<rootDir>/src/$1" },
//   testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
//   transformIgnorePatterns: ["<rootDir>/node_modules/"],
//   preset: "ts-jest",
//   collectCoverage: true,
//   // coveragePathIgnorePatterns: ["<rootDir>/src/helpers/", "<rootDir>/src/modules/"],
//   collectCoverageFrom: [
//     "<rootDir>/src/**/*.{ts,tsx,js,jsx}", // 커버리지를 수집할 파일들
//   ],
// };
