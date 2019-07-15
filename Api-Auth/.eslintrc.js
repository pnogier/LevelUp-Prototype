module.exports = {
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "rules": {
    "no-console": "off",
    "node/no-unpublished-require": ["error", {
      "allowModules": ["chai", "mocha"]
    }]
  }
};