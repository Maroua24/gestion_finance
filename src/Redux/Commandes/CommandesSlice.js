import { createSlice } from '@reduxjs/toolkit'
import {getAllCommandes} from '../API/Get_All_Commandes'
import { getAll } from '../API/GetAll'
const initialState = {
    CommandesList:[],
    isLoading:false,
    error:null,
}

const CommandeSlice = createSlice({
    name:"Commande",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch All Commandes
        builder
            .addCase(getAll.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.CommandesList = action.payload;
                state.isLoading=false;
                state.error=null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading=false;
                state.error=action?.error?.message;
            })
    }
})

export default CommandeSlice.reducer;