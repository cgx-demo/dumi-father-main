export default {
  esm: 'babel',
  cjs: 'babel',
  umd: true,
  target: 'browser',
  extractCSS: false,
  lessInBabelMode: true, // babel 模式下做 less 编译
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
};
