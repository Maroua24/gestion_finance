import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";



export const getAllClients = createAsyncThunk('posts/getAll', async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await axios.get(url);
        return res.data;
    }catch(err){
        return rejectWithValue(err.message);
    }
});

export const addClient = createAsyncThunk('posts/addClient',async (values) => {
    return fetch("http://127.0.0.1:8000/api/clients",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json"// The content I'm sending is in JSON format.
        },
        body: JSON.stringify({
            Categorie_de_compte: values.Categorie_de_compte,
            Raison_sociale: values.Raison_sociale,
            Sigle: values.Sigle,
            Code_TVA: values.Code_TVA,
            Nature_du_compte: values.Nature_du_compte,
            NIF: values.NIF,
            NIS: values.NIS,
            Registre_de_commerce: values.Registre_de_commerce,
            Article_imposition: values.Article_imposition,
            Devise: values.Devise,
            Rue: values.Rue,
            Ville: values.Ville,
            Region: values.Region,
            Type_de_region: values.Type_de_region,
            Code_postal: values.Code_postal,
            Pays: values.Pays,
            Telephone: values.Telephone,
            Email: values.Email,
            Secteur_activite: values.Secteur_activite,
            Condition_de_paiement: values.Condition_de_paiement,
            Cre_le: values.Cre_le,
            Cre_par: values.Cre_par,
            Nom: values.Nom,
            Prenom: values.Prenom,
            Fonction: values.Fonction,
            Type_de_client: values.Type_de_client,
            Fax: values.Fax,
            Dossier_valide: values.Dossier_valide,
            valid: values.valid
        })

    }).then((res)=> res.json());
})