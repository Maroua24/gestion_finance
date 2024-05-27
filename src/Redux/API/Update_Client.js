import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const UpdateClient = createAsyncThunk('posts/UpdateClient', async (values) => {
    const token = Cookies.get('UserToken');

    try {
        const response = await fetch("http://127.0.0.1:8000/api/clients/<int:pk>/update/", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
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
                Article_dimposition: values.Article_dimposition,
                Devise: values.Devise,
                Rue: values.Rue,
                Ville: values.Ville,
                Region: values.Region,
                Type_de_region: values.Type_de_region,
                Code_postal: values.Code_postal,
                Pays: values.Pays,
                Telephone: values.Telephone,
                email: values.email,
                Secteur_dactivite: values.Secteur_dactivite,
                Condition_de_paiement: values.Condition_de_paiement,
                Nom: values.Nom,
                Prenom: values.Prenom,
                Fonction: values.Fonction,
                Type_de_client: values.Type_de_client,
                Fax: values.Fax,
                Dossier_valide: values.Dossier_valide,
                Status: values.Status
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
