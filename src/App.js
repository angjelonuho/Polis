import React from 'react';
import DayNight from './components/dayNightComponent';

import GenerateBuildings from './components/buildingsPlacesComponent';
import GoogleMapComp from './components/googleMapComponent';


function App() {

    return (
        <div className="App container-fluid">
            <DayNight /> 
             <GenerateBuildings />
            <GoogleMapComp /> 
        
        </div>

    );
}

export default App;
