"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const pageFiles = {
  ".page": { "/renderer/_error.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.e237adad.js");
  }), "/pages/about/index.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.f5585bd0.js");
  }), "/pages/index/index.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.9b8a1209.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.tsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.8ddc8ed3.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.tsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.ff580e63.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
