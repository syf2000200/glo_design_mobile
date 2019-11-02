<template>
  <div class="demo-block">
    <div class="page-button-group">
      <gc-button size="large" type="default" @click="handleMiddleClick" ref="button">中部弹出 popup</gc-button>
      <gc-button size="large" type="default" @click="handleTopClick">上侧弹出 popup</gc-button>
      <gc-button size="large" type="default" @click="handleRightClick">右侧弹出 popup</gc-button>
      <gc-button size="large" type="default" @click="handleBottomClick">下侧弹出 popup</gc-button>
    </div>
    <gc-popup v-model="showMiddle" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
      <h1>popup</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
    </gc-popup>
    <gc-popup v-model="showTop" position="top" class="mint-popup-2" :modal="false">
      <p>更新成功</p>
    </gc-popup>
    <gc-popup v-model="showRight" position="right" class="mint-popup-3" :modal="false">
      <gc-button size="large" type="primary" @click.native="showRight = false">关闭</gc-button>
    </gc-popup>
    <gc-popup v-model="showBottom" position="bottom" class="mint-popup-4">
      底部显示内容
    </gc-popup>
  </div>
</template>
<script>
//  import GcPopup from "../../packages/popup/index";
export default {
//    components: {GcPopup},
  name: 'gcPopup-demo',
  data () {
    return {
      showMiddle: false,
      showTop: false,
      showRight: false,
      showBottom: false,
      buttonBottom: 0
    }
  },
  watch: {
    showTop (val) {
      if (val) {
        setTimeout(() => {
          this.showTop = false
        }, 2000)
      }
    }
  },
  methods: {
    handleMiddleClick () {
      this.showMiddle = true
    },
    handleTopClick () {
      this.showTop = true
    },
    handleRightClick () {
      this.showRight = true
    },
    handleBottomClick () {
      this.showBottom = true
    }
  },

  mounted () {
    this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom
  }
}
</script>
<style scoped>
  .page-button-group {
    padding: 0 20px;
  }
  .page-button-group, .page-button-group>* {
    margin-bottom: 15px;
  }
  .gc-button--small {
    margin-right: 10px;
  }
  .mint-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
  }
  .mint-popup-1 > h1 {
    font-size: 20px;
    color: #26a2ff;
  }
  .mint-popup-1 > p {
    margin-bottom: 10px;
  }
  .mint-popup-1::before {
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 50px;
  }
  .mint-popup-2 {
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    backface-visibility: hidden;
  }
  .mint-popup-2 p {
    line-height: 50px;
    color: #fff;
  }
  .mint-popup-3 {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .mint-popup-3 .mint-button {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }
  .mint-popup-4 {
    width: 100%;
    height: 40vh;
    text-align: center;
    vertical-align: middle;
    font-size: 46px;
  }
</style>
