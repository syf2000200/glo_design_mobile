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

<style>
  .gc-actionsheet {
    position: fixed;
    background: #e0e0e0;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    transform: translate3d(-50%, 0, 0);
    backface-visibility: hidden;
    transition: transform .3s ease-out;
  }
  .gc-actionsheet .gc-actionsheet-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .gc-actionsheet .gc-actionsheet-listitem {
    border-bottom: solid 1px #e0e0e0;
  }
  .gc-actionsheet .gc-actionsheet-listitem, .gc-actionsheet-button {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    color: #333;
    background-color: #fff;
  }
  .gc-actionsheet .gc-actionsheet-listitem:active, .gc-actionsheet-button:active {
    background-color: #f0f0f0;
  }
  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>
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
