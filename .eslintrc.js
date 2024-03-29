module.exports = {
  extends: [
    'get-off-my-lawn',
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. MUST ALWAYS BE LAST.
  ],
  parser: '@typescript-eslint/parser', // Use TS Parser
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript
    sourceType: 'module', // Allow imports
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'no-use-before-define': 'off', // React imports have an error to due version mismatches in packages
    'no-param-reassign': 'off', // Reduce functions
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }], // Allow JSX is TSX Files
    'react/no-array-index-key': 'off', // :shrug:
    'unicorn/no-abusive-eslint-disable': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.types.ts', '.ts', 'tsx', 'js', '.jsx'],
      },
      typescript: {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["/node_modules/", "/.next/", "/out/", "/graphql/generated.ts"],
};
