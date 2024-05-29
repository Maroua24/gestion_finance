import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const Get_All_Fac = createAsyncThunk('posts/getAllFac', async (thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;
    const url = "https://jsonplaceholder.typicode.com/posts"
    try{
        const res = await axios.get(url);
        return res.data;
    }catch(err){
        return rejectWithValue(err.message);
    }
});