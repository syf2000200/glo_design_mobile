<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(data))" class="group-container" :key="title">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title]" :key="nav.name">
        <template v-if="nav.desc">
          <router-link
            :class="$route.name === nav.name ? 'active' : ''"
            v-if="nav.name"
            :to="{name: nav.name}"
          >{{nav.desc}}</router-link>
          <p v-else class="side-nav-group">{{nav.desc}}</p>
          <div v-for="item in nav.items" :key="item.name">
            <router-link
              :to="{name: item.name}"
              :class="$route.name === item.name ? 'active' : ''"
              class="slid-nav-component"
            >
              <span class="en-name">{{item.desc}}</span>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import navConf from '@/nav.config.json'
export default {
  data () {
    return {
      data: navConf
    }
  }
}
</script>
<style lang="scss">
.side-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #348ad3;
  background-color: #fff;
  border-right: 1px solid #dddddd;
  z-index: 99;
  .group-container {
    margin-bottom: 32px;
  }
  .side-nav-title {
    padding: 0 24px 8px;
    color: #333333;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .side-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #666666;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
      &:hover{
        color: #348ad3;
      }
    }
    .side-nav-group {
      display: block;
      position: relative;
      padding: 6px 0 6px 24px;
      color: #666666;
    }
    .slid-nav-component {
      display: block;
      position: relative;
      padding: 10px 24px 10px 38px;
      color: rgba(0,0,0,.45);
      font-size: 13px;
    }
    .active {
      color: #333333;
      background: #F4FBFE;
    }
  }
}
</style>
