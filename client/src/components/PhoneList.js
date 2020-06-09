import React from 'react';
import '../sytlesheets/PhoneList.css';
import PhoneCard from './PhoneCard';

function PhoneList(props) {
    return (
        <ul className="list-container">{props.phones.map((phone, key) => {
            return (
                <PhoneCard
                    key={key}
                    id={phone.id}
                    name={phone.name}
                    manufacturer={phone.manufacturer}
                    color={phone.color}
                    price={phone.price}
                    image={phone.imageFileName}
                />
            )
        })}
        </ul>
    )
}


export default PhoneList;