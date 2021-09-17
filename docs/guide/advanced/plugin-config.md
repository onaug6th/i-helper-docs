# 插件配置手册

##  基本配置

### name（必须）

插件的名称

* 类型：`String`

```json
{
  "name": "my-plugin"
}
```

### version（必须）

插件版本号，格式要符合 [SemVer](https://github.com/FridaS/blog/issues/13) 规范。

```json
{
  "version": "0.1.0"
}
```

* 类型：`String`

### logo（必须）

插件的图标，值为`plugin.json`的相对文件路径地址。

* 类型：`String`

```json
{
  "logo": "logo.png"
}
```

### desc（必须）

插件的描述

* 类型：`String`

```json
{
  "desc": "插件的描述"
}
```

### main（必须）

插件的入口文件，值为`plugin.json`的相对文件路径地址。

* 类型：`String`

```json
{
  "main": "index.html"
}
```

###  dev

插件的开发模式配置，值为对象。拥有`main`与`preload`属性，表示在开发模式下插件入口文件的地址。

* 类型：`PluginDevConfig`

```json
{
  "dev": {
    "main": "http://localhost:9527",
    "preload": "preload.js"
  }
}
```

###  multiple

插件是否能够多开（待开发）

* 类型：`Boolean`

```json
{
  "multiple": true
}
```

###  preload

插件的预加载文件，允许开发者在插件页面渲染前执行某些逻辑。值为`plugin.json`的相对文件路径地址。

* 类型：`String`

```json
{
  "preload": "preload.js"
}
```

##  外观配置

### useScrollbarCSS

是否使用滚动条默认样式

* 类型：`Boolean`
* 默认值：`true`

```json
{
  "useScrollbarCSS": true
}
```

### header.title

是否不展示默认标题（默认标题为插件名）

* 类型：`Boolean`
* 默认值：`true`

```json
{
  "header": {
    "title": true
  }
}
```

### header.show

是否展示头部栏

配置为`false`后，插件将没有头部栏。但你可以通过`iHelper.close()`等方法来触发头部按钮动作。

* 类型：`Boolean`
* 默认值：`true`

```json
{
  "header": {
    "show": true
  }
}
```

### header.btns

头部栏按钮配置，允许自定义显示的按钮。

可选值为：`['pin', 'resize', 'close']`

* 类型：`Array<String>`
* 默认值：`['pin', 'resize', 'close']`

```json
//  只展示关闭按钮
{
  "header": {
    "btns": ["close"]
  }
}
```

### winOptions

窗体大小配置

```json
{
  "winOptions": {
    "width": 350,
    "height": 450,
    "minWidth": 300,
    "minHeight": 400,
    "maxWidth": 900,
    "maxHeight": 1200
  }
}
```

* 类型：`PluginWinOptions`

## 权限配置

控制插件的某些可使用的权限，值为对象

* 类型：`PluginPermissions`

### permissions.clipboard

是否启用监听剪贴板变化功能

* 类型：`Boolean`

```json
{
  "permissions": {
    "clipboard": true
  }
}
```
