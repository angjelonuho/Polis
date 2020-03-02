import React from 'react';
import './css/App.css';
import DayNight from './components/dayNightComponent';
import GenerateBuildings from './components/buildings';
import GoogleMapComponentWithMarker from './components/GoogleMapWithMarker'


// Some default styles
const styles = {
    width: '100%',
    height: '536px'
  }

function App() {
    return (
        <div className="App container-fluid">
            <DayNight/>
            <GenerateBuildings/>
            <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD8k5qUSvlHzgITZ4o1icvEgpMromP4s2c"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
            
        </div>
        


    );
}

export default App;
