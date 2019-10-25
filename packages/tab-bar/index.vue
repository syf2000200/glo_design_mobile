<template>
  <div class="gc-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>

import create from '../utils/create-basic'
export default create({
  name: 'tabbar',
  props: {
    fixed: Boolean,
    value: {}
  },
})
</script>