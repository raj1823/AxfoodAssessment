import React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'
import authentication_Reducer from './Services/Authentication/reducer'

const reducer= combineReducers({authentication_Reducer})

const store= createStore(reducer,applyMiddleware(thunk))

export default store;