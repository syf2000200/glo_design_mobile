<template>
  <div :class="['gc',cardThemeClass,cardSideClass]">
    <div class="gc__title" v-if="title">{{title}}</div>
    <div class="gc__content">
      <slot name="content"></slot>
    </div>
    <div class="gc__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import create from '../utils/create-basic'
export default create({
  name: 'baseCard',
  props: {
    title: String,
    themeType: {
      type: String,
      default: 'default'
    },
    sideType: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    cardThemeClass () {
      return 'gc--' + this.themeType
    },
    cardSideClass () {
      return 'gc--' + this.sideType
    }
  },
})
</script>
