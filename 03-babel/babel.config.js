const presets = [
      [
        "@babel/preset-env",
        {
          "targets": {

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
  
    module.exports = {presets}