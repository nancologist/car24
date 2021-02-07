import Car from '../../models/Car';
import { AdvertActionTypes, SAVE_ADVERT, GET_ADVERTS } from './types'

export function saveAdvertStart(newCar: Car): AdvertActionTypes {
    return {
        type: SAVE_ADVERT,
        car: newCar
    }
}

// TODO: saveAdvertSuccess() { ... }

// TODO: saveAdvertFail() { ... }

export function getAdverts(fetchedCars: Car[]): AdvertActionTypes {
    return {
        type: GET_ADVERTS,
        adverts: fetchedCars
    }
}