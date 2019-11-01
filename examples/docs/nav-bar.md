# Navbar 顶部栏
<!-- {.md} -->

---
<!-- {.md} -->

## 基础用法
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-button`标签来引用

::: demo

```html
<gc-nav-bar title="我是标题" fixed>
    <gc-button slot="left" icon="arrow-left-reg" @click="handleBack">返回</gc-button>
    <gc-button slot="right" icon="more-fill"></gc-button>
</gc-nav-bar>
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
