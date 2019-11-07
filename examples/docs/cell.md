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
| plain    | ghost模式  | boolean  | -           |    -    |
| type    | 按钮类型  | string  | -           | default |
| size    | 按钮尺寸 | string  |          | normal |
| disabled | 按钮禁用 | boolean  |          | normal |
