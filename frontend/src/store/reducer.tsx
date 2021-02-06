import { Action } from 'redux'

interface StateType {
    foo: string;
}

const initialState = {
    foo: 'bar'
}

const reducer = ( state = initialState, action: Action) => {
    switch (action.type) {
        case '':
            
            break;
    
        default:
            break;
    }
    return state;
}

export default reducer;
