import { createSlice } from '@reduxjs/toolkit'
import {addClient, getAllClients} from '../API/ClientAPI'

const initialState = {
    ClientsList:[],
    isLoading:false,
    error:null,
    isSuccess:'',
}

const ClientSlice = createSlice({
    name:"Client",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch clients
        builder
            .addCase(getAllClients.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAllClients.fulfilled, (state, action) => {
                state.ClientsList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAllClients.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
        // Add clients
        builder
            .addCase(addClient.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(addClient.fulfilled, (state,action) => {
                state.isLoading = false
                state.ClientsList=[]
                state.isSuccess=action.payload
            })
            .addCase(addClient.rejected,(state,action) => {
                state.isLoading=false
                state.ClientsList=[]
                state.error = action.error.message
            })
    }
})

export default ClientSlice.reducer;