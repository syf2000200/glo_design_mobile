/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import BaseCard from './base-card'
import Button from './button'
import Header from './header'
import Icon from './icon'
import Loading from './loading'
import NavBar from './nav-bar'
import TextCard from './text-card'
const version = '0.0.7'
const components = [
  BaseCard,
  Button,
  Header,
  Icon,
  Loading,
  NavBar,
  TextCard
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  BaseCard,
  Button,
  Header,
  Icon,
  Loading,
  NavBar,
  TextCard
}
export default {
  install,
  version
}
