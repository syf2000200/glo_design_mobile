# Tabbar 导航栏
<!-- {.md} -->

---
<!-- {.md} -->

## 如何使用
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-button`标签来引用

::: demo

```html
<gc-tabbar :fixed="true">
    <gc-tabitem id="1">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        1
    </gc-tabitem>
    <gc-tabitem id="2">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        2
    </gc-tabitem>
    <gc-tabitem id="3">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        3
    </gc-tabitem>
</gc-tabbar>
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
