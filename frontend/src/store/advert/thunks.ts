import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AdvertState } from './types';
import { getAdverts } from './actions';

export function thunkGetAdverts(): ThunkAction<
    void,
    AdvertState,
    unknown,
    Action<string>
> {
    return async dispatch => {
        const resStream = await fetch('http://localhost:8080/cars/');
        const res = await resStream.json();
        const adverts = res.cars;
        dispatch(getAdverts(adverts))
    }
}