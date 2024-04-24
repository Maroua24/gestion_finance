import { configureStore } from '@reduxjs/toolkit'
import ClientReducer from './Client/ClientSlice'
import FactureServiceReducer from './FactureService/FactureServiceSlice'
import FactureVenteReducer from './FactureVente/FactureVenteSlice'

export const store = configureStore({
  reducer: {
    ClientList : ClientReducer,
    FactureServiceList : FactureServiceReducer,
    FactureVenteList : FactureVenteReducer,
  },
})
