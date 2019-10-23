<template>
  <button
    :type="nativeType"
    class="gc-button"
    :class="['gc-button--' + type, 'gc-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled">
    <span class="gc-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="gc-icon__font" :class="'icon-' + icon"></i>
      </slot>
    </span>
    <label class="gc-button-text"><slot></slot></label>
  </button>
</template>

<script>
import create from '../utils/create-basic'
export default create({
  name: 'button',
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
})
</script>

