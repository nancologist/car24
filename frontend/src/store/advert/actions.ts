import Car from '../../models/Car';
import { AdvertActionTypes, SAVE_ADVERT, GET_ADVERTS } from './types'

export function saveAdvert(newCar: Car): AdvertActionTypes {

    // Async Function Sending Ajax Request...
    // using Thunk...

    return {
        type: SAVE_ADVERT,
        car: newCar
    }
}

export function getAdverts(): AdvertActionTypes {

    // Get Cars from Backend, Ajax Req.
    // using thunk...

    return {
        type: GET_ADVERTS,
        cars
    }
}