import React from 'react';
import { Link } from 'react-router-dom';

function PhoneDetails(props) {
    const { name, manufacturer, description, price, color, screen, processor, ram } = props.phone;
    const image = `http://localhost:3001/images/${props.phone.imageFileName}`;
    return (
        <React.Fragment>
            <div>
                <Link to="/"><span>&lt;</span> Volver</Link>
                <div>
                    <img src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <p>{manufacturer}</p>
                        <p>Color: {color}</p>
                        <p>Price: {price}€</p>
                        <p>Description: {description}</p>
                        <p>{screen}</p>
                        <p>{processor}</p>
                        <p>{ram}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default PhoneDetails;