import React from 'react';
import LocationWeather from './weatherAndLocation';
import Exchange from './exchangeComponent';



export default class DayNight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      time: new Date().toLocaleString()
    };

  }

  toggleDay() {
    return (
      <div className="container-fluid dayBack">
        <div className="sun"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    )
  }
  toggleNight() {
    return (
      <div className="container-fluid nightBack">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="moon"></div>
      </div>
    )
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {

    let days = new Date();
    let weekday = new Array(7);
    weekday[0] = "SU";
    weekday[1] = "MO";
    weekday[2] = "TU";
    weekday[3] = "WE";
    weekday[4] = "TH";
    weekday[5] = "FR";
    weekday[6] = "SA";

    this.setState({
      day: weekday[days.getDay()],
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()

    });
  }

  clock() {
    return (
      <div className="clock-container">
        <div className="clock-col">
          <p className="display-4 App-clock ">{this.state.day}</p>
          <p className="clock-label">Day</p>
        </div>
        <div className="clock-col">
          <p className="display-4 App-clock">{this.state.hours}</p>
          <p className="clock-label">Hours</p>
        </div>
        <div className="clock-col">
          <p className="display-4 App-clock">{this.state.minutes}</p>
          <p className="clock-label">Minutes</p>
        </div>
        <div className="clock-col">
          <p className="display-4 App-clock">{this.state.seconds}</p>
          <p className="clock-label">Seconds</p>
        </div>
      </div>
    )

  }

  render() {
    if (this.state.hours < 18 && this.state.hours > 6) {
      return (

        <div>
          <div className="container leftside">
            <div className="row">
              <div className="col flex-grow-0">
                {this.clock()}
              </div>
              <div className="col-auto">
                <LocationWeather />
              </div>
              <div className="col-auto">
                <Exchange />
              </div>
            </div>
          </div>
          <this.toggleDay />
        </div>
      );
    } else {
      return (
        <div>
          <div className="container leftside">
            <div className="row">
              <div className="col flex-grow-0">
                {this.clock()}
              </div>
              <div className="col-auto">
                <LocationWeather />
              </div>
              <div className="col-auto">
                <Exchange />
              </div>
            </div>
          </div>
          <this.toggleNight />
        </div>
      );
    }
  }
}

