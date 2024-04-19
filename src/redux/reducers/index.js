import { combineReducers } from '@reduxjs/toolkit'
import profile from './profile'
import token from './token'


export default combineReducers({
  profile,
  token
})