import MapboxGl from 'ember-cli-mapbox-gl/services/mapbox-gl';

export default {
  name: 'mapbox-gl-service',

  initialize: function(container, application) {
    application.register('service:mapbox-gl', MapboxGl);
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VubnN0ZW5pY2h0IiwiYSI6InQtOTF2NFEifQ.BA8aIiRcBFIAGV7Rry9Egw';
  }
};

