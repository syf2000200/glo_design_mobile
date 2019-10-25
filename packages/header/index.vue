<template>
  <header
    class="gc-header"
    :class="{ 'is-fixed': fixed }">
    <div class="gc-header__button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="gc-header__title" v-text="title"></h1>
    <div class="gc-header__button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * gc-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <gc-header title="我是标题" fixed>
 *   <gc-button slot="left" icon="back">返回</gc-button>
 *   <gc-button slot="right" icon="more"></gc-button>
 * </gc-header>
 */
import create from '../utils/create-basic'
export default create({
  name: 'header',
  props: {
    fixed: Boolean,
    title: String
  }
})
</script>