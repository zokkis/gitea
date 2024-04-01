import {fileURLToPath} from 'node:url';

const cssVarFiles = [
  fileURLToPath(new URL('web_src/css/base.css', import.meta.url)),
  fileURLToPath(new URL('web_src/css/themes/theme-gitea-light.css', import.meta.url)),
  fileURLToPath(new URL('web_src/css/themes/theme-gitea-dark.css', import.meta.url)),
];

/** @type {import('stylelint').Config} */
export default {
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-value-no-unknown-custom-properties',
    '@stylistic/stylelint-plugin',
  ],
  ignoreFiles: [
    '**/*.go',
    '/web_src/fomantic',
  ],
  overrides: [
    {
      files: ['**/chroma/*', '**/codemirror/*', '**/standalone/*', '**/console.css', 'font_i18n.css'],
      rules: {
        'scale-unlimited/declaration-strict-value': null,
      },
    },
    {
      files: ['**/chroma/*', '**/codemirror/*'],
      rules: {
        'block-no-empty': null,
      },
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    '@stylistic/at-rule-name-case': null,
    '@stylistic/at-rule-name-newline-after': null,
    '@stylistic/at-rule-name-space-after': null,
    '@stylistic/at-rule-semicolon-newline-after': null,
    '@stylistic/at-rule-semicolon-space-before': null,
    '@stylistic/block-closing-brace-empty-line-before': null,
    '@stylistic/block-closing-brace-newline-after': null,
    '@stylistic/block-closing-brace-newline-before': null,
    '@stylistic/block-closing-brace-space-after': null,
    '@stylistic/block-closing-brace-space-before': null,
    '@stylistic/block-opening-brace-newline-after': null,
    '@stylistic/block-opening-brace-newline-before': null,
    '@stylistic/block-opening-brace-space-after': null,
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': null,
    '@stylistic/declaration-block-semicolon-newline-after': null,
    '@stylistic/declaration-block-semicolon-newline-before': null,
    '@stylistic/declaration-block-semicolon-space-after': null,
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': null,
    '@stylistic/declaration-colon-newline-after': null,
    '@stylistic/declaration-colon-space-after': null,
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/function-comma-newline-after': null,
    '@stylistic/function-comma-newline-before': null,
    '@stylistic/function-comma-space-after': null,
    '@stylistic/function-comma-space-before': null,
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-newline-inside': 'never-multi-line',
    '@stylistic/function-parentheses-space-inside': null,
    '@stylistic/function-whitespace-after': null,
    '@stylistic/indentation': 2,
    '@stylistic/linebreaks': null,
    '@stylistic/max-empty-lines': 1,
    '@stylistic/max-line-length': null,
    '@stylistic/media-feature-colon-space-after': null,
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': null,
    '@stylistic/media-feature-parentheses-space-inside': null,
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-range-operator-space-before': 'always',
    '@stylistic/media-query-list-comma-newline-after': null,
    '@stylistic/media-query-list-comma-newline-before': null,
    '@stylistic/media-query-list-comma-space-after': null,
    '@stylistic/media-query-list-comma-space-before': null,
    '@stylistic/named-grid-areas-alignment': null,
    '@stylistic/no-empty-first-line': null,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': null,
    '@stylistic/number-leading-zero': null,
    '@stylistic/number-no-trailing-zeros': null,
    '@stylistic/property-case': 'lower',
    '@stylistic/selector-attribute-brackets-space-inside': null,
    '@stylistic/selector-attribute-operator-space-after': null,
    '@stylistic/selector-attribute-operator-space-before': null,
    '@stylistic/selector-combinator-space-after': null,
    '@stylistic/selector-combinator-space-before': null,
    '@stylistic/selector-descendant-combinator-no-non-space': null,
    '@stylistic/selector-list-comma-newline-after': null,
    '@stylistic/selector-list-comma-newline-before': null,
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never-single-line',
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',
    '@stylistic/string-quotes': 'double',
    '@stylistic/unicode-bom': null,
    '@stylistic/unit-case': 'lower',
    '@stylistic/value-list-comma-newline-after': null,
    '@stylistic/value-list-comma-newline-before': null,
    '@stylistic/value-list-comma-space-after': null,
    '@stylistic/value-list-comma-space-before': null,
    '@stylistic/value-list-max-empty-lines': 0,
    'alpha-value-notation': null,
    'annotation-no-unknown': true,
    'at-rule-allowed-list': null,
    'at-rule-disallowed-list': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [true, {ignoreAtRules: ['tailwind']}],
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': null,
    'block-no-empty': true,
    'color-function-notation': null,
    'color-hex-alpha': null,
    'color-hex-length': null,
    'color-named': null,
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': null,
    'comment-no-empty': true,
    'comment-pattern': null,
    'comment-whitespace-inside': null,
    'comment-word-disallowed-list': null,
    'csstools/value-no-unknown-custom-properties': [true, {importFrom: cssVarFiles}],
    'custom-media-pattern': null,
    'custom-property-empty-line-before': null,
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': null,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [true, {ignore: ['consecutive-duplicates-with-different-values']}],
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'declaration-block-single-line-max-declarations': null,
    'declaration-empty-line-before': null,
    'declaration-no-important': null,
    'declaration-property-max-values': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-unit-disallowed-list': {'line-height': ['em']},
    'declaration-property-value-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    'declaration-property-value-no-unknown': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': null,
    'function-allowed-list': null,
    'function-calc-no-unspaced-operator': true,
    'function-disallowed-list': null,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-no-unknown': true,
    'function-url-no-scheme-relative': null,
    'function-url-quotes': 'always',
    'function-url-scheme-allowed-list': null,
    'function-url-scheme-disallowed-list': null,
    'hue-degree-notation': null,
    'import-notation': 'string',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': null,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': [true, {ignore: ['custom-properties']}, {ignoreFunctions: ['var']}],
    'max-nesting-depth': null,
    'media-feature-name-allowed-list': null,
    'media-feature-name-disallowed-list': null,
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-unit-allowed-list': null,
    'media-feature-name-value-allowed-list': null,
    'media-feature-name-value-no-unknown': true,
    'media-feature-range-notation': null,
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': [true, {ignoreAtRules: ['tailwind']}],
    'no-irregular-whitespace': true,
    'no-unknown-animations': null,
    'no-unknown-custom-properties': null,
    'number-max-precision': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'property-allowed-list': null,
    'property-disallowed-list': null,
    'property-no-unknown': true,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': null,
    'rule-selector-property-disallowed-list': null,
    'scale-unlimited/declaration-strict-value': [['/color$/', 'font-weight'], {ignoreValues: '/^(inherit|transparent|unset|initial|currentcolor|none)$/', ignoreFunctions: false, disableFix: true, expandShorthand: true}],
    'selector-anb-no-unmatchable': true,
    'selector-attribute-name-disallowed-list': null,
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-operator-disallowed-list': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-combinator-allowed-list': null,
    'selector-combinator-disallowed-list': null,
    'selector-disallowed-list': null,
    'selector-id-pattern': null,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-id': null,
    'selector-max-pseudo-class': null,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': null,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': true,
    'selector-not-notation': null,
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-allowed-list': null,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-disallowed-list': null,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {ignore: ['custom-elements']}],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'time-min-milliseconds': null,
    'unit-allowed-list': null,
    'unit-disallowed-list': null,
    'unit-no-unknown': true,
    'value-keyword-case': null,
    'value-no-vendor-prefix': [true, {ignoreValues: ['box', 'inline-box']}],
  },
};
