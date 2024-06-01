import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const UpdateClient = createAsyncThunk('posts/UpdateClient', async ({ClientId,inputValue}) => {
    const token = Cookies.get('UserToken');

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/clients/${ClientId}/update/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                Categorie_de_compte: inputValue.Categorie_de_compte,
                Raison_sociale: inputValue.Raison_sociale,
                Sigle: inputValue.Sigle,
                Code_TVA: inputValue.Code_TVA,
                Nature_du_compte: inputValue.Nature_du_compte,
                NIF: inputValue.NIF,
                NIS: inputValue.NIS,
                Registre_de_commerce: inputValue.Registre_de_commerce,
                Article_dimposition: inputValue.Article_dimposition,
                Devise: inputValue.Devise,
                Rue: inputValue.Rue,
                Ville: inputValue.Ville,
                Region: inputValue.Region,
                Type_de_region: inputValue.Type_de_region,
                Code_postal: inputValue.Code_postal,
                Pays: inputValue.Pays,
                Telephone: inputValue.Telephone,
                email: inputValue.email,
                Secteur_dactivite: inputValue.Secteur_dactivite,
                Condition_de_paiement: inputValue.Condition_de_paiement,
                Nom: inputValue.Nom,
                Prenom: inputValue.Prenom,
                Fonction: inputValue.Fonction,
                Type_de_client: inputValue.Type_de_client,
                Fax: inputValue.Fax,
                Dossier_valide: inputValue.Dossier_valide,
                Status: inputValue.Status
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
