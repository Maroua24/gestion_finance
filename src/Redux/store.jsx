import { configureStore } from '@reduxjs/toolkit'
import ClientReducer from './Client/ClientSlice'
import FactureServiceReducer from './FactureService/FactureServiceSlice'
import FactureVenteReducer from './FactureVente/FactureVenteSlice'
import FactureImpayeesReducer from './FactureImpayees/FactureImpayeesSlice'
import Client_VIP_Reducer from './ClientVIP/Client_VIP_Slice'
import PaimentReducer from './Paiement/PaiementSlice'
export const store = configureStore({
  reducer: {
    ClientList : ClientReducer,
    Client_VIP_List: Client_VIP_Reducer,
    FactureServiceList : FactureServiceReducer,
    FactureVenteList : FactureVenteReducer,
    FactureImpayeesList: FactureImpayeesReducer,
    PaimentList : PaimentReducer
  },
})
