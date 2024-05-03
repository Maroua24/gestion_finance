import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addClient } from "../../Redux/API/ClientAPI";



const AddClient = () => {

    const dispatch = useDispatch();

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

    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch(addClient(inputValue))
        // console.log(inputValue)
    }


    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl">
                    Ajouter un client:
                </h1>
                {/* {% csrf_token %}  */}
                <div style={{ display: "block" }}>
                    <Select name="Categorie_de_compte" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={inputValue.Categorie_de_compte} onChange={handleInput}/>

                    <Style>
                        <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={inputValue.Raison_sociale} onChange={handleInput} />
                        <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={inputValue.Sigle} onChange={handleInput}/>
                    </Style>

                    <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={inputValue.Code_TVA} onChange={handleInput}/>
                    <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={inputValue.Nature_du_compte} onChange={handleInput}/>

                    <Style>
                        <Input label="NIF:" name="NIF" type="text" id="NIF"  value={inputValue.NIF} onChange={handleInput}/>
                        <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleInput}/>
                    </Style>

                    <Input label="Registre de commerce:" name="Registre de commerce" type="text" id="Registre_de_commerce"  value={inputValue.Registre_de_commerce} onChange={handleInput}/>
                    <Input label="Article d'imposition:" name="Article_dimposition" type="text" id="Article_imposition" value={inputValue.Article_imposition}  onChange={handleInput}/>
                    <Input label="Devise:" name="Devise" type="text" id="Devise" value={inputValue.Devise} onChange={handleInput}/>

                    <Style>
                        <Input label="Rue:" name="Rue" type="text" id="Rue" value={inputValue.Rue}  onChange={handleInput}/>
                        <Input label="Ville:" name="Ville" type="text" id="Ville" value={inputValue.Ville} onChange={handleInput}/>
                    </Style>

                    <Style>
                        <Input label="Region:" name="Region" type="text" id="Region" value={inputValue.Region} onChange={handleInput}/>
                        <Input label="Type de region:" name="Type_de_region" type="text" id="Type_de_region" value={inputValue.Type_de_region} onChange={handleInput}/>
                    </Style>

                    <Style>
                        <Input label="Code postal:" name="Code_postal" type="text" id="Code_postal" value={inputValue.Code_postal} onChange={handleInput}/>
                        <Input label="Pays:" name="Pays" type="text" id="Pays" value={inputValue.Pays} onChange={handleInput}/>
                    </Style>

                        <Input label="Telephone:" name="Telephone" type="text" id="Telephone" value={inputValue.Telephone} onChange={handleInput}/>
                        <Input label="Email:" name="Email" type="email" id="Email" value={inputValue.Email} onChange={handleInput}/>

                        <Input label="Secteur d'activite:" name="Secteur_dactivite" type="text" id="Secteur_activite" value={inputValue.Secteur_activite}  onChange={handleInput}/>
                        <Input label="Condition de paiement:" name="Condition_de_paiement" type="text" id="Condition_de_paiement" value={inputValue.Condition_de_paiement} onChange={handleInput}/>

                    <Style>
                        <Input label="Cre le:" name="Cre_le" type="date" id="Cre_le" value={inputValue.Cre_le} onChange={handleInput}/>
                        <Input label="Cre par:" name="Cre_par" type="text" id="Cre_par" value={inputValue.Cre_par} onChange={handleInput}/>
                    </Style>

                    <Input label="Nom:" name="Nom" type="text" id="Nom" value={inputValue.Nom} onChange={handleInput}/>
                    <Input label="Prenom:" name="Prenom" type="text" id="Prenom" value={inputValue.Prenom} onChange={handleInput}/>

                    <Style>
                        <Input label="Fonction:" name="Fonction" type="text" id="Fonction" value={inputValue.Fonction} onChange={handleInput}/>
                        <Input label="Type de client:" name="Type_de_client" type="text" id="Type_de_client" value={inputValue.Type_de_client} onChange={handleInput}/>
                    </Style>

                    <Input label="Fax:" name="Fax" type="text" id="Fax" value={inputValue.Fax} onChange={handleInput}/>

                        <Select label="Dossier valide:" name="Dossier_valide" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={inputValue.Dossier_valide} onChange={handleInput}/>
                        <Select label="Status:" name="Status" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={inputValue.valid} onChange={handleInput}/>
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