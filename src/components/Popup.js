import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deposit: '',
            propertyValue: '',
            interestRate: '',
            mortgageTerm: '',
            monthlyRepayments: '',
            loan: '',
        };

        this.handleDepositChange = this.handleDepositChange.bind(this);
        this.handlePropertyValueChange = this.handlePropertyValueChange.bind(this);
        this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
        this.handleMortgageTermChange = this.handleMortgageTermChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDepositChange(event) {
        const value = event.target.value;

        if (!isNaN(value) && value >= 0) {
            this.setState({ deposit: value });
        }
    }

    handlePropertyValueChange(event) {
        const value = event.target.value;

        if (!isNaN(value) && value >= 0) {
            this.setState({ propertyValue: value });
        }
    }

    handleInterestRateChange(event) {
        const value = event.target.value;

        if (!isNaN(value) && value >= 0 && value <= 100) {
            this.setState({ interestRate: value });
        }
    }

    handleMortgageTermChange(event) {
        const value = event.target.value;

        if (!isNaN(value) && value >= 0 && value <= 45 && Number.isInteger(Number(value))) {
            this.setState({ mortgageTerm: value });
        }
    }

    handleSubmit(event) {
        const { deposit, propertyValue, interestRate, mortgageTerm } = this.state;
        const loan = propertyValue - deposit;

        if (loan <= 0 || !deposit || !propertyValue || !interestRate || !mortgageTerm) {
            this.setState({
                monthlyRepayments: 0,
                loan: 0,
            });
        } else {
            const monthlyRepayments = (interestRate / 100 / 12) / (1 - Math.pow((1 + interestRate / 100 / 12), (-mortgageTerm * 12))) * loan;
            this.setState({
                monthlyRepayments: Number(monthlyRepayments).toFixed(2),
                loan: Number(loan).toFixed(2),
            });
        }
    }

    render() {
        return (
            <div className='overlay'>
                <div className='popup'>
                    <div className="popup-top">
                        <h1>Mortgage Calculator</h1>
                        <button className="popup-close-button" onClick={this.props.closePopup}>X</button>
                    </div>
                    <div className="popup-form">
                        <form>
                            <label>
                                Deposit:
                                <input type="text" value={this.state.deposit} onChange={this.handleDepositChange} />
                            </label>
                            <label>
                                Property Value:
                                <input type="text" value={this.state.propertyValue} onChange={this.handlePropertyValueChange} />
                            </label>
                            <label>
                                Interest Rate:
                                <input type="text" value={this.state.interestRate} onChange={this.handleInterestRateChange} />
                            </label>
                            <label>
                                Mortgage Term:
                                <input type="text" value={this.state.mortgageTerm} onChange={this.handleMortgageTermChange} />
                            </label>
                        </form>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <p>
                            Monthly Repayments: {this.state.monthlyRepayments}
                            <br></br>
                            Loan: {this.state.loan}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Popup;