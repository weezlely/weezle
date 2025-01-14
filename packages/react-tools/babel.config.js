module.exports = {
  presets: [
    [
      "react-app",
      {
        flow: false,
        typescript: true,
      },
    ],
    [
      "@babel/preset-env",
      {
        targets: { edge: "17", firefox: "60", chrome: "67", safari: "11.1" },
      },
    ],
  ],
};
