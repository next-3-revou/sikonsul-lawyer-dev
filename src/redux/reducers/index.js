import { combineReducers } from '@reduxjs/toolkit'
import profile from './profile'
import token from './token'
import dataReducer from './dataReducer'


export default combineReducers({
  profile,
  token,
  dataReducer
})