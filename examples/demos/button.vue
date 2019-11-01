<template>
  <div class="demo-block">
    <div class="page-button-group">
      <gc-button size="large" type="default" @click="handleClick">default</gc-button>
      <gc-button size="large" type="danger">danger</gc-button>
      <gc-button size="large" type="primary">primary</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="small" type="default">default</gc-button>
      <gc-button size="small" type="danger">danger</gc-button>
      <gc-button size="small" type="primary">primary</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="large" type="default" disabled>default</gc-button>
      <gc-button size="large" type="danger" disabled>danger</gc-button>
      <gc-button size="large" type="primary" disabled>primary</gc-button>
    </div>
    <div class="page-button-group">
      <gc-button size="large" type="default" plain>default</gc-button>
      <gc-button size="large" type="danger" plain>danger</gc-button>
      <gc-button size="large" type="primary" plain>primary</gc-button>
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
.page-button-group {
  padding: 0 20px;
}
.page-button-group, .page-button-group>* {
    margin-bottom: 15px;
}
.gc-button--small {
  margin-right: 10px;
}
</style>
