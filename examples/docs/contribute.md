# 开发指南
<!-- {.md} -->

----
<!-- {.md} -->

## 初始化项目
<!-- {.md} -->

```js
git clone http://10.1.83.101:8181/syf2000200/gc_components_demo.git

cd gc_components_demo

# 初始化项目、安装依赖
npm run init
```
<!-- {.md} -->

## 运行项目
<!-- {.md} -->
```js
# 本地开发模式
npm run dev

```
<!-- {.md} -->

浏览器访问<!-- {.md} --> [http://localhost:8080](http://localhost:8080)<!-- {.md} --> 就可以看到所有组件的示例了

## 发布NPM包和文档
<!-- {.md} -->
```js
# 发布npm包
npm run release

# 发布文档
npm run publish:docs
```
<!-- {.md} -->
具体执行命令，可查看对应脚本。
<!-- {.md} -->

## 工具方法
<!-- {.md} -->
```js
# 单独启动一个服务将独立样式文件整合打包
npm run dev:style

# 将样式构建至发布包
npm run build:style

# 生成npm包入口文件'/packages/index.js'
npm run build:entry

# 打包npm包文件
npm run build:lib

# 将demo项目构建为可部署的静态包
npm run build:docs
```
<!-- {.md} -->