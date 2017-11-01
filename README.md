# 基于Ionic 移动端开发指南

### 全局安装定制版本的 ionic cli

```
npm install ysc -g --verbose
```
 

### 创建项目

```
ysc start yourapp mobile 
```
自定义的ionic cli 增加了 mobile 模版内置更丰富的服务与组件

### 核心模块包

####  core 

core 模块包包含了 mock 数据模拟 token 拦截器、 页面预载屏处理、http 代理等服务。

####  ext-ionic 

ext-ionic 为组件库

####  shared 

公共的 控制器定制类