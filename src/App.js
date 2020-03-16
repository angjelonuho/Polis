import React from 'react';
import './css/App.css';
import DayNight from './components/dayNightComponent';
import GenerateBuildings from './components/buildings';
import GoogleMapComp from './components/GoogleMapWithMarker';


function App() {
    return (
        <div className="App container-fluid">
            <DayNight/>
            <GenerateBuildings/>
            <GoogleMapComp/>
            
        </div>
        


    );
}

export default App;
