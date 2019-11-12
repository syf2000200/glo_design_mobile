<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <gc-button @click.native="openAlert" size="large">打开 alert 提示框</gc-button>
      <gc-button @click.native="openConfirm" size="large">打开 confirm 提示框</gc-button>
      <gc-button @click.native="openPrompt" size="large">打开 prompt 提示框</gc-button>
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
import { GcMessageBox } from '../../packages/index'
export default {
  name: 'messageBox-demo',
  methods: {
    openAlert () {
      GcMessageBox.alert('操作成功!', '提示')
    },
    openConfirm () {
      GcMessageBox.confirm('确定执行此操作?', '提示')
    },
    openPrompt () {
      GcMessageBox.prompt(' ', '请输入姓名').then(({ value }) => {
        if (value) {
          GcMessageBox.alert(`你的名字是 ${value}`, '输入成功')
        }
      })
    }
  },
  mounted () {
    console.log(GcMessageBox)
  }
}
</script>
