import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import ClientReducer from './Client/ClientSlice'
import FactureServiceReducer from './FactureService/FactureServiceSlice'
import FactureVenteReducer from './FactureVente/FactureVenteSlice'
import FactureImpayeesReducer from './FactureImpayees/FactureImpayeesSlice'
import Client_VIP_Reducer from './ClientVIP/Client_VIP_Slice'
import PaimentReducer from './Paiement/PaiementSlice'
import authReducer from './Log_in/Log_in_Slice'
import AvoiresReducer from './Avoires/AvoiresSlice'
import UsersReducer from './Admin/AdminSlice'


const rootReducer = combineReducers({
    ClientList : ClientReducer,
    Client_VIP_List: Client_VIP_Reducer,
    FactureServiceList : FactureServiceReducer,
    FactureVenteList : FactureVenteReducer,
    FactureImpayeesList: FactureImpayeesReducer,
    PaimentList : PaimentReducer,
    authentication : authReducer,
    AvoiresReducerList : AvoiresReducer,
    UsersList:UsersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
