import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const Get_Fac = ('posts/getFacById', async (id) => {
    //const { rejectWithValue } = thunkAPI;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
        const res = await axios.get(url);
        return res.data;
        console.log("##################" + res.date)
    } catch (err) {
        //  return rejectWithValue(err.message);
        return err.message;
    }
});

