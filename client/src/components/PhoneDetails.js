import React from 'react';
import { Link } from 'react-router-dom';
import '../sytlesheets/PhoneDetails.css';

function PhoneDetails(props) {
    const { name, manufacturer, description, price, color, screen, processor, ram } = props.phone;
    const image = `http://localhost:3001/images/${props.phone.imageFileName}`;
    return (
        <React.Fragment>
            <div className="details-container">
                <Link to="/"><span>&lt;</span> Back</Link>
                <div className="card-container">
                    <div className="image-container">
                        <img className="card-image" src={image} alt={name} />
                    </div>
                    <div className="info-container">
                        <h3>{name}</h3>
                        <p>{manufacturer}</p>
                        <p>Color: {color}</p>
                        <p>Price: {price}€</p>
                        <p>Description: {description}</p>
                        <p>Screen: {screen}</p>
                        <p>Processor: {processor}</p>
                        <p>Memory RAM: {ram}GB</p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default PhoneDetails;