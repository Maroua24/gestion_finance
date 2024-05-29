import { createSlice } from '@reduxjs/toolkit'
import {Get_All_Fac} from '../API/Get_All_Fac'

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
        // Fetch factures
        builder
            .addCase(Get_All_Fac.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(Get_All_Fac.fulfilled, (state, action) => {
                state.FactureList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(Get_All_Fac.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
    }
})

export default FactureSlice.reducer;