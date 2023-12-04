import { createReducer } from '@reduxjs/toolkit';
import { signup, signin, authentication, signout } from '../actions/auth';

const initialState = {
  user: null
}
const usersReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(signup.fulfilled, (state, action) => {
    return {...state, user: action.payload}
  })
  .addCase(signin.fulfilled, (state, action) => {
    return {...state, user: action.payload}
  })
  .addCase(authentication.fulfilled, (state, action) => {
    return {...state, user: action.payload}
  })
  .addCase(signout.fulfilled, (state, action) => {
    return {...state, user: action.payload}
  })
})

export default usersReducer
