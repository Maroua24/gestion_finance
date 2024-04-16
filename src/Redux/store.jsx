import { configureStore } from '@reduxjs/toolkit'
import ClientReducer from './Client/ClientSlice'


export const store = configureStore({
  reducer: {
    ClientList : ClientReducer,
  },
})
