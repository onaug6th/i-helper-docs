# Plug-in configuration manual

##  basic configuration

### name (required)

The name of the plugin

* Type: `String`

```json
{
  "name": "my-plugin"
}
```

### version (required)

The plug-in version number, the format must conform to the [SemVer](https://github.com/FridaS/blog/issues/13) specification.

```json
{
  "version": "0.1.0"
}
```

* Type: `String`

### logo (required)

The icon of the plug-in, the value is the relative file path address of `plugin.json`.

* Type: `String`

```json
{
  "logo": "logo.png"
}
```

### desc (required)

Description of the plug-in

* Type: `String`

```json
{
  "desc": "Description of the plug-in"
}
```

### main (required)

The entry file of the plugin, the value is the relative file path address of `plugin.json`.

* Type: `String`

```json
{
  "main": "index.html"
}
```

### dev

The development mode configuration of the plug-in, the value is the object. It has the attributes of `main` and `preload`, indicating the address of the plug-in entry file in development mode.

* Type: `PluginDevConfig`

```json
{
  "dev": {
    "main": "http://localhost:9527",
    "preload": "preload.js"
  }
}
```

### preload

The preloaded file of the plug-in allows the developer to execute certain logic before the plug-in page is rendered. The value is the relative file path address of `plugin.json`.

* Type: `String`

```json
{
  "preload": "preload.js"
}
```

## Appearance configuration

### useScrollbarCSS

Whether to use the default style of the scroll bar

* Type: `Boolean`
* Default value: `true`

```json
{
  "useScrollbarCSS": true
}
```

### header.title

Whether to not display the default title (the default title is the plug-in name)

* Type: `Boolean`
* Default value: `true`

```json
{
  "header": {
    "title": true
  }
}
```

### header.show

Whether to display the header bar

After the configuration is `false`, the plug-in will not have a header bar. But you can trigger head button actions through methods such as `iHelper.close()`.

* Type: `Boolean`
* Default value: `true`

```json
{
  "header": {
    "show": true
  }
}
```

### header.btns

The header bar button configuration allows customizing the displayed buttons.

Optional values: `['pin','resize','close']`

* Type: `Array<String>`
* Default value: `['pin','resize','close']`

```json
// Only show the close button
{
  "header": {
    "btns": ["close"]
  }
}
```

### winOptions

Window size configuration

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

* Type: `PluginWinOptions`

## Rights Profile

Control some of the available permissions of the plug-in, the value is the object

* Type: `PluginPermissions`

### permissions.clipboard

Whether to enable monitoring clipboard changes

* Type: `Boolean`

```json
{
  "permissions": {
    "clipboard": true
  }
}
```
