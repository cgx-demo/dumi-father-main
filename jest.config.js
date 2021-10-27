module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetUp.js'],
  testEnvironment: 'jsdom', // default: jsdom, 可配置： node
  // "transform": { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" }, // 配置这项会报错
  "transformIgnorePatterns": [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ]
};
