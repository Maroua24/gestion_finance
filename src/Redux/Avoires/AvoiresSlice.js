import {getAll} from '../API/GetAll'
import { createSlice } from '@reduxjs/toolkit'
import {UpdateFacture} from '../API/Avoires_API'

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
                state.AvoiresList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        // update invoice
        builder
            .addCase(UpdateFacture.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(UpdateFacture.fulfilled, (state) => {
                state.isLoading = false
                state.AvoiresList=[]
            })
            .addCase(UpdateFacture.rejected,(state,action) => {
                state.isLoading=false
                state.AvoiresList=[]
                state.error = action.error.message
            })
    }
})

export default AvoiresSlice.reducer;