import {createAsyncThunk} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const addClient = createAsyncThunk('posts/addClient',async (values) => {
    const token = Cookies.get('csrftoken');
    return fetch("http://127.0.0.1:8000/api/clients/create/",{method:"POST",
        headers:{
            Accept:"application/json", //I accept JSON format
            "Content-type":"application/json",// The content I'm sending is in JSON format.
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            categorie_compte: values.categorie_compte,
            raison_sociale: values.raison_sociale,
            sigle: values.sigle,
            code_tva: values.code_tva,
            nature_compte: values.nature_compte,
            nif: values.nif,
            nis: values.nis,
            registre_commerce: values.registre_commerce,
            article_imposition: values.article_imposition,
            devise: values.devise,
            rue: values.rue,
            ville: values.ville,
            region: values.region,
            type_de_region: values.type_de_region,
            code_postale: values.code_postale,
            pays: values.pays,
            telephone: values.telephone,
            email: values.email,
            secteur_activite: values.secteur_activite,
            condition_paiement: values.condition_paiement,
            nom: values.nom,
            prenom: values.prenom,
            fonction: values.fonction,
            type_client: values.type_client,
            fax: values.fax,
            dossier_valide: values.dossier_valide,
            statut: values.statut,
            est_vip: values.est_vip,
        })
    }).then((res)=> res.json());
})