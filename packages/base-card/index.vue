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
import VcLoading from '../loading/index.vue'
import VcChatIcon from '../icon/index.vue'
export default create({
  name: 'base',
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
  components: {
    VcLoading,
    VcChatIcon,
  }
})
</script>
