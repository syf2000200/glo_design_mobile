<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <gc-button @click.native="openToast" size="large">点击弹出 Toast</gc-button>
      <gc-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</gc-button>
      <gc-button @click.native="openBottomToast" size="large">自定义 Toast 位置</gc-button>
    </div>
  </div>
</template>

<style>
  .page-msgbox {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .page-title {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
  }
  .page-msgbox-wrapper {
    width: 100%;
  }
  .page-msgbox-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">
import { GcToast, GcLoading } from '../../packages/index'
export default {
  name: 'toast-demo',
  methods: {
      openToast() {
        GcToast.show('这是一个提示', 3000).then(() => {
          console.log('toast hide')
        })
      },
      openToastWithIcon() {
        GcToast.show('连接中..')
      },
      openBottomToast() {
        GcLoading.show('拼命加载中..')
      }
    },
    mounted() {
        console.log(GcLoading)
    },
}
</script>
