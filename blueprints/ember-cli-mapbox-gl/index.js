'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: "mapbox-gl-js", target: "0.11.0" }
    ]);
  }
};