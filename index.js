/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox-gl',

  included: function(app) {
    // Mapbox GL
    app.import(app.bowerDirectory + '/mapbox-gl-js/mapbox-gl.js');
    app.import(app.bowerDirectory + '/mapbox-gl-js/mapbox-gl.css');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
