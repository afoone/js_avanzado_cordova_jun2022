const presets = [
  [
    "@babel/preset-env",
    {
      "targets": {
        "node": true,
        "chrome": "58",
        "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
        ]
      }
    }
  ]
]

export default {presets}