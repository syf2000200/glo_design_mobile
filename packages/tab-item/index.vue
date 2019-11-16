<template>
  <a class="gc-tab-item"
    @click="handle"
    :class="[
    { 'is-selected': this.$parent.value == id },

    ]">
    <div class="gc-tab-item__icon"><slot name="icon"></slot></div>
    <div class="gc-tab-item__label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * gc-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <gc-tab-item>
 *   <img slot="icon" src="">
 *   订单
 * </gc-tab-item>
 */
import create from '../utils/create-basic'
export default create({
  name: 'tabItem',
  props: ['id'],
  methods: {
      handle() {
          this.$parent.$emit('input', this.id)
      }
  },
})
</script>