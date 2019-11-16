# Button 按钮
<!-- {.md} -->

---
<!-- {.md} -->

## 基础用法
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-button`标签来引用

::: demo

```html
<gc-button size="large" type="default" @click="handleClick">标准</gc-button>
<gc-button size="large" type="danger">危险</gc-button>
<gc-button size="large" type="primary">主要</gc-button>
<gc-button size="large" type="warning">警告</gc-button>
<gc-button size="large" type="warning" icon="barchart-bold">带有图标的警告按钮</gc-button>

<gc-button size="large" type="default" @click="handleClick" noshadow>标准</gc-button>
<gc-button size="large" type="danger" noshadow>危险</gc-button>

<gc-button size="normal" type="default">标准</gc-button>

<gc-button size="small" type="default">标准</gc-button>

<gc-button size="large" type="default" disabled>标准</gc-button>
<gc-button size="large" type="danger" disabled>危险</gc-button>

<gc-button size="large" type="danger" plain>危险</gc-button>
<gc-button size="large" type="primary" plain>主要</gc-button>

```

:::

方式二：<!-- {.md} -->
::: demo
```js

import { GcButton } from 'glo_design_mobile'

```
:::
<!-- {.md} -->
::: demo
```html
<template>
  <div>
    <gc-button>这是一个基础卡片</gc-button>
  </div>
</template>
```
:::
<!-- {.md} -->
::: demo
```js
<script>
  export default {
    components: {
      GcButton,
    }
  }
</script>
```
:::
<!-- {.md} -->

## API
<!-- {.md} -->
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon     | 设置图标  | string  | -          |    -     |
| plain    | ghost模式  | boolean  | -           |    -    |
| type    | 按钮类型  | string  | -           | default |
| size    | 按钮尺寸 | string  |          | normal |
| disabled | 按钮禁用 | boolean  |          | normal |
