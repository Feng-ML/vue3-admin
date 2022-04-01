module.exports = {

  // 'plugin:vue/essential', 'eslint:recommended'
  extends: ['alloy', 'alloy/vue'],
  plugins: ['import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数的参数禁止超过 8 个
    'max-params': ['error', 8],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 末尾需要有逗号
    // 'comma-dangle': ['error', 'always-multiline'],
    // 文件末尾需要加一个换行
    'eol-last': ['error', 'always'],
    // 行尾需要有分号
    semi: ['error', 'never'],
    // 禁止多行空行：最多一行，文件末尾最多一行
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    // 允许在注释块中尾随空白
    'no-trailing-spaces': ['error', { ignoreComments: false, skipBlankLines: false }],
    // 在花括号内需要空格（{}除外
    'object-curly-spacing': ['error', 'always'],
    // 对象简写，函数简写
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    // 对象字面量的键和值之间使用一致的空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'no-lonely-if': 'error',
    'no-shadow': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
    // 没必要的return
    'no-useless-return': 'error',
    // disallow declaration of variables that are not used in the code
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'dot-notation': 'error',
    'no-useless-escape': 'error',

    // vue相关插件的配置
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
  },
}
