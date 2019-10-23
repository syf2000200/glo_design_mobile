<template>
  <div class="demo-block">
    <ul class="icon-list">
      <li v-for="item in icons" :key="item.name">
        <div class="demo-icon-wrap">
          <gc-icon :name="item.name" :size="24"></gc-icon>
          <span class="name">{{item.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
let { glyphs } = require('../iconfont.json')

export default {
  name: 'icon-demo',

  data () {
    return {
      icons: glyphs
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
