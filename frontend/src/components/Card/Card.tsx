import React from 'react';
import ICar from '../../models/Car';
import './Card.css';
import dummyCar from '../../assets/images/dummy-car.png';

const Card = (props: CardProps) => {
    const {name, power} = props.car;
    return (
    <div className={'card'}>
        <div className={'card__img-wrapper'}>
            <img src={dummyCar} alt="Dummy Car"/>
        </div>
        <div className={'card__title'}>
            <h3>{name}</h3>
        </div>
        <div className={'card__price'}>
            <span>1500 €</span>
        </div>
        <div className={'card__attrs'}>
            <span>{power} PS</span>
        </div>
    </div>)
}

type CardProps = { car: ICar };

export default Card;

// Card: 236 x 333
// Img: 216 x 165
