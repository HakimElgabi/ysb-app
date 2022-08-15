import logo from './YBS-Logo.svg';
import React, { Component } from 'react';
import Popup from './components/Popup';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="main-header-group">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className="placeholder-navigation">
                            <ul className="navigation-list">
                                <li className="navigation-item">Placeholder 1</li>
                                <li className="navigation-item">Placeholder 2</li>
                                <li className="navigation-item">Placeholder 3</li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="content">
                    <div className="info-box">
                        <h3>Mortgage Calculator</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium metus nisl, vitae
                            venenatis massa consequat ac.</p>
                        <button onClick={this.togglePopup.bind(this)}>Mortgage Calculator</button>
                    </div>
                </div>
                {this.state.showPopup &&
                    <Popup
                        closePopup={this.togglePopup.bind(this)}
                    />
                }
            </div>
        );
    }
}

export default App;
