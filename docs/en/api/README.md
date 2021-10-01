---
sidebar: auto
---

# iHelper API Reference

iHelper mounts an api method named `iHelper` to the global object (window) of the plug-in. You can call this method on the page.

## Application

### getUser()

Get current login account information

### getWinInfo()

Get information about the current form

* return:
```ts
interface WinInfo {
  pluginId: string;
  viewId: number;
  fatherViewId: number;
  isDev: boolean;
}
```

### getPluginWinsInfo()

Get information about all forms of the plug-in

* Return: `{Array<PluginWin>} plug-in information of all forms`

### createBrowserWindow(url, options)

Create a new plug-in form
* Parameters:
1. `{string} url form address`
2. `{BrowserWindowConstructorOptions} options window configuration (optional)`

* Return: `{Object} New form's form information`

If you repeatedly open the form of the same `url`, iHelper will display the form of the same `url` instead of creating a new form.

If you need to open multiple windows with the same `url`, you can set the `newInstance` property value of `options` to `true`. To force a new form to be opened

### send(id, event, ...args)

Send an event to the specified id form

* Parameters:
1. `{number|string} id form ID|plugin ID`
2. `{string} event event name`
3. `{Array<any>} any number of parameters passed by args`

Calling this method can send events to the form with the specified form ID/plug-in ID. If the target form listens to the corresponding event name, the callback will be executed.

When the id is a string, the event will be sent to all widgets whose id is equal to this id.

```js
const note = {id: 1, content:'Note content'};
const index = 1;

const winId = 3;
iHelper.send(winId,'note-add', note, index);

const pluginId = '7b1dcadb-ff82-4d14-bfca-5e2800462157';
iHelper.send(pluginId,'node-add', note, index);
```

### on(event, callback)

Listen to form events
* Parameters:
1. `{string} event event name`
2. `{Function} callback function`
    -`{Array<any>any[]} args callback parameters`


Call this method to monitor events sent from other forms to this form and execute callbacks;

```js
iHelper.on('note-add', (...args) => {
  // do sth...
});
```

### setAlwaysOnTop(alwaysOnTop)

Plug-in form on top
* Parameters:
1. `{boolean} alwaysOnTop whether to top`

### minimize()

Minimize the plug-in window

### unmaximize()

Plug-in window zoom

### maximize()

Maximize the plug-in window

### hide()

Hide plug-in form

### close()

Close the current form

If the current form is the parent form of the plug-in, all child forms opened by this plug-in will be recycled

### setTitle(title)

Set the current form title
* Parameters:
1. `{string} title title`

```js
iHelper.setTitle('Custom Title');
```

## Clipboard

### clipboard.on(callback)

Monitor clipboard changes

::: tip
Plugins that need to monitor clipboard changes need to configure [Permissions](../guide/advanced/config.md#) `permissions.clipboard = true` in `plugin.json`. iHelper will notify this plugin of clipboard change events.
:::

****
* Parameters:
1. `{Function} callback Clipboard change callback function`
    -`{string} type clipboard change type ['text','image']`
    -`{string} value the changed value of the clipboard`


Call this method to monitor the clipboard change callback

```js
iHelper.clipboard.on((type, value) => {
  console.info('Clipboard content change type', type);
  console.info('Clipboard change content', value);
});
```

### clipboard.writeText(value)

Write text to the clipboard
* Parameters:
1. `{string} value text`

```js
iHelper.clipboard.writeText('New content');
```

### clipboard.writeImage(value)

Write picture to clipboard
* Parameters:
1. `{string} value The base64 content of the image`

```js
iHelper.clipboard.writeImage('data:image/png;base64,iVBORw0KG...');
```

## Database

### db.insert(data)

Write new data to the plug-in database
* Parameters:
1. `{Object} data written data`

* Return: `{Object} data containing written information (createdAt, updatedAt, _id)`

```js
const data = {
  content:'august'
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

Delete eligible data from the plug-in database
* Parameters:
1. `{Object} query query conditions`
2. `{Object} options delete configuration (optional)`

* Return: `{number} the number of deleted data`

```js
iHelper.db.remove({ _id: '12asd-asda1-1af12'});
```

### db.update(query, updateQuery, options)

Plug-in database update data
* Parameters:
1. `{Object} query query conditions`
2. `{Object} updateQuery update data`
3. `{Object} options delete configuration (optional)`

* Return: `{Object} updated data`

```js
// Note, when updating data. You need to bring other attribute values ​​in the old data, otherwise they will be lost
iHelper.db.update({ author:'august' }, {author:'august', conetnt:'updated content' });
```

### db.find(query, desc)

Find multiple pieces of data that meet the conditions in the database and return them in the specified order
* Parameters:
1. `{Object} query query condition (optional)`
2. `{boolean} desc Whether to query in reverse order, the default is true (optional)`

* Return: `{Array<Object>} Qualified data`

```js
const result = iHelper.db.find();
```

### db.findOne(query)

Find a single piece of data that meets the conditions in the database
* Parameters:
1. `{Object} query query condition (optional)`

* Return: `{Object} Qualified data`

```js
const result = iHelper.db.findOne({
  _id: '12asd-asda1-1af12'
});
```

### db.paging(query, desc)

Find data in the plug-in database page by page, and return it in the specified order
* Parameters:
1. `{Object} query query condition (optional)`
2. `{boolean} desc Whether to query in reverse order, the default is true (optional)`

* Return: `{Array<Object>} Qualified data`

```js
const result = iHelper.db.paging({
  pageNum: 1,
  pageSize: 10
});
```
