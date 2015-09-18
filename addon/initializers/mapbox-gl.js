import MapboxGl from 'ember-cli-mapbox-gl/services/mapbox-gl';

export default {
  name: 'mapbox-gl-service',

  initialize: function(container, application) {
    application.register('service:mapbox-gl', MapboxGl);
  }
};

