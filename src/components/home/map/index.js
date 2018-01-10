import React, {Component} from "react";
import ReactMapboxGl from "react-mapbox-gl";

import "./style.sass";

const Mapbox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYXJ0YmVsaWNoZW5rbyIsImEiOiJjamJkczhoOWsxYm5oMndydDFscm9ua21zIn0.8uhruBRBucQZ_zKa5LW9OA",
  attributionControl: false,
  logoPosition: "bottom-right"
});


export default class Map extends Component {
  constructor() {
    super();
    this.className="map";
  }


  render() {

    return (
      <Mapbox
        style="mapbox://styles/mapbox/bright-v9"
        containerStyle={{
          height: "100vh"
        }}
        center={[37.652275, 55.723258]}
        zoom={[16]}>
      </Mapbox>
    );
  }
}
