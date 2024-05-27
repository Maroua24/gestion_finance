import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const logIn = createAsyncThunk('posts/auth',async (values) => {
    return fetch("http://127.0.0.1:8000/api/users",{method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            email : values.email,
            password : values.password
        })
    }).then((res)=> res.json())
    .then(result => {
        const token = result.token
        Cookies.set('UserToken', token, { expires: 7 });
    })
})