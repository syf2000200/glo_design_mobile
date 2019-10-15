<template>
  <div class="demo-block">
    <gc-base class="demo-card">
      <div slot="content">这是卡片内容</div>
      <div slot="footer">
        <div class="gc__footer-content">这是底部内容</div>
      </div>
    </gc-base>
    <gc-base class="demo-card" theme-type="primary">
      <div slot="content">这是卡片内容</div>
    </gc-base>
  </div>
</template>
<script>
export default {
  name: 'base-demo'
}
</script>
