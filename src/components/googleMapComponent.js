import React, {Component} from 'react';
import {getPosition} from './weatherLocationComponent';

const mapStyle = require('../mapStyles/GoogleMapStyles.json');

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
    loadScript("/maps/api/js?key=AIzaSyD8k5qUSvlHzgITZ4o1icvEgpMromP4s2c&callback=initMap")
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