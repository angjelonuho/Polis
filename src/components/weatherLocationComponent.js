import React from 'react';
import SunriseIcon from '../img/icons/sunrise.svg';
import SunsetIcon from '../img/icons/sunset.svg';
import DropletIcon from '../img/icons/droplet.svg';
import WindIcon from '../img/icons/wind.svg';

const API_KEY = '67b51a761ab09981501241df566ec5c4';

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
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
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
            <div className="col-auto mr-auto">
              <h2 className="tempName tempNamesm text-nowrap"><img className="sunImg" src={SunriseIcon} alt="sunrise" /> {sunrise}</h2>
            </div>
            <div className="col-auto mr-auto">
              <h2 className="tempName tempNamesm text-nowrap"><img className="sunImg" src={SunsetIcon} alt="sunset" /> {sunset}</h2>
            </div>
          </div>
          <div className="row weatherrow justify-content-md-center">
          <div className="col-md-auto">
              <h2 className="tempName ">{temperatureC}&deg;C</h2>
              <h2 className="tempNamemd">{tempdesc}</h2>
            </div>
          </div>

        
          <div className="row weatherrow">
            <div className="col-auto mr-auto">
              <h2 className="tempNamesm  text-nowrap"><img className="sunImg sunImg" src={DropletIcon} alt="sunrise" />{droplet}%</h2>
            </div>
            <div className="col-auto mr-auto">
              <h2 className="tempNamesm text-nowrap"><img className="sunImg sunImg" src={WindIcon} alt="sunrise" />{wind} km/h</h2>
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
      );
    }
    else {
      return (
        <div>Loading...</div>
      )
    }
  }

}

export default LocationWeather;

