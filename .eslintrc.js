module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/function-component-definition": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none"
      }
    ],
    "react/prop-types": "off"
  },
  ignorePatterns: [
    ".git",
    ".husky",
    "node_modules",
    "public",
    ".eslintrc.js",
    ".prettierrc",
    "package-lock.json",
    "package.json",
  ]
};
