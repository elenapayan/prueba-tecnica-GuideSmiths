import React from 'react';
import { Link } from 'react-router-dom';
import '../sytlesheets/PhoneCard.css';

function PhoneCard(props) {
    const route = `/phone/${props.id}`;
    const image = `http://localhost:3001/images/${props.image}`;
    const { name, manufacturer, price } = props;
    return (
        <Link to={route}>
            <li className="phone-container">
                <div className="phone-container-image">
                    <img className="phone-image" src={image} alt={name} />
                </div>
                <div className="phone-container-text">
                    <h3 className="phone-title">{name}</h3>
                    <p className="phone-text">{manufacturer}</p>
                    <p className="phone-text"> Price: {price}€</p>

                </div>
            </li>
        </Link >
    )
}


export default PhoneCard;