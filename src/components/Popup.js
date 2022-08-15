import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='overlay'>
                <div className='popup'>
                    <div className="popup-top">
                        <h1>Mortgage Calculator</h1>
                        <button className="popup-close-button" onClick={this.props.closePopup}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Popup;