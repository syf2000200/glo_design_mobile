<template>
  <div class="demo-block">
    <gc-base-card>
      <div slot="content">这是卡片内容</div>
      <div slot="footer">
        <div class="gc__footer-content">这是底部内容</div>
      </div>
    </gc-base-card>
    <gc-base-card theme-type="primary">
      <div slot="content">这是卡片内容</div>
    </gc-base-card>
  </div>
</template>
<script>
export default {
  name: 'baseCard-demo'
}
</script>
