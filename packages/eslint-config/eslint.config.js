module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['prettier', 'react', 'standard', 'jsx-a11y', 'react-hooks', 'svelte3'],
  parser: 'babel-eslint',
  parserOptions: {
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true
    },
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    strict: 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-alert': 1,
    'no-await-in-loop': 1,
    'no-return-assign': 0,
    'no-var': 2,
    'no-unused-vars': [1, { argsIgnorePattern: 'res|next|^err|reject' }],
    'no-tabs': 2,
    'no-param-reassign': [2, { props: false }],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'no-const-assign': 2,
    'prefer-const': [2, { destructuring: 'all' }],
    'prefer-template': 2,
    'prefer-rest-params': 2,
    'sort-imports': [
      0,
      {
        ignoreCase: true,
        // ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    'no-duplicate-imports': 2,
    'no-useless-rename': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'constructor-super': 1,
    'require-yield': 2,

    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],

    // standard.js (use async/await or Promises instead of callbacks!)
    'standard/no-callback-literal': [2, ['cb', 'callback']],

    // Node.js and CommonJS
    'global-require': 2,

    // react plugin - options - https://github.com/yannickcr/eslint-plugin-react#configuration
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-handler-names': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-key': 2,
    'react/jsx-no-bind': 0, // prevents using arrow functions on props
    'react/jsx-no-target-blank': 2,
    'react/jsx-sort-props': [
      0,
      {
        shorthandLast: true,
        callbacksLast: true,
        reservedFirst: ['key'],
      },
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-typos': 2,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 2, // turn off when working with Apollo
    'react/sort-comp': 2,
    'react/prop-types': 0,

    // react hooks
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,

    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': 1,

    // prettier
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        printWidth: 100,
        bracketSpacing: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
      },
    ],
  },
}
