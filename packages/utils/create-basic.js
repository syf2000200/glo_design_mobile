/**
 * Created by sunyf-c on 2019/11/2.
 * 创建全局自定义组件
 */
import bem from '../mixins/bem'
import { isDef, camelize } from '.'

function install (Vue) {
  const { name } = this
  Vue.component(name, this)
  Vue.component(camelize(`-${name}`), this)
}

function returnArray () {
  return []
}

function defaultProps (props) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = {
        type: Array,
        default: returnArray
      }
    } else if (props[key] === Number) {
      props[key] = {
        type: Number,
        default: 0
      }
    }
  })
}

export default function (syf) {
  syf.name = 'gc-' + syf.name
  syf.install = syf.install || install
  syf.mixins = syf.mixins || []
  syf.mixins.push(bem)
  syf.methods = syf.methods || {}
  syf.methods.isDef = isDef
  syf.props && defaultProps(syf.props)
  return syf
}
