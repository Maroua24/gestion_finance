import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const Get_Fac = createAsyncThunk('posts/getFacById', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});
