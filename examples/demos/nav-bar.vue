<template>
  <div class="demo-block">
    <gc-nav-bar title="我是标题" fixed>
        <gc-button slot="left" icon="arrow-left-reg" @click="handleBack">返回</gc-button>
        <gc-button slot="right" icon="more-fill"></gc-button>
    </gc-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'navbar-demo',
  methods: {
    handleBack() {
      console.log('返回')
    }
  },
}
</script>
<style scoped>
.demo-block {
    padding-left: 0;
    padding-right: 0; 
}
.page-button-group, .page-button-group>* {
    margin-bottom: 15px;
}
</style>
