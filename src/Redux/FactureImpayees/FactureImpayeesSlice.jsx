import { createSlice } from '@reduxjs/toolkit'
import {getAll} from '../API/GetAll'

const initialState = {
    FactureImpayeesList:[],
    isLoading:false,
    error:null,
}

const FactureImpayeesSlice = createSlice({
    name:"Facture_Impayees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch facture service
        builder
            .addCase(getAll.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.FactureImpayeesList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
    }
})

export default FactureImpayeesSlice.reducer;