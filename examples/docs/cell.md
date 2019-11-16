# Navbar 顶部栏
<!-- {.md} -->

---
<!-- {.md} -->

## 基础用法
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-cell`标签来引用

::: demo

```html
<gc-cell title="标题文字"></gc-cell>
<gc-cell title="标题文字" value="说明文字"></gc-cell>
```

:::

<!-- {.md} -->带有链接的cell

::: demo

```html
<gc-cell
  title="标题文字"
  to="链接url"
  is-link
  value="带有链接的cell">
</gc-cell>
```

:::

<!-- {.md} -->带有图标的cell

::: demo

```html
<gc-cell
  title="标题文字"
  icon="more"
  value="带有图标的cell">
</gc-cell>
```

:::

<!-- {.md} -->带有自定义内容的cell

::: demo

```html
<gc-cell
  title="标题文字"
  icon="more"
  value="带有自定义内容的cell">
  <span style="color: red">这里是元素</span>
</gc-cell>
```

:::

<!-- {.md} -->带有备注的cell

::: demo

```html
<gc-cell
  title="标题文字"
  label="描述信息"
  value="带有备注的cell">
</gc-cell>
```

:::



## API
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon     | 设置图标  | string  | -          |    -     |
| title    | 设置标题  | String  | -           |    -    |
| value    | 设置内容  | *  | -           | - |
| label    | 设置备注信息 | string  |     -     | - |
| is-link | 设置链接，搭配 to 属性使用 | boolean  |     true, false     | - |
| to | 跳转链接 | String  |     -     | - |
| full | border全屏 | Boolean  |     true, false     | false |
