# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->

## 安装
<!-- {.md} -->

```
npm install gc-demo --save
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import GcDemo from 'gc-demo' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->`px`或者`vw`布局样式

```js
import 'gc-demo/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局
import 'gc-demo/lib/theme-chalk/index.vw.css' // vw单位，适用于移动端布局
```
最后，全局使用组件库<!-- {.md} -->
```js
Vue.use(GcDemo)
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景
<!-- {.md} -->

```js

import { BaseCard } from 'GcDemo'

Vue.use(BaseCard)

```
<!-- {.md} -->

在模板中，用<!-- {.md} --> `<gc-base></gc-base>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <gc-base>这是一个基础卡片</gc-base>
  </div>
</template>
```
<!-- {.md} -->


