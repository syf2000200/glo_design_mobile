# PullDown 上拉刷新/下拉加载

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-pull-down`标签来引用

::: demo

```html
<gc-pull-down :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</gc-pull-down>
```

:::

此组件的内容部分是用户自由定义，所以示例的样式仅提供展示。<!-- {.md} -->

## Attributes

<!-- {.md} -->

| 参数          | 说明             | 类型     | 可选值                             | 默认值    |
| ------------- | ---------------- | -------- | ---------------------------------- | --------- |
| topMethod     | 下拉刷新执行的方法       | `Function` | - | - |
| bottomMethod     | 上拉刷新执行的方法       | `Function` | - | - |
| bottomAllLoaded     | 为true是不会再此触发上拉刷新执行方法 | `Boolean` | - | false |
