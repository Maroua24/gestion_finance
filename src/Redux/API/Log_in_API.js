import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const logIn = createAsyncThunk('posts/auth',async (values) => {
    return fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            email : values.email,
            website : values.website
        })
    }).then((res)=> res.json())
    .then(result => {
        const token = result.token
        Cookies.set('JsonWebToken', token, { expires: 7 });
    })
})