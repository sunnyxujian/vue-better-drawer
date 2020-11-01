# Vue Better Drawer
> vue抽屉组件，支持上下左右方向弹出

## API

```javascript
  props: {
    beforeClose: Function, // 关闭前的钩子函数
    modal: { // 抽屉开关状态
      type: Boolean,
      default: true
    },
    showClose: { // 是否显示关闭按钮
      type: Boolean,
      default: false
    },
    closeOnClickModal: { // 点击浮层是否关闭抽屉
      type: Boolean,
      default: true
    },
    placement: { // 抽屉弹出方向
      type: String,
      default: 'right'
    },
    width: { // 抽屉宽度
      type: String,
      default: '300px'
    },
    appendToBody: { // 是否将抽屉dom插到body里  嵌套的必须设置为true
      type: Boolean,
      default: false
    },
    fullscreen: { // 是否全屏
      type: Boolean,
      default: false
    },
    customClass: { // 自定义class
      type: String,
      default: ''
    },
    title: { //抽屉标题
      type: String
    }
  }
  ```