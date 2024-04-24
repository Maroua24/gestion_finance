import { createSlice } from '@reduxjs/toolkit'
import {addFactureVente} from '../API/FactureVenteAPI'
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
        // Add facture service
        builder
            .addCase(addFactureVente.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addFactureVente.fulfilled, (state,action) => {
                state.isLoading = false
                state.FactureVenteList=[]
            })
            .addCase(addFactureVente.rejected,(state,action) => {
                state.isLoading=false
                state.FactureVenteList=[]
                state.error = action.error.message
            })
    }
})

export default FactureVenteSlice.reducer;