<template>
  <div class="demo-block">
    <!-- type: text, password, email, tel -->
    <div class="item item-divider">
    有标签: {{username}}
    </div>
    <gc-input type="text" v-model="username" placeholder="用户名" label="用户名"></gc-input>
    <gc-input type="password" v-model="password" placeholder="密码" label="密码"></gc-input>

    <gc-button size="large" type="primary">确认</gc-button>

    <gc-input type="tel" v-model="tel" placeholder="手机"></gc-input>
  </div>
</template>
<script>
  export default{
      name: 'input-demo',
    data() {
      return {
        username: '',
        password: '',
        tel: ''
      }
    }
  }
</script>