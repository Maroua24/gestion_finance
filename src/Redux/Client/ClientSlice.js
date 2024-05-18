import { createSlice } from '@reduxjs/toolkit'
import {addClient} from '../API/ClientAPI'
import {getAll} from '../API/GetAll'

const initialState = {
    ClientsList:[],
    isLoading:false,
    error:null,
}

const ClientSlice = createSlice({
    name:"Client",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch clients
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
        // Add a client
        builder
            .addCase(addClient.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addClient.fulfilled, (state) => {
                state.isLoading = false
                state.ClientsList=[]
            })
            .addCase(addClient.rejected,(state,action) => {
                state.isLoading=false
                state.ClientsList=[]
                state.error = action.error.message
            })
    }
})

export default ClientSlice.reducer;