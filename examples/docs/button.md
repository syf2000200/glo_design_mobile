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
<gc-button size="large" type="default">default</gc-button>
<gc-button size="large" type="danger">danger</gc-button>
<gc-button size="large" type="primary">primary</gc-button>

<gc-button size="small" type="default">default</gc-button>
<gc-button size="small" type="danger">danger</gc-button>
<gc-button size="small" type="primary">primary</gc-button>

<gc-button size="large" type="default" disabled>default</gc-button>
<gc-button size="large" type="danger" disabled>danger</gc-button>
<gc-button size="large" type="primary" disabled>primary</gc-button>

<gc-button size="large" type="default" plain>default</gc-button>
<gc-button size="large" type="danger" plain>danger</gc-button>
<gc-button size="large" type="primary" plain>primary</gc-button>
```

:::

方式二：<!-- {.md} -->

```js

import { Button } from 'gc-components-mobile'

```
<!-- {.md} -->
```html
<template>
  <div>
    <Button>这是一个基础卡片</Button>
  </div>
</template>
```
<!-- {.md} -->
```js
<script>
  export default {
    components: {
      Button,
    }
  }
</script>
```
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
