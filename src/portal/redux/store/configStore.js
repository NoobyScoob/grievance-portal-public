import { createStore, combineReducers } from 'redux';
import profileReducer from './../reducers/profile';

export default () => {
    const store = createStore(
        combineReducers({
            profile: profileReducer
        })
    );
    return store;
};