# Popup 弹出窗
<!-- {.md} -->

---
<!-- {.md} -->

## 基础用法
<!-- {.md} -->

方式一：<!-- {.md} -->
通过`gc-popup`标签来引用
<!-- {.md} -->
`position` 属性指定了 `popup` 的位置。比如，`position` 为 'bottom' 时，`popup` 会从屏幕下方移入，并最终固定在屏幕下方。移入/移出的动效会根据 `position` 的不同而自动改变，无需手动配置。
<!-- {.md} -->

将 `v-model` 绑定到一个本地变量，通过操作这个变量即可控制 `popup` 的显示与隐藏。
<!-- {.md} -->

若省略 `position` 属性，则 `popup` 会相对于屏幕居中显示（若不想让其居中，可通过 CSS 对其重新定位）。此时建议将动效设置为 `popup-fade`，这样在显示/隐藏时会有淡入/淡出效果。
::: demo

```html
<gc-popup v-model="propupVisible" postion="bottom">
...
</gc-popup>
```

:::

方式二：<!-- {.md} -->
::: demo
```js

import { GcPopup } from 'glo_design_mobile'

```
:::
<!-- {.md} -->
::: demo
```html
<template>
  <div>
    <gc-popup v-model="propupVisible" postion="bottom">
    ...
    </gc-popup>
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
      GcPopup,
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
| position     | popup 的位置。省略则居中显示  | String  | top,right,bottom,left          |    -     |
| pop-transition    | 显示/隐藏时的动效，仅在省略 position 时可配置  | String  | popup-fade           |    -    |
| modal    | 是否创建一个 modal 层  | Boolean  | -           | true |
| closeOnClickModal    | 是否可以通过点击 modal 层来关闭 popup | Boolean  |          | true |
