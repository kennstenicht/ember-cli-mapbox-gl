import Ember from 'ember';

const {
  Mixin,
  inject,
  computed,
  on
} = Ember;


export default Mixin.create({
  mapboxGl: inject.service('mapboxGl'),

  mapSettings: {
    style: "mapbox://styles/mapbox/dark-v8",
    lat: 52.520007,
    lng: 13.404954,
    zoom: 12,
    interactive: true,
    bearing: 0
  },

  setupMap: on('didInsertElement', function() {
    this.set('mapId', this.get('elementId'));

    this.get('mapboxGl').setupMap(
      this.get('mapId'),
      this.get('mapSettings')
    );
  }),

  map: computed('mapId', function() {
    return this.get('mapboxGl').maps[
      this.get('mapId')
    ];
  }),
});
