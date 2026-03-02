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
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: new URL("./tsconfig.eslint.json", import.meta.url).pathname,
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
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
