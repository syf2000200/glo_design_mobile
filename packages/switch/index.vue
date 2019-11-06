<template>
  <label class="gc-switch">
    <input class="gc-switch__input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="gc-switch__core"></span>
    <div class="gc-switch__label">
        <slot></slot>
    </div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
import create from '../utils/create-basic'
export default create({
  name: 'switch',
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
})
</script>
