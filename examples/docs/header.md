# Button 按钮
<!-- {.md} -->

---
<!-- {.md} -->

## 如何使用
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-button`标签来引用

::: demo

```html
<gc-button>button</gc-button>
<gc-button size="large" type="default" @click="handleClick">default</gc-button>
<gc-button size="large" type="danger">danger</gc-button>
<gc-button size="large" type="primary">primary</gc-button>
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
