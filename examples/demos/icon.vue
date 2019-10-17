<template>
  <div class="demo-block">
    <ul class="icon-list">
      <li v-for="name in icons" :key="name">
        <div class="demo-icon-wrap">
          <gc-icon :name="name.substring(5)" :size="12"></gc-icon>
          <span class="name">{{name.substring(5)}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
let iconList = require('../icon.json')

export default {
  name: 'icon-demo',

  data () {
    return {
      icons: iconList
    }
  }
}
</script>

<style lang="scss">
.icon-list {
  overflow: hidden;
  list-style: none !important;
  padding: 0;
  border: solid 1px #eaeefb;
  border-radius: 4px;
}
.icon-list li {
  float: left;
  width: 33.333%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  transition: color 0.15s linear;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
  .demo-icon-wrap {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', SimSun, sans-serif;
    color: #626673;
  }
  .gc-icon {
    display: block;
    margin-bottom: 15px;
  }
  &:hover {
    color: rgb(92, 182, 255);
  }
}
</style>
