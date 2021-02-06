import { Action } from 'redux'

// ACTIONS +++++++++++++++

// Types:
export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

interface IncreaseCountAction {
    type: typeof INCREASE_COUNT;
}

interface DecreaseCountAction {
    type: typeof DECREASE_COUNT;
}

type CountActionTypes = IncreaseCountAction | DecreaseCountAction;

// Action Creators:

export function increaseCount(/* Payload here */) {
    return {
        type: INCREASE_COUNT
    };
}

export function decreaseCount(/* Payload here */) {
    return {
        type: DECREASE_COUNT
    };
}

// ++++++++++++++++++++++


// REDUCER --------------------------------
export interface CountState {
    count: number;
}

const initialState = { count: 5 }

export function countReducer(
    state = initialState,
    action: CountActionTypes    
) {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        
        case DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
    
        default:
            return state;
    }    
}

// ----------------------------------------