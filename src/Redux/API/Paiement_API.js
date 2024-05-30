import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addPaiement = createAsyncThunk('posts/addClient',async (values) => {
    const token = Cookies.get('csrftoken');
    return fetch("http://127.0.0.1:8000/api/clients/create/",{method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            
        })
    }).then((res)=> res.json());
})