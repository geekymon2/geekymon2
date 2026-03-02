import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
