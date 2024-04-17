import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";



// export const getAllClients = createAsyncThunk('posts/getAll', async (url,thunkAPI)=>{
//     const {rejectWithValue} = thunkAPI;
//     try{
//         const res = await axios.get(url);
//         return res.data;
//     }catch(err){
//         return rejectWithValue(err.message);
//     }
// });

export const addFactureVente = createAsyncThunk('posts/addFactureVente', async (values) => {
    return fetch("http://127.0.0.1:8000/api/clients", {
        method: "POST",
        headers: {
            Accept: "application/json", //I accept JSON format
            "Content-type": "application/json"// The content I'm sending is in JSON format.
        },
        body: JSON.stringify({

        })

    }).then((res) => res.json());
})