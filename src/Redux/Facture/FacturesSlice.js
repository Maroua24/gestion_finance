import { createSlice } from '@reduxjs/toolkit'
import {addFact} from '../API/Facture_API'

const initialState = {
    FactureList:[],
    isLoading:false,
    error:null,
}

const FactureSlice = createSlice({
    name:"Facture",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch an invoice
        builder
            .addCase(Get_Fac.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(Get_Fac.fulfilled, (state, action) => {
                state.FactureList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(Get_Fac.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        //Add an invoice
        builder
        .addCase(addFact.pending, state => {
            state.isLoading = true
            state.error = ''
        })
        .addCase(addFact.fulfilled, (state) => {
            state.isLoading = false
            state.FactureList=[]
        })
        .addCase(addFact.rejected,(state,action) => {
            state.isLoading=false
            state.FactureList=[]
            state.error = action.error.message
        })
    }
})

export default FactureSlice.reducer;