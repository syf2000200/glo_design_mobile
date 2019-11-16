<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="gc-actionsheet">
      <ul class="gc-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="( item, index ) in actions" :key="index" class="gc-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item.name }}</li>
      </ul>
      <a class="gc-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<script type="text/babel">
import Popup from '../utils/popup'
import '../popup/popup.css'
import create from '../utils/create-basic'
export default create({
  name: 'actionsheet',
  mixins: [Popup],
  props: {
    modal: {
      default: true
    },
    modalFade: {
      default: false
    },
    lockScroll: {
      default: false
    },
    closeOnClickModal: {
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: false
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    itemClick (item, index) {
      if (item.method && typeof item.method === 'function') {
        item.method(item, index)
      }
      this.currentValue = false
    }
  },
  mounted () {
    if (this.value) {
      this.rendered = true
      this.currentValue = true
      this.open()
    }
  }
})
</script>
