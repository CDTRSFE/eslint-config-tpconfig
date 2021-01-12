module.exports = {
    rules: {
        'no-console': 1,
        'no-debugger': 1,
        // 缩进使用 4 个空格 默认就是4个
        'indent': [2, 4, { 'SwitchCase': 1 }],
        // 强制 getter 和 setter 在对象中成对出现
        'accessor-pairs': 2,
        // 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': 2,
        // 代码块中开括号前和闭括号后有空格
        'block-spacing': 2,
        // 大括号放在控制语句或声明语句同一行的位置，允许开括号和闭括号在同一行
        'brace-style': 2,
        // 使用驼峰命名约定
        'camelcase': 2,
        // 禁止函数圆括号之前有空格
        'space-before-function-paren': [2, 'never'],
        // 当最后一个元素或属性与闭括号 ] 或 } 在不同的行时，要求使用拖尾逗号；当在同一行时，禁止使用拖尾逗号
        'comma-dangle': [2, 'always-multiline'],
        // 禁止在逗号前使用空格，要求在逗号后使用空格
        'comma-spacing': 2,
        // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        'comma-style': 2,
        // 禁止使用object构造函数
        'no-new-object': 2,
        // 当块中有多条语句时使用大括号
        'curly': [2, 'multi-line'],
        // 要求点操作符和属性放在同一行
        'dot-location': [2, 'property'],
        // 要求在非空文件末尾至少存在一行空行
        'eol-last': 2,
        // 强制最大连续空行数为1，强制文件末尾和文件开始的最大连续空行数为1和0
        'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
        // 要求使用 === 和 !==
        'eqeqeq': 2,
        // generator 函数中 * 号左边有空格右边不允许有空格? es6建议星号后面有空格，前面没有
        'generator-star-spacing': [2, 'after'],
        // 强制回调错误处理（参数名满足 /^(err|error)$/ 时有效）
        'handle-callback-err': [2, '^(err|error)$'],
        // 强制所有不包含单引号的 JSX 属性值使用单引号
        'jsx-quotes': [2, 'prefer-single'],
        // 强制对象字面量冒号前无空格，冒号后有空格
        'key-spacing': 2,
        // 强制关键字前后有空格
        'keyword-spacing': 2,
        // 构造函数首字母大写
        'new-cap': 2,
        // 调用无参构造函数时带括号
        'new-parens': 2,
        // 禁止使用 Array 构造函数创建数组
        'no-array-constructor': 2,
        // 禁止使用 arguments.caller 和 arguments.callee
        'no-caller': 2,
        // 禁用 eval()
        'no-eval': 2,
        // 禁止扩展原生对象
        'no-extend-native': 2,
        // 禁止不必要的函数绑定
        'no-extra-bind': 2,
        // 禁止冗余的括号
        'no-extra-parens': 2,
        // 浮点小数的小数点之前或之后必须有数字
        'no-floating-decimal': 2,
        // 禁用隐式的eval()
        'no-implied-eval': 2,
        // 禁用 __iterator__ 属性
        'no-iterator': 2,
        // 禁用与变量同名的标签
        'no-label-var': 2,
        // 禁用标签语句
        'no-labels': 2,
        // 禁用不必要的嵌套块
        'no-lone-blocks': 2,
        // 禁止出现多个空格
        'no-multi-spaces': 2,
        // 禁止多行字符串
        'no-multi-str': 2,
        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-wrappers': 2,
        // 禁止在字符串字面量中使用八进制转义序列
        'no-octal-escape': 2,
        // 禁止对 __dirname 和 __filename 进行字符串连接 (node.js)(v7.0.0 使用 node/no-path-concat)
        'no-path-concat': 2,
        // 不允许 new require (node.js)
        'no-new-require': 2,
        // 禁用 __proto__ 属性
        'no-proto': 2,
        // 禁止在返回语句中赋值, 除非使用括号把它们括起来
        'no-return-assign': 2,
        // 禁止自身比较
        'no-self-compare': 2,
        // 不允许使用逗号操作符
        'no-sequences': 2,
        // 禁止在函数标识符和其调用之间有空格
        'func-call-spacing': 2,
        // 限制可以被抛出的异常(只能抛出 Error 对象)
        'no-throw-literal': 2,
        // 禁用行尾空格包括注释
        'no-trailing-spaces': 2,
        // 禁止将变量初始化为 undefined
        'no-undef-init': 2,
        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 2,
        // 禁止可以表达为更简单结构的三元操作符
        'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
        // 禁用不必要的 .call() 和 .apply()
        'no-useless-call': 2,
        // 禁止在对象中使用不必要的计算属性
        'no-useless-computed-key': 2,
        // 禁用不必要的构造函数
        'no-useless-constructor': 2,
        // 禁止属性前有空白
        'no-whitespace-before-property': 2,
        // 变量分开声明
        'one-var': [2, 'never'],
        // 强制操作符使用一致的换行符风格 (要求把换行符放在操作符前面)
        'operator-linebreak': [2, 'before'],
        // 禁止块语句和类的开始或末尾有空行
        'padded-blocks': [2, 'never'],
        // 使用单引号
        'quotes': [2, 'single'],
        // 语句末尾使用分号
        'semi': 2,
        // 强制分号之后有空格，禁止分号之前有空格
        'semi-spacing': 2,
        // 要求语句块之前有空格
        'space-before-blocks': 2,
        // 禁止圆括号内的空格
        'space-in-parens': 2,
        // 要求中缀操作符周围有空格
        'space-infix-ops': 2,
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': 2,
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
        // 禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': 2,
        // 需要把立即执行的函数包裹起来(内部括号外部括号都可以)
        'wrap-iife': [2, 'any'],
        // 强制在 yield* 表达式中前面没空格后面有空格
        'yield-star-spacing': 2,
        // 者禁止 Yoda 条件
        'yoda': 2,
        // 要求使用 const 声明那些声明后不再被修改的变量
        'prefer-const': 2,
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': [2, 'always', { 'objectsInObjects': false }],
        // 禁止在数组括号内使用空格
        'array-bracket-spacing': 2,
        // 使用严格模式
        'strict': 2,
        // 限制函数块中的语句的最大数量
        'max-statements': [2, { 'max': 20 }, { 'ignoreTopLevelFunctions': true }],

        // 每行最多的属性个数
        'vue/max-attributes-per-line': [2, {
            'singleline': 12
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
        'vue/html-indent': [2, 4]
    }
}