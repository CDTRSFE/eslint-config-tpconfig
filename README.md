# eslint-config-tpconfig

此扩展包是在 `eslint:recommended`、[plugin:vue/recommended](https://eslint.vuejs.org/)、`@vue/standard` 基础之上配置的一组规则。使用时需要将 `'tpconfig'` 放在 `extends` 的末尾。

## 使用

```shell
$ npm install eslint-config-tpconfig -D
```

```js
// .eslintrc.js
{
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended', // Vue3 是 plugin:vue/vue3-recommended
        '@vue/standard',
        'tpconfig'
    ]
}
```

在现有的项目中使用，确保安装了以下依赖，如果版本过低也可能出现问题。

 ```json
{
    "@vue/cli-plugin-eslint": "~4.5.0",
    "eslint": "^6.7.2",
    "eslint-config-tpconfig": "^0.x",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^7.0.0-0"
}
 ```

创建新的项目，可以直接使用 [vue-preset](https://github.com/CDTRSFE/vue-preset) 无需额外安装依赖。

```shell
$ vue create --preset CDTRSFE/vue-preset <project-name>
```

## 升级

此规则单独维护，如果配置有修改会发新的 npm 包，`npm update eslint-config-tpconfig -D` 升级即可，或者卸载之后重新安装。
