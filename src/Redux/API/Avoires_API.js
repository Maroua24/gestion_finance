import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const UpdateFacture = createAsyncThunk('posts/UpdateClient', async (values) => {
    const token = Cookies.get('UserToken');

    try {
        const response = await fetch("http://127.0.0.1:8000/api/clients/update/", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                date_creation : values.date_creation,
                date_comptabilisation: values.date_comptabilisation,
                date_decheance: values.date_decheance,
                non_payee: values.non_payee,
                montant: values.montant
            })
        });

        if (!response) {
            throw new Error('Failed to update client');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
});
