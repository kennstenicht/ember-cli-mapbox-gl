import Ember from 'ember';

const {
  Service
} = Ember;

export default Service.extend({
  maps: {},

  setupMap: function(mapId, mapSettings) {
    let maps = this.get('maps');

    if(maps[mapId]){
      return;
    }

    maps[mapId] = new mapboxgl.Map({
      container: mapId,
      style: mapSettings.style,
      center: [mapSettings.lng, mapSettings.lat],
      zoom: mapSettings.zoom,
      interactive: mapSettings.interactive,
      bearing: mapSettings.bearing,
      minZoom: mapSettings.minZoom,
      maxZoom: mapSettings.maxZoom,
      maxBounds: mapSettings.maxBounds
    });

    this.set('maps', maps);
  }
});
