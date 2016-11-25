'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: "mapbox-gl-js", source: "nicho90/mapbox-gl-js-bower", target: "0.28.0" }
    ]);
  }
};
