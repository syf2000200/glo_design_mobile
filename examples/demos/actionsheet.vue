<template>
  <div class="demo-block">
    <div class="page-button-group">
      <gc-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</gc-button>
      <gc-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</gc-button>
    </div>
    <gc-actionsheet :actions="actions" v-model="sheetVisible"></gc-actionsheet>
    <gc-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></gc-actionsheet>
  </div>
</template>

<style>
  .page-button-group {
    padding: 0 20px;
  }
  .page-button-group, .page-button-group>* {
    margin-bottom: 15px;
  }
</style>

<script type="text/babel">
export default {
  name: 'gc-actionsheet-demo',
  data () {
    return {
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: []
    }
  },
  methods: {
    takePhoto () {
      console.log('taking photo')
    },
    openAlbum () {
      console.log('opening album')
    },
    goBack () {
      history.go(-1)
    }
  },
  mounted () {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '从相册中选择',
      method: this.openAlbum
    }]
    this.actions2 = [{
      name: '确定'
    }, {
      name: '返回上一步',
      method: this.goBack
    }]
  }
}
</script>
