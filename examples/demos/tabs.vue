<template>
  <div class="demo-block">
    <gc-tab-bar class="page-part" v-model="selected">
      <gc-tab-item id="1">选项一</gc-tab-item>
      <gc-tab-item id="2">选项二</gc-tab-item>
      <gc-tab-item id="3">选项三</gc-tab-item>
    </gc-tab-bar>

    <!-- <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div> -->

    <gc-tab-container v-model="selected">
      <gc-tab-container-item id="1">
        1
        <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" /> -->
      </gc-tab-container-item>  
      <gc-tab-container-item id="2">
        2
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" /> -->
      </gc-tab-container-item>
      <gc-tab-container-item id="3">
        3
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" /> -->
      </gc-tab-container-item>
    </gc-tab-container>
  </div>
</template>
<script>
export default {
  name: 'navbar-demo',
  data() {
    return {
      selected: '1'
    };
  },
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
