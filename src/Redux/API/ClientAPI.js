import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addClient = createAsyncThunk('posts/addClient',async (values) => {
    const token = Cookies.get('UserToken');
    return fetch("http://127.0.0.1:8000/api/clients/create/",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json",// The content I'm sending is in JSON format.
            Authorization: `Bearer ${token}`
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
            Nom: values.Nom,
            Prenom: values.Prenom,
            Fonction: values.Fonction,
            Type_de_client: values.Type_de_client,
            Fax: values.Fax,
            Dossier_valide: values.Dossier_valide,
            valid: values.valid,
            Status: values.Status,
            VIP: values.VIP,
        })
    }).then((res)=> res.json());
})