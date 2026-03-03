import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "dist",
      "node_modules",
      "**/*.d.ts",
      "src/**/*.stories.*",
      "src/**/*.test.*",
      "src/vite-env.d.ts",
      "eslint.config.js",
      "prettier.config.js",
      "vite.config.ts",
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-boolean-value": "error",
      "react/jsx-key": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      eqeqeq: "error",
      "no-param-reassign": "warn",
      "no-duplicate-imports": "error",
    },
  },
];
