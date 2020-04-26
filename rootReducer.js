import React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'
import authenticate_Reducer from './Services/Authentication/reducer'

const reducer= combineReducers({authenticate_Reducer})

const store= createStore(reducer,applyMiddleware(thunk))

export default store;