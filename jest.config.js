module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetUp.js'],
  testEnvironment: 'jsdom', // default: jsdom, 可配置： node
  "transformIgnorePatterns": [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ]
};
