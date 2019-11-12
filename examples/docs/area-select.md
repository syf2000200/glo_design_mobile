# Action sheet 弹出窗
<!-- {.md} -->

---
<!-- {.md} -->
操作表，从屏幕下方移入。

## 基础用法
<!-- {.md} -->

方式一：<!-- {.md} -->
通过`gc-popup`标签来引用

`actions` 属性绑定一个由对象组成的数组，每个对象有 `name` 和 `method` 两个键，`name` 为菜单项的文本，`method` 为点击该菜单项的回调函数。

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 `actionsheet` 的显示与隐藏。

::: demo

```html
<gc-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</gc-actionsheet>
```

:::

方式二：<!-- {.md} -->
::: demo
```js

import { GcActionSheet } from 'glo_design_mobile'

```
:::
<!-- {.md} -->
::: demo
```html
<template>
  <div>
    <gc-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </gc-actionsheet>
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
      GcActionSheet,
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
| actions     | 菜单项数组  | Array  |            |         |
| cancelText    | 取消按钮的文本。若设为空字符串，则不显示取消按钮  | String  |           | '取消'    |
| closeOnClickModal    | 是否可以通过点击 modal 层来关闭 actionsheet | Boolean  |          | true |
