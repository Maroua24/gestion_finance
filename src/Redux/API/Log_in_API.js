// src/Redux/API/Log_in_API.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const logIn = createAsyncThunk('posts/auth', async (values, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: values.email,
            password: values.password,
        }),
    });

    if (!response) {
        const error = await response.json();
        return error;
    }

    const result = await response.json();
    const token = result.token;
    Cookies.set('UserToken', token, { expires: 7 });

    return result;
});
