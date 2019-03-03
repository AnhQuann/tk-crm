module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
          "node": {
            "paths": ["src"]
          }
        }
    },
    "rules": {
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "no-underscore-dangle": ['error', {
            allow: ["_id"],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: false,
        }],
        "no-nested-ternary": [
            0,
        ],
        "import/no-unresolved": [
            2, 
            { caseSensitive: false }
         ],
        "react/jsx-filename-extension": [1, { "extensions": [".jsx"] }],
    }
  };
