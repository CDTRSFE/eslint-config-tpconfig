module.exports = {
    rules: {
        'no-console': 1,
        'no-debugger': 1,
        // 缩进使用 4 个空格 默认就是4个
        'indent': [2, 4, { 'SwitchCase': 1 }],
        // 使用驼峰命名约定
        'camelcase': [2, { 'properties': 'always' }],
        // 禁止函数圆括号之前有空格
        'space-before-function-paren': [2, 'never'],
        // 当最后一个元素或属性与闭括号 ] 或 } 在不同的行时，要求使用拖尾逗号；当在同一行时，禁止使用拖尾逗号
        'comma-dangle': [2, 'always-multiline'],
        // generator 函数中 * 号左边有空格右边不允许有空格? es6建议星号后面有空格，前面没有
        'generator-star-spacing': [2, 'after'],
        // 禁止冗余的括号
        'no-extra-parens': [2, 'all'],
        // 语句末尾使用分号
        'semi': [2, 'always'],
        // 强制最大连续空行数为1，强制文件末尾和文件开始的最大连续空行数为1和0
        'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
        // 强制在 yield* 表达式中前面没空格后面有空格
        'yield-star-spacing': [2, { 'before': false, 'after': true }],
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': [2, 'always', { 'objectsInObjects': false }],
        // 限制函数块中的语句的最大数量
        'max-statements': [2, { 'max': 20 }, { 'ignoreTopLevelFunctions': true }],
        // 无需严格遵循回调模式，在回调的第一个位置显示未定义的、 null 或错误对象
        'standard/no-callback-literal': 0,
        // 不用强制统一 promise 的回调参数名为 resolve 和 reject
        'promise/param-names': 0,

        // 每行最多的属性个数
        'vue/max-attributes-per-line': [2, {
            'singleline': 5
        }],
        // html 元素可以保持单行
        'vue/singleline-html-element-content-newline': 0,
        // 标签自闭和
        'vue/html-self-closing': [2, {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'never'
            },
            'svg': 'any',
            'math': 'any'
        }],
        // 组件 name 属性值的格式（驼峰）
        'vue/component-definition-name-casing': 2,
        // 允许使用 v-html
        'vue/no-v-html': 0,
        // 定义 vue 中 html 缩进
        'vue/html-indent': [2, 4],
    }
};
