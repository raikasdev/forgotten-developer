const settings = {
  "name": "raikas.dev",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "forgotten-developer",
      "state": {
        "theme": {
          "menu": [
            [
              "/mina",
              "/"
            ],
            [
              "/blogi",
              "/blog"
            ],
            [
              "/aihe/ohjelmointi",
              "/category/ohjelmointi/"
            ],
            [
              "/aihe/videopelit",
              "/category/videopelit/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.raikas.dev"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
