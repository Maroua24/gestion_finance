import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addFact = createAsyncThunk('posts/addFact',async (values) => {
    const token = Cookies.get('csrftoken');
    const response = await fetch("http://127.0.0.1:8000/api/factures/",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json",// The content I'm sending is in JSON format.
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            type_facture:values.type_facture,
            commande_ligne:values.commande_ligne,
            client:values.client,
            date_creation:values.date_creation,
            date_comptabilisation:values.date_comptabilisation,
            date_decheance:values.date_decheance,
            montant:values.montant,
        })
    })
    if (!response) {
        const error = await response.json();
        return error;
    }
    return await response.json();
})