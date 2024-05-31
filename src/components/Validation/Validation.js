const Validation = (inputValue) => {
    const errors = {};

    if (inputValue.raison_sociale === "") {
        errors.raison_sociale = "Raison sociale is Required!";
    }
    if (inputValue.sigle === "") {
        errors.sigle = "Sigle is Required!";
    }
    if (inputValue.code_tva === "") {
        errors.code_tva = "Code TVA is Required!";
    }
    if (inputValue.nature_compte === "") {
        errors.nature_compte = "Nature du compte is Required!";
    }
    if (inputValue.nif === "") {
        errors.nif = "NIF is Required!";
    }
    if (inputValue.nis === "") {
        errors.nis = "NIS is Required!";
    }
    if (inputValue.registre_commerce === "") {
        errors.registre_commerce = "Registre de commerce is Required!";
    }
    if (inputValue.article_imposition === "") {
        errors.article_imposition = "Article d'imposition is Required!";
    }
    if (inputValue.devise === "") {
        errors.devise = "Devise is Required!";
    }
    if (inputValue.rue === "") {
        errors.rue = "Rue is Required!";
    }
    if (inputValue.ville === "") {
        errors.ville = "Ville is Required!";
    }
    if (inputValue.region === "") {
        errors.region = "Region is Required!";
    }
    if (inputValue.type_de_region === "") {
        errors.type_de_region = "Type de region is Required!";
    }
    if (inputValue.code_postale === "") {
        errors.code_postale = "Code postal is Required!";
    }
    if (inputValue.pays === "") {
        errors.pays = "Pays is Required!";
    }
    if (inputValue.telephone === "") {
        errors.telephone = "Telephone is Required!";
    }
    if (inputValue.email === "") {
        errors.email = "Email is Required!";
    }
    if (inputValue.secteur_activite === "") {
        errors.secteur_activite = "Secteur d'activite is Required!";
    }
    if (inputValue.condition_paiement === "") {
        errors.condition_paiement = "Condition de paiement is Required!";
    }
    if (inputValue.nom === "") {
        errors.nom = "Nom is Required!";
    }
    if (inputValue.prenom === "") {
        errors.prenom = "Prenom is Required!";
    }
    if (inputValue.fonction === "") {
        errors.fonction = "Fonction is Required!";
    }
    if (inputValue.type_client === "") {
        errors.type_client = "Type de client is Required!";
    }
    if (inputValue.fax === "") {
        errors.fax = "Fax is Required!";
    }
    if (inputValue.Montant_encaissenment === "") {
        errors.Montant_encaissenment = "Montant d'encaissenment is Required!"
    }
    if (inputValue.Montant_de_reglement === "") {
        errors.Montant_de_reglement = "Montant de reglement is Required!"
    }
    if (inputValue.Etat === "") {
        errors.Etat = "Etat is Required!"
    }

    return errors;
};

export default Validation;
