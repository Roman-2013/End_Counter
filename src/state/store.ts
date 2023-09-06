import {combineReducers, createStore} from 'redux';
import {variant1Reducer} from './Variant1-reducer';


const rootReducer=combineReducers({
    variant1:variant1Reducer
})

export const store=createStore(rootReducer)

export type AppRootStateType=ReturnType<typeof rootReducer>