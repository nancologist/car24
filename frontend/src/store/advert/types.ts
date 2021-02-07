import Car from '../../models/Car';

export const SAVE_ADVERT = 'SAVE_ADVERT';
export const GET_ADVERTS = 'GET_ADVERTS';

export interface AdvertState {
    adverts: Car[];
}

interface SaveAdvert {
    type: typeof SAVE_ADVERT;
    car: Car;
}

// actually GetAdvertsSuccess
interface GetAdverts {
    type: typeof GET_ADVERTS;
    adverts: Car[];
}

export type AdvertActionTypes = SaveAdvert | GetAdverts;