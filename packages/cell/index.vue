<template>
  <a class="gc-cell" :href="href">
    <span class="gc-cell__mask" v-if="isLink"></span>
    <div class="gc-cell__left">
      <slot name="left"></slot>
    </div>
    <div class="gc-cell__wrapper">
      <div class="gc-cell__title">
        <slot name="icon">
          <gc-icon v-if="icon" :name="icon" :size="24"></gc-icon>
        </slot>
        <slot name="title">
          <span class="gc-cell__text" v-text="title"></span>
          <span v-if="label" class="gc-cell__label" v-text="label"></span>
        </slot>
      </div>
      <div class="gc-cell__value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <gc-icon v-if="isLink" name="arrow-bold" :size="16" color="#cccccc"></gc-icon>
    </div>
    <div class="gc-cell__right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <gc-cell title="标题文字" icon="back" is-link value="描述文字"></gc-cell>
 * <gc-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </gc-cell>
 */
import create from '../utils/create-basic'
export default create({
  name: 'cell',
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },
  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
})
</script>