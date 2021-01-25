# eslint-config-tpconfig

此扩展包是在 `eslint:recommended` 和 [plugin:vue/vue3-recommended](https://eslint.vuejs.org/) 基础之上配置的一组规则。使用时需要将 `'tpconfig'` 放在 `extends` 的末尾。

## 使用

```shell
$ npm install eslint-config-tpconfig -D
```

```js
// .eslintrc.js
{
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'tpconfig'
    ]
}
```

使用 [vue-preset](https://github.com/CDTRSFE/vue-preset) 创建项目会自动添加在 eslint 配置文件中，无需额外安装。

```shell
$ vue create --preset CDTRSFE/vue-preset <project-name>
```

## 升级

此规则单独维护，如果配置有修改会发新的 npm 包，`npm update eslint-config-tpconfig -D` 升级即可。
