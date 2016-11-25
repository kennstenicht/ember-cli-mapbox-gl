# Ember-cli-mapbox-gl

Ember CLI addon to integrate Mapbox GL and add a componentn mixin


## Installation

```
ember install ember-cli-mapbox-gl
```

## Setup

changing contentSecurityPolicy:
* add `*.mapbox.com` to img-src and connect-src
* add `blob:` to child-src

```js
// config/enviroment.js
contentSecurityPolicy: {
  'img-src': "'self' data: *.mapbox.com",
  'child-src': "blob:",
  'connect-src': "'self' *.mapbox.com"
}
```


Add your Mapbox access token to config/environment.js:

```js
// config/environment.js
mapbox: {
  accessToken: 'accessToken',
}
```

## Usage

Run installer: `ember g ember-cli-mapbox-gl`

Create a new Component: `ember g component mapbox-map`

```js
// app/component/mapbox-map

import Ember from 'ember';
import MapboxGl from 'ember-cli-mapbox-gl/mixins/mapbox-gl';

export default Ember.Component.extend(MapboxGl, {
  // define default map settings
  mapSettings: {
    style: "mapbox://styles/mapbox/streets-v9",
    lat: 52.520007,
    lng: 13.404954,
    zoom: 12,
    interactive: true
  }

  useMapboxFunctions: function() {
    // this.get('map') returns the map object
    this.get('map').getZoom();
  }
});
```
