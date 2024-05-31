import { createSlice } from '@reduxjs/toolkit'
import {addClientVIP} from '../API/Client_VIP_API'
import {getAll} from '../API/GetAll'

const initialState = {
    ClientsVIPList:[],
    isLoading:false,
    error:null,
}

const ClientVIPSlice = createSlice({
    name:"ClientVIP",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch clientVIPs
        builder
            .addCase(getAll.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.ClientsVIPList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        // Add clientVIPs
        builder
            .addCase(addClientVIP.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addClientVIP.fulfilled, (state,action) => {
                state.isLoading = false
                state.ClientsVIPList=[]
            })
            .addCase(addClientVIP.rejected,(state,action) => {
                state.isLoading=false
                state.ClientsVIPList=[]
                state.error = action.error.message
            })
    }
})

export default ClientVIPSlice.reducer;