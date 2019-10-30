<template>
  <div class="demo-block">
    <h4>基础用法</h4>
    <gc-button @click="showCalendar('single')">单选模式</gc-button>
    <gc-button @click="showCalendar('multiple')">多选模式</gc-button>
    <gc-button @click="showCalendar('during')">时间段选择模式</gc-button>
    <gc-button @click="showCalendar2()">指定已选日期、不可选择日期</gc-button>
    <gc-calendar 
      :isShow="isShow"
      :mode="mode"
      :defaultDate="defaultDate"
      :disabledDate="disabledDate"
      @onConfirm="onChangeDate" />
  </div>
</template>
<script>
export default {
  name: 'calendar-demo',
  data() {
    return {
      isShow: false,
      mode: 'single',
      defaultDate: '',
      disabledDate: [],
    }
  },
  methods: {
    showCalendar(param) {
      this.isShow = true
      if(param == 'single') {
        this.mode = 'single'
      }
      if(param == 'multiple') {
        this.mode = 'multiple'
      }
      if(param == 'during') {
        this.mode = 'during'
      }
    },
    showCalendar2() {
      this.isShow = true
      this.mode = 'multiple'
      this.defaultDate = ['2019-11-01', '2019-11-08', '2019-11-09']
      this.disabledDate.push('2019-10-28', '2019-10-31')
    },
    onChangeDate(date) {
      this.isShow = false
      console.log(date)
    },
  },
}
</script>
<style scoped>
h4 {
    font-weight: normal;
    font-size: 14px;
    color: #666666;
    text-align: center;
    margin: 10px 0;
}
.gc-button {
  margin: 0 10px 10px;
}
</style>