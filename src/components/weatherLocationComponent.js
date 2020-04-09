import React from 'react';
import SunriseIcon from '../img/icons/sunrise.svg';
import SunsetIcon from '../img/icons/sunset.svg';
import DropletIcon from '../img/icons/droplet.svg';
import WindIcon from '../img/icons/wind.svg';

import '../css/skeleton.css';
import '../css/App.css';
import '../css/responsiveHeader.css';
import '../css/responsiveBody.css';



const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//ASK user for geographic position
export function getPosition(){
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

class LocationWeather extends React.Component {

  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    temperatureCmin: undefined,
    temperatureCmax: undefined,
    temperatureCfeels: undefined,
    tempdesc: undefined,
    sunrise: undefined,
    sunset: undefined,
    droplet: undefined,
    wind: undefined,
    errorMessage: undefined
  }

  getWeather = async (latitude, longitude) => {
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    let ddate = new Date(data.sys.sunrise * 1000);
    let dnate = new Date(data.sys.sunset * 1000);

    let sunsetOrsunrise = (Ddate) => {

      let DdateHours = Ddate.getHours()
      let DdateMinutes = Ddate.getMinutes()
      let ampm = DdateHours < 12 ? 'am' : 'pm'

      return (
        DdateHours + ':' + DdateMinutes + ampm
      )

    }

    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      temperatureCmin: Math.round(data.main.temp_min),
      temperatureCmax: Math.round(data.main.temp_max),
      temperatureCfeels: Math.round(data.main.feels_like),
      tempdesc: data.weather[0].description,
      sunrise: sunsetOrsunrise(ddate),
      sunset: sunsetOrsunrise(dnate),
      droplet: data.main.humidity,
      wind: data.wind.speed



    })
  }

  componentDidMount() {
    getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });

  }


  render() {
    const { city, temperatureC, temperatureCmin, temperatureCmax, temperatureCfeels, tempdesc, sunrise, sunset, droplet, wind } = this.state;
    if (city) {
      return (
        <div className="container cityNameInfo location">
          <div className="row weatherrow ">
            <h2 className="cityName">{city}</h2>
            <p className="clock-label">City</p>
          </div>
          <div className="row weatherrow">
            <div className="col-auto mr-auto inlineColums">
              <img className="sunImg" src={SunriseIcon} alt="sunrise" />
              <h2 className="tempName tempNamesm text-nowrap">{sunrise}</h2>
            </div>
            <div className="col-auto mr-auto inlineColums">
              <img className="sunImg" src={SunsetIcon} alt="sunset" />
              <h2 className="tempName tempNamesm text-nowrap">{sunset}</h2>
            </div>
          </div>
          <div className="row weatherrow justify-content-md-center">
          <div className="col-md-auto inlineColums">
              <h2 className="tempName">{temperatureC}</h2><h2>&deg;C</h2>
            </div>
          </div>
          <div className="row weatherrow justify-content-md-center">
          <div className="col-md-auto inlineColums">
             <h2 className="tempNamemd">{tempdesc}</h2>
             </div>
          </div>

        
          <div className="row weatherrow">
            <div className="col-auto mr-auto inlineColums">
            <img className="sunImg sunImg" src={DropletIcon} alt="sunrise" />
              <h2 className="tempNamesm  text-nowrap">{droplet}</h2><h2 className="tempNamesm  text-nowrap">%</h2>
            </div>
            <div className="col-auto mr-auto inlineColums">
            <img className="sunImg sunImg" src={WindIcon} alt="sunrise" />
              <h2 className="tempNamesm text-nowrap">{wind}</h2><h2 className="tempNamesm text-nowrap">km/h</h2>
            </div>
          </div>
          <div className="row weatherrow">
            <div className="col-auto mr-auto">
              <h2 className="tempNamesm">{temperatureCmin} / {temperatureCmax}&deg;C</h2>
              <p className="temp-label">Min / Max</p>
            </div>
            <div className="col-auto mr-auto">
              <h2 className="tempNamesm">{temperatureCfeels}&deg;C</h2>
              <p className="temp-label">Feels like</p>
            </div>
          </div>
          {/* <h2 className="tempName">{temperatureF} &deg;F </h2> */}
        </div>
      
      )
      }else {
        return (
          <div className="container  weatherSkeleton">
            <div className="row datagrid__row">
              <div className="col-md-12">
                <div className="datagrid__loader" ></div>
              </div>
              </div>
              <div className="row datagrid__row">
              <div className="col-md-6">
                <div className="datagrid__loader second" ></div>
              </div>
              <div className="col-md-6">
                <div className="datagrid__loader second" ></div>
              </div>
              </div>

            <div className="row datagrid__row">
              <div className="col-md-4 offset-md-4">
                <div className="datagrid__loader third" ></div>
              </div>
            </div>

            <div className="row datagrid__row">
              <div className="col-md-12">
                <div className="datagrid__loader second" ></div>
              </div>
              </div>
              <div className="row datagrid__row">
              <div className="col-md-12">
                <div className="datagrid__loader second" ></div>
              </div>
              </div>
              <div className="row datagrid__row">
              <div className="col-md-12">
                <div className="datagrid__loader second" ></div>
              </div>
              </div>
            
          </div>
        )
      }
  }

}

export default LocationWeather;

