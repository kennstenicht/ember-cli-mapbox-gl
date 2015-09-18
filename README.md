# Ember-cli-mapbox-gl

Ember CLI addon to integrate Mapbox GL and add a componentn mixin

## Installation

* `ember install ember-cli-mapbox-gl`


## Setup

// config/enviroment.js

changing contentSecurityPolicy:
* add `*.mapbox.com` to img-src and connect-src
* add `blob:` to child-src

```javascript
contentSecurityPolicy: {
	'img-src': "'self' data: *.mapbox.com",
	'child-src': "blob:",
	'connect-src': "'self' *.mapbox.com"
}

```

## Usage

Create a new Component: `ember g component mapbox-map`

```js
// app/component/mapbox-map

import Ember from 'ember';
//import mapbox-gl mixin
import MapboxGl from 'ember-cli-mapbox-gl/mixins/mapbox-gl';

export default Ember.Component.extend(MapboxGl, {
  // define default map settings
  mapSettings: {
    style: "mapbox://styles/mapbox/dark-v8",
    lat: 52.520007,
    lng: 13.404954,
    zoom: 12,
    interactive: true
  }
});
```