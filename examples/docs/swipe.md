# Swipe 轮播
<!-- {.md} -->

---
<!-- {.md} -->

## 如何使用
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`gc-swipe`标签来引用

::: demo

```html
<gc-swipe :auto="4000">
  <gc-swipe-item>1</gc-swipe-item>
  <gc-swipe-item>2</gc-swipe-item>
  <gc-swipe-item>3</gc-swipe-item>
</gc-swipe>
```

::: 

方式二：<!-- {.md} -->

::: demo
```js

import { Swipe, SwipeItem } from 'glo_design_mobile'

```
::: 

<!-- {.md} -->
::: demo
```html
<template>
  <div>
    <Swipe :auto="4000">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
    </Swipe>
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
      Swipe,
      SwipeItem
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
| speed     | 动画持时（毫秒） | Number  | -          |    300    |
| auto    | 自动播放的时间间隔（毫秒） | Number  | -   |    3000    |
| defaultIndex    | 初始显示的轮播图的索引  | Number  | -           | 0 |
| continuous | 是否可以循环播放 | Boolean  |          | true |
| showIndicators | 是否显示 indicators | Boolean	  |          | true |
| prevent | 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能 | Boolean	  |          | false |
| stopPropagation | 是否在 touchstart 事件触发时阻止冒泡 | Boolean	  |          | false |

## Slot
<!-- {.md} -->
gc-swipe

<!-- {.md} -->
| name      | 描述    |
|---------- |-------- |
| - | 一个或多个 mt-swipe-item 组件 |

<!-- {.md} -->
gc-swipe-item

<!-- {.md} -->
| name      | 描述    |
|---------- |-------- |
| - | 单个轮播图的内容 |
