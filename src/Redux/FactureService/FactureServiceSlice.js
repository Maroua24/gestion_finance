import { createSlice } from '@reduxjs/toolkit'
import {addFactureService} from '../API/FactureServiceAPI'
import {getAll} from '../API/GetAll'

const initialState = {
    FactureServiceList:[],
    isLoading:false,
    error:null,
}

const FactureServiceSlice = createSlice({
    name:"Facture_Service",
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
                state.FactureServiceList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        // Add facture service
        builder
            .addCase(addFactureService.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addFactureService.fulfilled, (state,action) => {
                state.isLoading = false
                state.FactureServiceList=[]
            })
            .addCase(addFactureService.rejected,(state,action) => {
                state.isLoading=false
                state.FactureServiceList=[]
                state.error = action.error.message
            })
    }
})

export default FactureServiceSlice.reducer;