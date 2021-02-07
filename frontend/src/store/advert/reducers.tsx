import {
    AdvertState,
    AdvertActionTypes,
    GET_ADVERTS
} from './types';

const initialState: AdvertState = {
    adverts: []
}

export function advertReducer( state = initialState, action: AdvertActionTypes ): AdvertState {
    switch (action.type) {
        case GET_ADVERTS:
        return {
            adverts: [ ...action.adverts ]
        }
            
        default:
            return state;
    }

}

export default advertReducer;
