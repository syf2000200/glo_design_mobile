<template>
  <div class="demo-block">
    <div class="page-title">radio</div>

    <gc-radio
      class="page-part"
      title="单选框列表"
      v-model="value1"
      :options="options1" />
    <div>
      <gc-cell title="选中的项">{{ value1 }}</gc-cell>
    </div>

    <gc-radio
      class="page-part"
      title="单选框列表"
      v-model="value2"
      :options="options2" />
    <div>
      <gc-cell title="选中的项">{{ value2 }}</gc-cell>
    </div>

    <gc-radio
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value3"
      :options="options3" />
  </div>
</template>

<script>
export default {
  name: 'page-radio',
  data () {
    return {
      value1: '',
      value2: '值A',
      value3: ''
    }
  },
  created () {
    this.options1 = ['选项A', '选项B', '选项C']
    this.options3 = ['选项A', '选项B', '选项C']
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ]
  }
}
</script>

<style scoped>
    .demo-block {
        padding-left: 0;
        padding-right: 0;
    }
    .page-title {
        padding: 0 10px;
    }
</style>
