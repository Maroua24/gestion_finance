import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addClientVIP = createAsyncThunk('posts/addClientVIP',async (values) => {
    const token = Cookies.get('UserToken');

    return fetch("http://127.0.0.1:8000/api/clients/create/",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json",// The content I'm sending is in JSON format.
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            email : values.email,
            password : values.password
        })

    }).then((res)=> res.json());
})