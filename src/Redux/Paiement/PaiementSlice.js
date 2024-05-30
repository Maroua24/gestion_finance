import { createSlice } from '@reduxjs/toolkit'
import {getAll} from '../API/GetAll'
import {addPaiement} from '../API/Paiement_API'

const initialState = {
    PaimentList:[],
    isLoading:false,
    error:null,
}

const PaimentSlice = createSlice({
    name:"Paiement",
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
                state.PaimentList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        builder
            .addCase(addPaiement.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addPaiement.fulfilled, (state) => {
                state.isLoading = false
                state.PaimentList=[]
            })
            .addCase(addPaiement.rejected,(state,action) => {
                state.isLoading=false
                state.PaimentList=[]
                state.error = action.error.message
            })
    }
})

export default PaimentSlice.reducer;