/*
 * @Description: 安装方法
 * @Author: xujian
 * @Date: 2020-11-01 21:05:43
 */
import Drawer from './Drawer.vue'
import './drawer.scss'
const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Vue.component(Drawer.name, Drawer);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;