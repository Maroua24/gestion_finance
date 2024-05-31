import { Select, Input , Style,Menu,Validation} from "../index"
import { useState} from "react";
import { useDispatch} from "react-redux";
import { addClient } from "../../Redux/API/ClientAPI";

const AddClient = () => {

    const dispatch = useDispatch();
    const [errors,setErrors] = useState({})

    const [inputValue, setInputValue] = useState({
        categorie_compte: 'Client',
        raison_sociale: '',
        sigle: '',
        code_tva: '',
        nature_compte: '',
        nif: '',
        nis: '',
        registre_commerce: '',
        article_imposition: '',
        devise: '',
        rue: '',
        ville: '',
        region: '',
        type_de_region: '',
        code_postale: '',
        pays: '',
        telephone: '',
        email: '',
        secteur_activite: '',
        condition_paiement: '',
        nom: '',
        prenom: '',
        fonction: '',
        type_client: '',
        fax: '',
        dossier_valide: 'Valide',
        statut: 'Active',
        est_vip: 'False',
    });
    const clearInputValues = () => {
        setInputValue({
        categorie_compte: '',
        raison_sociale: '',
        sigle: '',
        code_tva: '',
        nature_compte: '',
        nif: '',
        nis: '',
        registre_commerce: '',
        article_imposition: '',
        devise: '',
        rue: '',
        ville: '',
        region: '',
        type_de_regionn: '',
        code_postale: '',
        pays: '',
        telephone: '',
        email: '',
        secteur_activite: '',
        condition_paiement: '',
        nom: '',
        prenom: '',
        fonction: '',
        type_client: '',
        fax: '',
        dossier_valide: '',
        statut: '',
        est_vip: '',
        });
    };

    const handleInput=(e) => {
        console.log(e.target.name, e.target.value);
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
        console.log(inputValue)
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
                    <Select label="Categorie du compte" name="categorie_compte" value_1="Client" value_2="Supplier" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={inputValue.categorie_compte} onChange={handleInput}/>

                    <Style>
                        <div>
                            <Input label="Raison sociale:" name="raison_sociale" type="text" id="Raison_sociale" value={inputValue.raison_sociale} onChange={handleInput}/>
                            {errors.raison_sociale && <p className="text-red-500 ml-6">{errors.raison_sociale}</p>}
                        </div>

                        <div>
                            <Input label="Sigle:" name="sigle" type="text" id="sigle" value={inputValue.sigle} onChange={handleInput}/>
                            {errors.sigle && <p className="text-red-500 ml-6">{errors.sigle}</p>}
                        </div>
                    </Style>
                        <div>
                            <Input label="Code TVA:" name="code_tva" type="text" id="code_tva"  value={inputValue.code_tva} onChange={handleInput}/>
                            {errors.code_tva && <p className="text-red-500 ml-6">{errors.code_tva}</p>}
                        </div>
                        <div>
                            <Input label="Nature du compte:" name="nature_compte" type="text" id="nature_compte"  value={inputValue.nature_compte} onChange={handleInput}/>
                            {errors.nature_compte && <p className="text-red-500 ml-6">{errors.nature_compte}</p>}
                        </div>

                    <Style>
                        <div>
                            <Input label="NIF:" name="nif" type="text" id="nif"  value={inputValue.nif} onChange={handleInput}/>
                            {errors.nif && <p className="text-red-500 ml-6">{errors.nif}</p>}
                        </div>
                        <div>
                            <Input label="NIS:" name="nis" type="text" id="nis" value={inputValue.nis} onChange={handleInput}/>
                            {errors.nis && <p className="text-red-500 ml-6">{errors.nis}</p>}
                        </div>
                    </Style>

                    <div>
                        <Input label="Registre de commerce:" name="registre_commerce" type="text" id="registre_commerce"  value={inputValue.registre_commerce} onChange={handleInput}/>
                        {errors.registre_commerce && <p className="text-red-500 ml-6">{errors.registre_commerce}</p>}
                    </div>
                    <div>
                        <Input label="Article d'imposition:" name="article_imposition" type="text" id="article_imposition" value={inputValue.article_imposition}  onChange={handleInput}/>
                        {errors.article_imposition && <p className="text-red-500 ml-6">{errors.article_imposition}</p>}
                    </div>
                    <div>
                        <Input label="Devise:" name="devise" type="text" id="devise" value={inputValue.devise} onChange={handleInput}/>
                        {errors.devise && <p className="text-red-500 ml-6">{errors.devise}</p>}
                    </div>
                    <div>

                    </div>

                    <Style>
                        <div>
                            <Input label="Rue:" name="rue" type="text" id="rue" value={inputValue.rue}  onChange={handleInput}/>
                            {errors.rue && <p className="text-red-500 ml-6">{errors.rue}</p>}
                        </div>
                        <div>
                            <Input label="Ville:" name="ville" type="text" id="ville" value={inputValue.ville} onChange={handleInput}/>
                            {errors.ville && <p className="text-red-500 ml-6">{errors.ville}</p>}
                        </div>
                    </Style>

                    <Style>
                        <div>
                            <Input label="Region:" name="region" type="text" id="region" value={inputValue.region} onChange={handleInput}/>
                            {errors.region && <p className="text-red-500 ml-6">{errors.region}</p>}
                        </div>
                        <div>
                            <Input label="Type de region:" name="type_de_region" type="text" id="type_de_region" value={inputValue.type_de_region} onChange={handleInput}/>
                            {errors.type_de_region && <p className="text-red-500 ml-6">{errors.type_de_region}</p>}
                        </div>
                    </Style>

                    <Style>
                        <div>
                            <Input label="Code postal:" name="code_postale" type="text" id="code_postale" value={inputValue.code_postale} onChange={handleInput}/>
                            {errors.code_postale && <p className="text-red-500 ml-6">{errors.code_postale}</p>}
                        </div>
                        <div>
                            <Input label="Pays:" name="pays" type="text" id="pays" value={inputValue.pays} onChange={handleInput}/>
                            {errors.pays && <p className="text-red-500 ml-6">{errors.pays}</p>}
                        </div>
                    </Style>

                    <div>
                        <Input label="Telephone:" name="telephone" type="number" id="telephone" value={inputValue.telephone} onChange={handleInput}/>
                        {errors.telephone && <p className="text-red-500 ml-6">{errors.telephone}</p>}
                    </div>
                    <div>
                        <Input label="Email:" name="email" type="email" id="email" value={inputValue.email} onChange={handleInput}/>
                        {errors.email && <p className="text-red-500 ml-6">{errors.email}</p>}
                    </div>
                    <div>
                        <Input label="Secteur d'activite:" name="secteur_activite" type="text" id="secteur_activite" value={inputValue.secteur_activite}  onChange={handleInput}/>
                        {errors.secteur_activite && <p className="text-red-500 ml-6">{errors.secteur_activite}</p>}
                    </div>
                    <div>
                        <Input label="Condition de paiement:" name="condition_paiement" type="text" id="condition_paiement" value={inputValue.condition_paiement} onChange={handleInput}/>
                        {errors.condition_paiement && <p className="text-red-500 ml-6">{errors.condition_paiement}</p>}
                    </div>

                    <div>
                        <Input label="Nom:" name="nom" type="text" id="nom" value={inputValue.nom} onChange={handleInput}/>
                        {errors.nom && <p className="text-red-500 ml-6">{errors.nom}</p>}
                    </div>
                    <div>
                        <Input label="Prenom:" name="prenom" type="text" id="prenom" value={inputValue.prenom} onChange={handleInput}/>
                        {errors.prenom && <p className="text-red-500 ml-6">{errors.prenom}</p>}
                    </div>
                    <Style>
                        <div>
                            <Input label="Fonction:" name="fonction" type="text" id="fonction" value={inputValue.fonction} onChange={handleInput}/>
                            {errors.fonction && <p className="text-red-500 ml-6">{errors.fonction}</p>}
                        </div>
                        <div>
                            <Input label="Type de client:" name="type_client" type="text" id="type_client" value={inputValue.type_client} onChange={handleInput}/>
                            {errors.type_client && <p className="text-red-500 ml-6">{errors.type_client}</p>}
                        </div>
                    </Style>
                    <div>
                        <Input label="Fax:" name="fax" type="number" id="fax" value={inputValue.fax} onChange={handleInput}/>
                        {errors.fax && <p className="text-red-500 ml-6">{errors.fax}</p>}
                    </div>

                        <Select label="Dossier valide:" name="dossier_valide" value_1="Valide" value_2="Non valide" choix1="oui" choix2="Non" id="dossier_valide" value={inputValue.dossier_valide} onChange={handleInput}/>
                        <Select label="Status:" name="status" value_1="Active" value_2="Inactive" choix1="Active" choix2="Inactive" id="status" value={inputValue.statut} onChange={handleInput}/>
                        <Select label="VIP" name="est_vip" value_1="False" value_2="True" choix1="Non VIP" choix2="VIP" id="est_vip" value={inputValue.est_vip} onChange={handleInput}/>
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