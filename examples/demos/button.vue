<template>
  <div class="demo-block">
    <div class="page-button-group">
      <gc-button size="large" type="default" @click="handleClick">标准</gc-button>
      <gc-button size="large" type="danger">危险</gc-button>
      <gc-button size="large" type="primary">主要</gc-button>
      <gc-button size="large" type="warning">警告</gc-button>
      <gc-button size="large" type="warning" icon="barchart-bold">带有图标的警告按钮</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="large" type="default" @click="handleClick" noshadow>标准</gc-button>
      <gc-button size="large" type="danger" noshadow>危险</gc-button>
      <gc-button size="large" type="primary" noshadow>主要</gc-button>
      <gc-button size="large" type="warning" noshadow>警告</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="normal" type="default">标准</gc-button>
      <gc-button size="normal" type="danger">危险</gc-button>
      <gc-button size="normal" type="primary">主要</gc-button>
      <gc-button size="normal" type="warning">警告</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="small" type="default">标准</gc-button>
      <gc-button size="small" type="danger">危险</gc-button>
      <gc-button size="small" type="primary">主要</gc-button>
      <gc-button size="small" type="warning">警告</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="large" type="default" disabled>标准</gc-button>
      <gc-button size="large" type="danger" disabled>危险</gc-button>
      <gc-button size="large" type="primary" disabled>主要</gc-button>
      <gc-button size="large" type="warning" disabled>警告</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="large" type="default" plain>标准</gc-button>
      <gc-button size="large" type="danger" plain>危险</gc-button>
      <gc-button size="large" type="primary" plain>主要</gc-button>
      <gc-button size="large" type="warning" plain>警告</gc-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'button-demo',
  methods: {
    handleClick() {
      console.log(123213)
    }
  },
}
</script>
<style scoped>
.page-button-group, .page-button-group>* {
    margin-bottom: 15px;
}
.gc-button--normal, .gc-button--small {
  margin-right: 10px;
}
</style>
