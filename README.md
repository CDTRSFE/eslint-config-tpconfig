# eslint-config-tpconfig

此扩展包是在 `eslint:recommended`、[plugin:vue/recommended](https://eslint.vuejs.org/)、`@vue/standard` 基础之上配置的一组规则。使用时需要将 `'tpconfig'` 放在 `extends` 的末尾。

## 使用

```shell
$ npm install eslint-config-tpconfig -D
```

```diff
// .eslintrc.js
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@vue/standard',
+       'tpconfig',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    globals: {
        _: 'readonly',
        axios: 'readonly',
    },
};
```

在现有的 Vue 项目中使用，可能需要先升级 eslint 到 6.x，以及安装相关依赖。

创建新的项目，可以直接使用 [vue-preset](https://github.com/CDTRSFE/vue-preset) 无需额外安装依赖。

```shell
$ vue create --preset CDTRSFE/vue-preset <project-name>
```

## 升级

此规则单独维护，如果配置有修改会发新的 npm 包，`npm update eslint-config-tpconfig -D` 升级即可，或者卸载之后重新安装。
