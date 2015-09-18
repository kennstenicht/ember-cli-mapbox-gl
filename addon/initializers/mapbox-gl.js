import MapboxGl from 'ember-cli-mapbox-gl/services/mapbox-gl';

export default {
  name: 'mapbox-gl-service',

  initialize: function(container, application) {
    application.register('service:mapbox-gl', MapboxGl);

    var config = container.lookupFactory('config:environment');

    if (!config.mapbox || !config.mapbox.accessToken) {
      console.error('Please specify your mapbox.accessToken in your config.');
      return;
    }

    mapboxgl.accessToken = config.mapbox.accessToken;
  }
};

