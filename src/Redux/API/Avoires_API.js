import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const UpdateFacture = createAsyncThunk('posts/UpdateAvoire', async ({ClientId,inputValue}) => {
    const token = Cookies.get('UserToken');

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/factures/${ClientId}/avoirs/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                type_facture:inputValue.type_facture,
                date_creation:inputValue.date_creation,
                date_comptabilisation:inputValue.date_comptabilisation,
                date_decheance:inputValue.date_decheance,
                non_payee:inputValue.non_payee,
                montant:inputValue.montant,
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
