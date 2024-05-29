import { createSlice } from '@reduxjs/toolkit'
import {Get_Fac} from '../API/Get_All_Fac'

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
    }
})

export default FactureSlice.reducer;