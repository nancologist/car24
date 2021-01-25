import React from 'react';
import ICar from '../../models/Car';

const Card = (props: CardProps) => {
    const car = props.car;
    return (
    <div>
        <strong>Name: </strong>{car.name} -
        <strong> Power: </strong>{car.power} HP
    </div>)
}

type CardProps = { car: ICar };

export default Card;
