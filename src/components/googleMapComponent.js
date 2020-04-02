import React, {Component} from 'react';
import {getPosition} from './weatherLocationComponent';

import '../css/App.css';
import '../css/responsiveHeader.css';
import '../css/responsiveBody.css';
import '../css/skeleton.css';

const mapStyle = require('../mapStyles/GoogleMapStyles.json');

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class GoogleMapComp extends Component {

  state = {
    latitude : undefined,
    longitude : undefined
  }

  componentDidMount(){
    getPosition()
    .then((position) => {
      this.setState({
        latitude :position.coords.latitude, 
        longitude : position.coords.longitude})
    })
    .catch((err) => {
      this.setState({ errorMessage: err.message });
    });
    this.renderMap();
  }

  renderMap = () => {
    loadScript(`/maps/api/js?key=${API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  //map fucntion
  initMap = () => {
    let he = this.state.latitude;
    let hi = this.state.longitude;
    new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: he, lng: hi},
      zoom: 14,
      styles: mapStyle,
    }); 
  
  }

  render() {
    return (
      <div className="container-fluid mapDiv rounded" id="map"></div>
    )
  }

}

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
  
}
export default GoogleMapComp;