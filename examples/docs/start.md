# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->
## 创建一个项目
<!-- {.md} -->
>*可以是已有项目，或者是使用 vue-cli 新创建的空项目，你也可以从<!-- {.md} --> [官方示例](http://10.1.83.101:8181/syf2000200/gc_components_demo) 脚手架里拷贝并修改*
<!-- {.md} -->
## 安装
<!-- {.md} -->

```
npm install glo_design_mobile
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import gc from 'glo_design_mobile' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->`px`或者`vw`布局样式

```js
import 'glo_design_mobile/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局
import 'glo_design_mobile/lib/theme-chalk/index.vw.css' // vw单位，适用于移动端布局
```
最后全局调用组件库<!-- {.md} -->
```js
Vue.use(gc)
```
<!-- {.md} -->

在模板中，以<!-- {.md} --> `<gc-base></gc-base>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <gc-base>这是一个基础卡片组件</gc-base>
  </div>
</template>
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可局部注册所需的组件
<!-- {.md} -->

```js

import { BaseCard } from 'glo_design_mobile'

```
<!-- {.md} -->

在模板中，首先注册引用的组件，然后以自定义标签的方式使用组件，需要注意的是，样式文件依然需要单独引入。
<!-- {.md} -->
```html
<template>
  <div>
    <BaseCard>这是一个基础卡片</BaseCard>
  </div>
</template>
```
<!-- {.md} -->
```js
<script>
  export default {
    components: {
      BaseCard,
    }
  }
</script>
```
<!-- {.md} -->


