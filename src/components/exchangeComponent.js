import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';




class Exchange extends Component {

    state = {

        amount: 1,
        result: 0,

        fromCurrency: "USD",
        toCurrency: "EUR",

        currencies: [],

    };

    componentDidMount() {
        fetch("/latest")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const currencyAr = ["EUR"]
                for (const key in data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });

        this.convertHandler(); //to initialize value before load 

    };

    convertHandler = () => {

        fetch(`/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const result = this.state.amount * (data.rates[this.state.toCurrency]);
                this.setState({ result: result.toFixed(2) })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });

    };

    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value });
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value });
        }
        this.convertHandler();
        
    };

    handleChange = (event) => {
        this.setState({amount: event.target.value});
        this.convertHandler();
    };


    render() {

        let dropdownItems = this.state.currencies.map((curr) =>
            <option key={curr} value={curr}>{curr}</option>
        );

        return (

            <div className="container cityNameInfo">
                <div className="row p-3">
                    <h2 className="ttlexh">Exchange rate</h2>
                </div>
                <div className="row p-3">
                    <Form >
                        <Form.Row>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label> </Form.Label>
                                <Form.Control autoComplete="off" name="amount" value={this.state.amount}  onChange={event => this.handleChange(event)} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label className="lblexh">From</Form.Label>
                                <Form.Control name="from" as="select" value={this.state.fromCurrency}  onChange={event => this.selectHandler(event)}>
                                    {dropdownItems}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label> </Form.Label>
                                <Form.Control placeholder="?" value={this.state.result} onChange={event => this.handleChange(event)} readOnly/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label className="lblexh">To</Form.Label>
                                <Form.Control name="to" as="select"  value={this.state.toCurrency} onChange={event => this.selectHandler(event)}>
                                    {dropdownItems}
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                    </Form>

                </div>

            </div>
        )
    }

}

export default Exchange;