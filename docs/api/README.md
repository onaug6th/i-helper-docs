---
sidebar: auto
---

# iHelper API 参考

iHelper往插件的全局对象（window）中，挂载了名为`iHelper`的api方法。你可以在页面中调用此方法。

## 应用相关

### getUser()

获取当前登录账户信息

### getWinInfo()

获取当前窗体的信息

* 返回：
```ts
interface WinInfo {
  pluginId: string;
  viewId: number;
  fatherViewId: number;
  isDev: boolean;
}
```

### getPluginWinsInfo()

获取插件所有窗体的信息

* 返回：`{Array<PluginWin>} 插件所有窗体的信息`

### createBrowserWindow(url, options)

创建一个新插件窗体
* 参数：
1. `{string} url 窗体地址`
2. `{BrowserWindowConstructorOptions} options 窗体配置（可选）`

* 返回：`{Object} 新窗体的窗体信息`

如果重复打开相同`url`的窗体，iHelper会将相同`url`的窗体显示出来，而不会是再创建一个新窗体。

如需要打开相同`url`的多个窗体，可以设置`options`的`newInstance`属性值为`true`。来强制打开新的窗体

### send(id, event, ...args)

往指定id窗体发送事件

* 参数：
1. `{number|string} id 窗体ID|插件ID`
2. `{string} event 事件名`
3. `{Array<any>} args 传递的任意数量参数`

调用此方法能够往指定窗体ID/插件ID的窗体发送事件，如目标窗体监听了对应的事件名，则会执行回调。

当id为字符串时，则会发送事件给所有插件id等于此id的窗体。

```js
const note = { id: 1, content: '便笺内容'};
const index = 1;

const winId = 3;
iHelper.send(winId, 'note-add', note, index);

const pluginId = '7b1dcadb-ff82-4d14-bfca-5e2800462157';
iHelper.send(pluginId, 'node-add', note, index);
```

### on(event, callback)

监听窗体事件
* 参数：
1. `{string} event 事件名`
2. `{Function} callback 回调函数`
    - `{Array<any>any[]} args 回调参数`


调用此方法可监听其他窗体往本窗体发送的事件，并执行回调;

```js
iHelper.on('note-add', (...args) => {
  //  do sth...
});
```

### setAlwaysOnTop(alwaysOnTop)

插件窗体置顶
* 参数：
1. `{boolean} alwaysOnTop 是否置顶`

### minimize()

插件窗体最小化

### unmaximize()

插件窗体缩放

### maximize()

插件窗体最大化

### hide()

隐藏插件窗体

### close()

关闭当前窗体

如当前窗体为插件的父窗体，则会回收通过此插件打开的所有子窗体

### setTitle(title)

设置当前窗体标题
* 参数：
1. `{string} title 标题`

```js
iHelper.setTitle('自定义标题');
```

## 剪贴板

### clipboard.on(callback)

监听剪贴板变化

::: tip
需要监听剪贴板变化的插件，需要在 `plugin.json` 中配置[权限](../guide/advanced/config.md#) `permissions.clipboard = true`。iHelper才会往此插件通知剪贴板改变事件。
:::

****
* 参数：
1. `{Function} callback 剪贴板变化回调函数`
    - `{string} type 剪贴板变化类型 ['text', 'image']`
    - `{string} value 剪贴板变化后的值`


调用此方法可监听剪贴板变化回调

```js
iHelper.clipboard.on((type, value) => {
  console.info('剪贴板内容变化类型', type);
  console.info('剪贴板变化内容', value);
});
```

### clipboard.writeText(value)

往剪贴板中写入文本
* 参数：
1. `{string} value 文本`

```js
iHelper.clipboard.writeText('新的内容');
```

### clipboard.writeImage(value)

往剪贴板中写入图片
* 参数：
1. `{string} value 图片的base64内容`

```js
iHelper.clipboard.writeImage('data:image/png;base64,iVBORw0KG...');
```

## 数据库

### db.insert(data)

往插件数据库中写入新数据
* 参数：
1. `{Object} data 写入的数据`

* 返回：`{Object} 包含写入信息（createdAt，updatedAt，_id）的数据`

```js
const data = {
  content: 'august'
}

const result = iHelper.db.insert(data);
/**
 * {
    "_id": "2Ut8jtPpO39nPuBK",
    "content": "august",
    "createdAt": "2021-07-01T04:51:44.877Z",
    "updatedAt": "2021-07-01T04:51:44.877Z"
  }
 */
console.info(result);
```

### db.remove(query, options)

插件数据库中删除符合条件数据
* 参数：
1. `{Object} query 查询条件`
2. `{Object} options 删除配置（可选）`

* 返回：`{number} 删除数据的数量`

```js
iHelper.db.remove({ _id: '12asd-asda1-1af12'});
```

### db.update(query, updateQuery, options)

插件数据库更新数据
* 参数：
1. `{Object} query 查询条件`
2. `{Object} updateQuery 更新数据`
3. `{Object} options 删除配置（可选）`

* 返回：`{Object} 更新完毕的数据`

```js
//  注意，更新数据时。需要将旧数据中的其他属性值也带上，否则将会丢失
iHelper.db.update({ author: 'august' }, { author: 'august', conetnt: '更新的内容' });
```

### db.find(query, desc)

数据库中查找符合条件的多条数据，并按照指定顺序返回
* 参数：
1. `{Object} query 查询条件（可选）`
2. `{boolean} desc 是否倒序查询，默认为true（可选）`

* 返回：`{Array<Object>} 符合条件的数据`

```js
const result = iHelper.db.find();
```

### db.findOne(query)

数据库中查找符合条件的单条数据
* 参数：
1. `{Object} query 查询条件（可选）`

* 返回：`{Object} 符合条件的数据`

```js
const result = iHelper.db.findOne({
  _id: '12asd-asda1-1af12'
});
```

### db.paging(query, desc)

插件数据库中分页查找数据，并按照指定顺序返回
* 参数：
1. `{Object} query 查询条件（可选）`
2. `{boolean} desc 是否倒序查询，默认为true（可选）`

* 返回：`{Array<Object>} 符合条件的数据`

```js
const result = iHelper.db.paging({
  pageNum: 1,
  pageSize: 10
});
```
