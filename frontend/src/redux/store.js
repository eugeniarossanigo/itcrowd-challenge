import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/auth'

export const store = configureStore({
  reducer: {
    usersReducer
  }
})
