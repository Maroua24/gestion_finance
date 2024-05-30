import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getAllCommandes = createAsyncThunk('posts/getAllCommand', async (thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    const url = "https://jsonplaceholder.typicode.com/posts"
    try{
        const res = await axios.get(url);
        return res.data;
    }catch(err){
        return rejectWithValue(err.message);
    }
});