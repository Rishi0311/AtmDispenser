import React from 'react';
import Dispenser from '../Dispenser';

class GetAmount extends React.Component {
    constructor(props) {
        super(props)

        this.amountRef = React.createRef();
        this.state = {
            value: ''
        }
    }

    calculate = (e) => {
        e.preventDefault();
        this.setState({
            value: this.amountRef.current.value
        })
        //alert('Value passed:',this.state.value);
    }


    render() {
        return (
            <div>

                <div className="jumbotron text-center bg-primary">
                    <h1 style={{ align: "center" }}>ATM Money Dispenser</h1>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>Enter Amount</h3>
                        <input className="input-group mb-3" type="text" placeholder="0" ref={this.amountRef}></input>
                        <button className="btn btn-primary" onClick={this.calculate}>Click To Get Money</button>
                        <h3>Value Entered: {this.state.value}</h3>

                    </div>
                    <div className="col">
                        <Dispenser value={this.state.value} />
                    </div>
                </div>
            </div>

        );
    }


}

export default GetAmount;
