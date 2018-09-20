module.exports = {
  "extends": "airbnb",
  "globals": { // 全局变量 document 的报错, false 表示属性不可以被重写
    "document": false,
  },
  "rules": { // 解决 index.js 中不能使用 JSX
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};