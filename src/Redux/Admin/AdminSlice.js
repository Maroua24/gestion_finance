import { createSlice } from '@reduxjs/toolkit'
import {addClient} from '../API/ClientAPI'
import {AddUser} from '../API/Admin_API'
import {getAll} from '../API/GetAll'
const initialState = {
    UsersList:[],
    isLoading:false,
    error:null,
}

const UsersSlice = createSlice({
    name:"Users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Fetch users
        builder
        .addCase(getAll.pending, (state) => {
            state.isLoading=true;
            state.error=null;
        })
        .addCase(getAll.fulfilled, (state, action) => {
            state.UsersList = action.payload;
            state.isLoading=false;
            state.error=null;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.isLoading=false;
            state.error=action?.error?.message;
        })
        // Add a client
        builder
            .addCase(AddUser.pending, state => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(AddUser.fulfilled, (state) => {
                state.isLoading = false
                state.UsersList=[]
            })
            .addCase(AddUser.rejected,(state,action) => {
                state.isLoading=false
                state.UsersList=[]
                state.error = action.error.message
            })
    }
})

export default UsersSlice.reducer;