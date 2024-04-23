import { createAsyncThunk } from '@reduxjs/toolkit'


export const addFactureService = createAsyncThunk('posts/addFactureService', async (values) => {
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