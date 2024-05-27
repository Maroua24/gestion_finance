const Validation = (inputValue) => {
    const errors = {};

    if (inputValue.Raison_sociale === "") {
        errors.Raison_sociale = "Raison sociale is Required!";
    }
    if (inputValue.Sigle === "") {
        errors.Sigle = "Sigle is Required!";
    }
    if (inputValue.Code_TVA === "") {
        errors.Code_TVA = "Code TVA is Required!";
    }
    if (inputValue.Nature_du_compte === "") {
        errors.Nature_du_compte = "Nature du compte is Required!";
    }
    if (inputValue.NIF === "") {
        errors.NIF = "NIF is Required!";
    }
    if (inputValue.NIS === "") {
        errors.NIS = "NIS is Required!";
    }
    if (inputValue.Registre_de_commerce === "") {
        errors.Registre_de_commerce = "Registre de commerce is Required!";
    }
    if (inputValue.Article_imposition === "") {
        errors.Article_imposition = "Article d'imposition is Required!";
    }
    if (inputValue.Devise === "") {
        errors.Devise = "Devise is Required!";
    }
    if (inputValue.Rue === "") {
        errors.Rue = "Rue is Required!";
    }
    if (inputValue.Ville === "") {
        errors.Ville = "Ville is Required!";
    }
    if (inputValue.Region === "") {
        errors.Region = "Region is Required!";
    }
    if (inputValue.Type_de_region === "") {
        errors.Type_de_region = "Type de region is Required!";
    }
    if (inputValue.Code_postal === "") {
        errors.Code_postal = "Code postal is Required!";
    }
    if (inputValue.Pays === "") {
        errors.Pays = "Pays is Required!";
    }
    if (inputValue.Telephone === "") {
        errors.Telephone = "Telephone is Required!";
    }
    if (inputValue.Email === "") {
        errors.Email = "Email is Required!";
    }
    if (inputValue.Secteur_activite === "") {
        errors.Secteur_activite = "Secteur d'activite is Required!";
    }
    if (inputValue.Condition_de_paiement === "") {
        errors.Condition_de_paiement = "Condition de paiement is Required!";
    }
    if (inputValue.Cre_le === "") {
        errors.Cre_le = "Date de creation (Cre le) is Required!";
    }
    if (inputValue.Cre_par === "") {
        errors.Cre_par = "Creator (Cre par) is Required!";
    }
    if (inputValue.Nom === "") {
        errors.Nom = "Nom is Required!";
    }
    if (inputValue.Prenom === "") {
        errors.Prenom = "Prenom is Required!";
    }
    if (inputValue.Fonction === "") {
        errors.Fonction = "Fonction is Required!";
    }
    if (inputValue.Type_de_client === "") {
        errors.Type_de_client = "Type de client is Required!";
    }
    if (inputValue.Fax === "") {
        errors.Fax = "Fax is Required!";
    }
    if(inputValue.Montant_encaissenment === ""){
        errors.Montant_encaissenment = "Montant d'encaissenment is Required!"
    }
    if(inputValue.Montant_de_reglement === ""){
        errors.Montant_de_reglement = "Montant de reglement is Required!"
    }
    if(inputValue.Etat === ""){
        errors.Etat = "Etat is Required!"
    }

    return errors;
};

export default Validation;
