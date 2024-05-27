import { Select, Input , Style,Menu} from "../index"
import { useState} from "react";
import { useDispatch} from "react-redux";
import { addClient } from "../../Redux/API/ClientAPI";
import Validation from '../Validation/Validation'
const AddClient = () => {

    const dispatch = useDispatch();
    const [errors,setErrors] = useState({})

    const [inputValue, setInputValue] = useState({
        Categorie_de_compte: '',
        Raison_sociale: '',
        Sigle: '',
        Code_TVA: '',
        Nature_du_compte: '',
        NIF: '',
        NIS: '',
        Registre_de_commerce: '',
        Article_imposition: '',
        Devise: '',
        Rue: '',
        Ville: '',
        Region: '',
        Type_de_region: '',
        Code_postal: '',
        Pays: '',
        Telephone: '',
        Email: '',
        Secteur_activite: '',
        Condition_de_paiement: '',
        Cre_le: '',
        Cre_par: '',
        Nom: '',
        Prenom: '',
        Fonction: '',
        Type_de_client: '',
        Fax: '',
        Dossier_valide: '',
        valid: '',
    });
    const clearInputValues = () => {
        setInputValue({
            Categorie_de_compte: '',
            Raison_sociale: '',
            Sigle: '',
            Code_TVA: '',
            Nature_du_compte: '',
            NIF: '',
            NIS: '',
            Registre_de_commerce: '',
            Article_imposition: '',
            Devise: '',
            Rue: '',
            Ville: '',
            Region: '',
            Type_de_region: '',
            Code_postal: '',
            Pays: '',
            Telephone: '',
            Email: '',
            Secteur_activite: '',
            Condition_de_paiement: '',
            Nom: '',
            Prenom: '',
            Fonction: '',
            Type_de_client: '',
            Fax: '',
            Dossier_valide: '',
            valid: '',
        });
    };

    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        const validationErrors = Validation(inputValue);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(addClient(inputValue));
            clearInputValues();
        }
    }


    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl">
                    Ajouter un client:
                </h1>
                <div style={{ display: "block" }}>
                    <Select name="Categorie de compte" value_1="Client" value_2="Supplier" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={inputValue.Categorie_de_compte} onChange={handleInput}/>

                    <Style>
                        <div>
                            <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={inputValue.Raison_sociale} onChange={handleInput}/>
                            {errors.Raison_sociale && <p className="text-red-500 ml-6">{errors.Raison_sociale}</p>}
                        </div>

                        <div>
                            <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={inputValue.Sigle} onChange={handleInput}/>
                            {errors.Sigle && <p className="text-red-500 ml-6">{errors.Sigle}</p>}
                        </div>
                    </Style>
                        <div>
                            <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={inputValue.Code_TVA} onChange={handleInput}/>
                            {errors.Code_TVA && <p className="text-red-500 ml-6">{errors.Code_TVA}</p>}
                        </div>
                        <div>
                            <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={inputValue.Nature_du_compte} onChange={handleInput}/>
                            {errors.Nature_du_compte && <p className="text-red-500 ml-6">{errors.Nature_du_compte}</p>}
                        </div>

                    <Style>
                        <div>
                            <Input label="NIF:" name="NIF" type="text" id="NIF"  value={inputValue.NIF} onChange={handleInput}/>
                            {errors.NIF && <p className="text-red-500 ml-6">{errors.NIF}</p>}
                        </div>
                        <div>
                            <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleInput}/>
                            {errors.NIS && <p className="text-red-500 ml-6">{errors.NIS}</p>}
                        </div>
                    </Style>

                    <div>
                        <Input label="Registre de commerce:" name="Registre_de_commerce" type="text" id="Registre_de_commerce"  value={inputValue.Registre_de_commerce} onChange={handleInput}/>
                        {errors.Registre_de_commerce && <p className="text-red-500 ml-6">{errors.Registre_de_commerce}</p>}
                    </div>
                    <div>
                        <Input label="Article d'imposition:" name="Article_imposition" type="text" id="Article_imposition" value={inputValue.Article_imposition}  onChange={handleInput}/>
                        {errors.Article_imposition && <p className="text-red-500 ml-6">{errors.Article_imposition}</p>}
                    </div>
                    <div>
                        <Input label="Devise:" name="Devise" type="text" id="Devise" value={inputValue.Devise} onChange={handleInput}/>
                        {errors.Devise && <p className="text-red-500 ml-6">{errors.Devise}</p>}
                    </div>
                    <div>

                    </div>

                    <Style>
                        <div>
                            <Input label="Rue:" name="Rue" type="text" id="Rue" value={inputValue.Rue}  onChange={handleInput}/>
                            {errors.Rue && <p className="text-red-500 ml-6">{errors.Rue}</p>}
                        </div>
                        <div>
                            <Input label="Ville:" name="Ville" type="text" id="Ville" value={inputValue.Ville} onChange={handleInput}/>
                            {errors.Ville && <p className="text-red-500 ml-6">{errors.Ville}</p>}
                        </div>
                    </Style>

                    <Style>
                        <div>
                            <Input label="Region:" name="Region" type="text" id="Region" value={inputValue.Region} onChange={handleInput}/>
                            {errors.Region && <p className="text-red-500 ml-6">{errors.Region}</p>}
                        </div>
                        <div>
                            <Input label="Type de region:" name="Type_de_region" type="text" id="Type_de_region" value={inputValue.Type_de_region} onChange={handleInput}/>
                            {errors.Type_de_region && <p className="text-red-500 ml-6">{errors.Type_de_region}</p>}
                        </div>
                    </Style>

                    <Style>
                        <div>
                            <Input label="Code postal:" name="Code_postal" type="text" id="Code_postal" value={inputValue.Code_postal} onChange={handleInput}/>
                            {errors.Code_postal && <p className="text-red-500 ml-6">{errors.Code_postal}</p>}
                        </div>
                        <div>
                            <Input label="Pays:" name="Pays" type="text" id="Pays" value={inputValue.Pays} onChange={handleInput}/>
                            {errors.Pays && <p className="text-red-500 ml-6">{errors.Pays}</p>}
                        </div>
                    </Style>

                    <div>
                        <Input label="Telephone:" name="Telephone" type="number" id="Telephone" value={inputValue.Telephone} onChange={handleInput}/>
                        {errors.Telephone && <p className="text-red-500 ml-6">{errors.Telephone}</p>}
                    </div>
                    <div>
                        <Input label="Email:" name="Email" type="email" id="Email" value={inputValue.Email} onChange={handleInput}/>
                        {errors.Email && <p className="text-red-500 ml-6">{errors.Email}</p>}
                    </div>
                    <div>
                        <Input label="Secteur d'activite:" name="Secteur_activite" type="text" id="Secteur_activite" value={inputValue.Secteur_activite}  onChange={handleInput}/>
                        {errors.Secteur_activite && <p className="text-red-500 ml-6">{errors.Secteur_activite}</p>}
                    </div>
                    <div>
                        <Input label="Condition de paiement:" name="Condition_de_paiement" type="text" id="Condition_de_paiement" value={inputValue.Condition_de_paiement} onChange={handleInput}/>
                        {errors.Condition_de_paiement && <p className="text-red-500 ml-6">{errors.Condition_de_paiement}</p>}
                    </div>

                    <div>
                        <Input label="Nom:" name="Nom" type="text" id="Nom" value={inputValue.Nom} onChange={handleInput}/>
                        {errors.Nom && <p className="text-red-500 ml-6">{errors.Nom}</p>}
                    </div>
                    <div>
                        <Input label="Prenom:" name="Prenom" type="text" id="Prenom" value={inputValue.Prenom} onChange={handleInput}/>
                        {errors.Prenom && <p className="text-red-500 ml-6">{errors.Prenom}</p>}
                    </div>
                    <Style>
                        <div>
                            <Input label="Fonction:" name="Fonction" type="text" id="Fonction" value={inputValue.Fonction} onChange={handleInput}/>
                            {errors.Fonction && <p className="text-red-500 ml-6">{errors.Fonction}</p>}
                        </div>
                        <div>
                            <Input label="Type de client:" name="Type_de_client" type="text" id="Type_de_client" value={inputValue.Type_de_client} onChange={handleInput}/>
                            {errors.Type_de_client && <p className="text-red-500 ml-6">{errors.Type_de_client}</p>}
                        </div>
                    </Style>
                    <div>
                        <Input label="Fax:" name="Fax" type="number" id="Fax" value={inputValue.Fax} onChange={handleInput}/>
                        {errors.Fax && <p className="text-red-500 ml-6">{errors.Fax}</p>}
                    </div>

                        <Select label="Dossier valide:" name="Dossier valide" value_1="Validé" value_2="Non validé" choix1="oui" choix2="Non" id="Dossier_valide" value={inputValue.Dossier_valide} onChange={handleInput}/>
                        <Select label="Status:" name="Status" value_1="Active" value_2="Inactive" choix1="Actif" choix2="Inactif" id="status" value={inputValue.valid} onChange={handleInput}/>
                        <Select label="VIP" name="VIP" value_1="False" value_2="True" choix1="Non VIP" choix2="VIP" id="status" value={inputValue.valid} onChange={handleInput}/>
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md
                                                        md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            Envoyer
                        </button>
                    </div>
            </form>
        </>
    );
};

export default AddClient