import { createAsyncThunk } from '@reduxjs/toolkit'


export const addFactureService = createAsyncThunk('posts/addFactureService', async (values) => {
    return fetch("http://127.0.0.1:8000/api/clients", {
        method: "POST",
        headers: {
            Accept: "application/json", //I accept JSON format
            "Content-type": "application/json"// The content I'm sending is in JSON format.
        },
        body: JSON.stringify({
            Num_Fact:values.Num_Fact,
            date_creation: values.date_creation,
            date_comp: values.date_comp,
            date_dech: values.date_dech
        })

    }).then((res) => res.json());
})