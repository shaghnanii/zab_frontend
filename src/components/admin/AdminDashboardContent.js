import React, {useEffect, useRef, useState} from "react";
import './dashboard.css'
import mapboxgl from 'mapbox-gl';

export const AdminDashboardContent = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZ2huYW5paSIsImEiOiJja2VxeGtlaWYwcWNnMndwNjZ2ZGRpbm1kIn0.WanamzZA3Vrg3_ikb8-6BQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(73.068265);
  const [lat, setLat] = useState(33.677718);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
      // map.current = new mapboxgl.Map({
      //   container: mapContainer.current,
      //   style: 'mapbox://styles/mapbox/streets-v11',
      //   center: [lng, lat],
      //   zoom: zoom,
      // })
      // .addControl(new mapboxgl.NavigationControl()).scrollZoom.disable();

    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
    });
        // .addControl(new mapboxgl.NavigationControl()).scrollZoom.disable();

  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();
    const size = 200;
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

// When the layer is added to the map,
// get the rendering context for the map canvas.
      onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

// Call once before every frame where the icon will be used.
      render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

// Draw the outer circle.
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
        context.fill();

// Draw the inner circle.
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

// Update this image's data with data from the canvas.
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

// Continuously repaint the map, resulting
// in the smooth animation of the dot.
        map.triggerRepaint();

// Return `true` to let the map know that the image was updated.
        return true;
      }
    };

    map.on('load', () => {
      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

      map.addSource('dot-point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [lng, lat] // icon position [lng, lat]
              }
            }
          ]
        }
      });
      map.addLayer({
        'id': 'layer-with-pulsing-dot',
        'type': 'symbol',
        'source': 'dot-point',
        'layout': {
          'icon-image': 'pulsing-dot'
        }
      });
    });

  });

  return (
      <div>
        <div class="row">
          <div class="col-sm-3 col-xs-6">
            <div class="tile-stats tile-red">
              <div class="icon">
                <i class="entypo-users"></i>
              </div>
              <div
                  class="num"
                  data-start="0"
                  data-end="{{ stdCount }}"
                  data-postfix=""
                  data-duration="1500"
                  data-delay="0"
              >
                0
              </div>
              <h3>Registered Students</h3>
              <p>so far registered in FYP.</p>
            </div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="tile-stats tile-green">
              <div class="icon">
                <i class="entypo-chart-bar"></i>
              </div>
              <div
                  class="num"
                  data-start="0"
                  data-end="{{ supCount }}"
                  data-postfix=""
                  data-duration="1500"
                  data-delay="600"
              >
                0
              </div>
              <h3>Total Supervisors</h3>
              <p>Total number of available supervisors.</p>
            </div>
          </div>
          <div class="clear visible-xs"></div>
          <div class="col-sm-3 col-xs-6">
            <div class="tile-stats tile-aqua">
              <div class="icon">
                <i class="entypo-thumbs-up"></i>
              </div>
              <div
                  class="num"
                  data-start="0"
                  data-end="23"
                  data-postfix=""
                  data-duration="1500"
                  data-delay="1200"
              >
                0
              </div>
              <h3>Active Projects</h3>
              <p>Total number of active projects.</p>
            </div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="tile-stats tile-blue">
              <div class="icon">
                <i class="entypo-chart-line"></i>
              </div>
              <div
                  class="num"
                  data-start="0"
                  data-end="52"
                  data-postfix=""
                  data-duration="1500"
                  data-delay="1800"
              >
                0
              </div>
              <h3>Total Projects</h3>
              <p>Total projects count.</p>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
  );
};
