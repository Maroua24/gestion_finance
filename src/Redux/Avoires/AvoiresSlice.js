import {getAll} from '../API/GetAll'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    AvoiresList:[],
    isLoading:false,
    error:null,
}

const AvoiresSlice = createSlice({
    name:"Avoires",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch Avoires
        builder
            .addCase(getAll.pending, (state) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.ClientsList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
    }
})

export default AvoiresSlice.reducer;