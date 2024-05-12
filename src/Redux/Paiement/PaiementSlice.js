import { createSlice } from '@reduxjs/toolkit'
import {getAll} from '../API/GetAll'

const initialState = {
    PaimentList:[],
    isLoading:false,
    error:null,
}

const PaimentSlice = createSlice({
    name:"Paiment",
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
    }
})

export default PaimentSlice.reducer;