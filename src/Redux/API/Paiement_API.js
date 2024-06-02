import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addPaiement = createAsyncThunk('posts/addPaiement',async (values) => {
    const token = Cookies.get('csrftoken');
    const response = await  fetch("http://127.0.0.1:8000/api/paiements/",{method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            numero_cheque:values.numero_cheque ,
            virement:values.virement ,
            numero_carte_cib:values.numero_carte_cib ,
            Preciser:values.Preciser ,
            commentaire:values.commentaire ,
            Etat:values.Etat ,
            cib:values.cib,
            preciser:values.preciser,
            etat:values.etat,
            Avance:values.Avance ,
            Timbre:values.Timbre ,
            AvanceStock:values.AvanceStock ,
            mode_reglement:values.mode_reglement,
        })
    })
    if (!response) {
        const error = await response.json();
        return error;
    }
    return await response.json();
})