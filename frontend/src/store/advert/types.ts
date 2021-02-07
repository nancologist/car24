import Car from '../../models/Car';

export const SAVE_ADVERT = 'SAVE_ADVERT';
export const GET_ADVERTS = 'GET_ADVERTS';

interface SaveAdvert {
    type: typeof SAVE_ADVERT;
    car: Car;
}

interface GetAdverts {
    type: typeof GET_ADVERTS;
    cars: Car[];
}

export type AdvertActionTypes = SaveAdvert | GetAdverts;