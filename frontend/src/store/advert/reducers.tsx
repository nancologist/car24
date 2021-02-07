import { Action } from 'redux'

interface StateType {
    foo: string;
}

const initialState = {
    foo: 'bar'
}

export const advertReducer = ( state = initialState, action: Action) => {
    switch (action.type) {
        case 'SAVE_ADVERT':
            
            break;

        case 'GET_ADVERTS':
        
            break;
    
        default:
            break;
    }
    return state;
}

export default advertReducer;
