import React, { Component } from 'react';

import '../css/App.css';
import '../css/responsiveHeader.css';
import '../css/responsiveBody.css';
import '../css/skeleton.css';


class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            result: 0,

            lastupt: undefined,

            fromCurrency: "USD",
            toCurrency: "EUR",

            currencies: [],
        };

    }

    componentDidMount() {
        this.fetchDropdownCurr();
        this.convertFetch();
    };

    componentDidUpdate(prevProps, prevState) {

        if (this.state.amount !== prevState.amount || this.state.fromCurrency !== prevState.fromCurrency || this.state.toCurrency !== prevState.toCurrency) {
            this.convertFetch();
        };
    };

    fetchDropdownCurr = async () => {

        await fetch("/latest")

            .then(
                response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(data => {
                        const currencyAr = ["EUR"]
                        for (const key in data.rates) {
                            currencyAr.push(key)
                        }
                        this.setState({ currencies: currencyAr.sort() })
                    })
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    convertFetch = async () => {

        await fetch(`/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
            .then(
                response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(data => {
                        let lastUpdatedRates = data.date;
                        let rates = data.rates[this.state.toCurrency];
                        let result = this.state.amount * rates;
                        this.setState({ 
                            result: result.toFixed(2) ,
                            lastupt: lastUpdatedRates
                        
                        });
                    })
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    };

    handleInputChange = event => {

        if (event.target.name === 'from') {
            this.setState({ fromCurrency: event.target.value });
        }
        if (event.target.name === 'to') {
            this.setState({ toCurrency: event.target.value });
        }
        if (event.target.name === 'amount') {
            this.setState({ amount: event.target.value });
        }

    };

    render() {

        let dropdownItems = this.state.currencies.map((curr) =>
            <option key={curr} value={curr}>{curr}</option>
        );

        return (

            <div className="container cityNameInfo exchange">
                <div className="row p-3">
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/KDInXCxJOL9gb5cwgR/giphy.gif" className="moneyGif" alt="E" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/3gVqQCCJXP6N7FfRWo/giphy.gif" className="moneyGif" alt="X" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/2wV4aE4oo71xKirjqv/giphy.gif" className="moneyGif" alt="C" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/ZeKFkPdbSIxJbtkbRA/giphy.gif" className="moneyGif" alt="H" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/ZbBGqbg4RgjGc3z75K/giphy.gif" className="moneyGif" alt="A" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/XgSMToclOmnuXd7Ho4/giphy.gif" className="moneyGif" alt="N" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/ln0TUwW3MlFahfSF5J/giphy.gif" className="moneyGif" alt="G" /></div>
                    <div className="col moneyCol"><img src="https://media.giphy.com/media/fLpOPkumtoO0s4UkSi/giphy.gif" className="moneyGif" alt="E" /></div>
                </div>
                <div className="row exhInpRes">
                    <form>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="amount"></label>
                                <input type="text" className="form-control" autoComplete="off" name="amount" value={this.state.amount} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="from" className="lblexh">From</label>
                                <select className="form-control" name="from" as="select" value={this.state.fromCurrency} onChange={this.handleInputChange}>
                                    {dropdownItems}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="result"></label>
                                <input type="text" className="form-control" placeholder="?" value={this.state.result} onChange={this.handleInputChange} readOnly />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="to" className="lblexh">To</label>
                                <select className="form-control" name="to" as="select" value={this.state.toCurrency} onChange={this.handleInputChange}>
                                    {dropdownItems}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                        <p className="temp-label">Last Updated  <span className="temp-labelDt">{this.state.lastupt}</span></p>
                        </div>
                    </form>

                </div>
            </div>
        )
    }

}

export default Exchange;