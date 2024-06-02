import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const AddUser = createAsyncThunk('posts/addUser',async (values) => {
    const token = Cookies.get('UserToken');

    const response = await  fetch("http://127.0.0.1:8000/api/register/",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json",// The content I'm sending is in JSON format.
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            email : values.email,
            password : values.password
        })

    })
    if (!response) {
        const error = await response.json();
        return error;
    }
    return await response.json();
})