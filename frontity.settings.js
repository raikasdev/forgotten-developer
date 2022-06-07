const settings = {
  "name": "raikas.dev",
  "state": {
    "frontity": {
      "url": "https://raikas.dev",
      "title": "Roni Äikäs",
      "description": "Roni Äikkään nettisivut ja blogi"
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
              "/blogi"
            ],
            [
              "/blogi/ohjelmointi",
              "/blogi/ohjelmointi/"
            ],
            [
              "/blogi/videopelit",
              "/blogi/videopelit/"
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
          "url": "https://wp.raikas.dev",
          "homepage": "mina",
          "postsPage": "blogi"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
