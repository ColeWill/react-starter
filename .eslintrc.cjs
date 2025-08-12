module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/prop-types": "off", // Disable prop-types as we're using TypeScript
    "react-refresh/only-export-components": "warn",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
