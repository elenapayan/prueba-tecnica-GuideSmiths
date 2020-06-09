import React from 'react';
import { Link } from 'react-router-dom';

function PhoneCard(props) {
    const route = `/phone/${props.id}`;
    const image = `http://localhost:3001/images/${props.image}`;
    const { name, manufacturer, price, color } = props;
    return (

        <li>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{manufacturer}</p>
            <p>Color: {color}</p>
            <p>Price: {price}€</p>
            <Link to={route}>More details</Link>
        </li>
    )
}


export default PhoneCard;