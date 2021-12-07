import React, {useEffect, useRef, useState} from "react";
import './dashboard.css'
import mapboxgl from 'mapbox-gl';

export const AdminDashboardContent = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZ2huYW5paSIsImEiOiJja2VxeGtlaWYwcWNnMndwNjZ2ZGRpbm1kIn0.WanamzZA3Vrg3_ikb8-6BQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(73.068265);
  const [lat, setLat] = useState(33.677718);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
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
