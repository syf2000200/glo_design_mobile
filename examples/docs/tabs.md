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
<gc-tab-bar :fixed="true">
    <gc-tab-item id="1">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        1
    </gc-tab-item>
    <gc-tab-item id="2">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        2
    </gc-tab-item>
    <gc-tab-item id="3">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        3
    </gc-tab-item>
</gc-tab-bar>
```

:::

方式二：<!-- {.md} -->
::: demo
```js

import { TabBar, TabItem, Icon } from 'glo_design_mobile'

```
:::
<!-- {.md} -->
::: demo
```html
<template>
  <div>
    <TabBar :auto="4000">
      <TabItem id="1">
        <Icon slot="icon" name="arrow-bold" :size="24"></Icon>
        1
      </TabItem>
      <TabItem id="2">
        <Icon slot="icon" name="arrow-bold" :size="24"></Icon>
        2
      </TabItem>
      <TabItem id="3">
        <Icon slot="icon" name="arrow-bold" :size="24"></Icon>
        3
      </TabItem>
    </TabBar>
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
      TabBar,
      TabItem,
      Icon,
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
