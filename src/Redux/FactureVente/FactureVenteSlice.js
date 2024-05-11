import { createSlice } from '@reduxjs/toolkit'
import {getAll} from '../API/GetAll'

const initialState = {
    FactureVenteList:[],
    isLoading:false,
    error:null,
}

const FactureVenteSlice = createSlice({
    name:"Facture_Vente",
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
                state.FactureVenteList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
    }
})

export default FactureVenteSlice.reducer;