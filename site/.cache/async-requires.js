// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/site/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/site/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/site/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/site/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/site/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/site/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/site/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/site/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/site/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/site/.cache/layouts/index.js")
}