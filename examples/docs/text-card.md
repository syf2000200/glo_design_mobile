# TextCard 文字卡片

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

使用`message`属性来自定义文字内容。

<!-- {.md} -->

::: demo

```html
<gc-text class="demo-wrap" message="这是卡片内容"></gc-text>

<gc-text
  class="demo-wrap"
  theme-type="primary"
  message="这是卡片内容"
></gc-text>
```

:::

## Attributes

<!-- {.md} -->

| 参数      | 说明       | 类型   | 可选值          | 默认值  |
| --------- | ---------- | ------ | --------------- | ------- |
| themeType | 卡片主题色 | String | default/primary | default |
| message | 文本内容 | String | - | - |
