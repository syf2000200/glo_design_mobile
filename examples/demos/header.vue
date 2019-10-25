<template>
  <div class="demo-block">
    <gc-header title="我是标题" fixed>
        <gc-button slot="left" icon="arrow-left-reg" @click="handleBack">返回</gc-button>
        <gc-button slot="right" icon="more-fill"></gc-button>
    </gc-header>
  </div>
</template>
<script>
export default {
  name: 'button-demo',
  methods: {
    handleBack() {
      console.log('返回')
    }
  },
}
</script>
<style scoped>
.page-button-group, .page-button-group>* {
    margin-bottom: 15px;
}
</style>
