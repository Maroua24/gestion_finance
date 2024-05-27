import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {UpdateClient} from "../../Redux/API/Update_Client"

const EditClient = () => {


    const { id } = useParams();
    const ClientId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === ClientId));
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
            email: '',
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

    useEffect(() => {
        if (client) {
            setInputValue({
                Categorie_de_compte: client.Categorie_de_compte,
                Raison_sociale: client.Raison_sociale,
                Sigle: client.Sigle,
                Code_TVA: client.Code_TVA,
                Nature_du_compte: client.Nature_du_compte,
                NIF: client.NIF,
                NIS: client.NIS,
                Registre_de_commerce: client.Registre_de_commerce,
                Article_imposition: client.Article_imposition,
                Devise: client.Devise,
                Rue: client.Rue,
                Ville: client.Ville,
                Region: client.Region,
                Type_de_region: client.Type_de_region,
                Code_postal: client.Code_postal,
                Pays: client.Pays,
                Telephone: client.Telephone,
                email: client.email,
                Secteur_activite: client.Secteur_activite,
                Condition_de_paiement: client.Condition_de_paiement,
                Nom: client.Nom,
                Prenom: client.Prenom,
                Fonction: client.Fonction,
                Type_de_client: client.Type_de_client,
                Fax: client.Fax,
                Dossier_valide: client.Dossier_valide,
                valid: client.valid
            });
        }
    }, [client]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateClient({ id: ClientId, ...inputValue }));
    };

    return (
        <>
        <Menu/>
        <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] text-3xl m-3">Modifier les informations du client</h1>
                <div style={{ display: "block" }}>
                    <Select name="Categorie_de_compte" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={inputValue.Categorie_de_compte} onChange={handleChange} />

                    <Style>
                        <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={inputValue.Raison_sociale}  onChange={handleChange} />
                        <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={inputValue.Sigle} onChange={handleChange} />
                    </Style>

                    <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={inputValue.Code_TVA} onChange={handleChange} />
                    <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={inputValue.Nature_du_compte} onChange={handleChange} />

                    <Style>
                        <Input label="NIF:" name="NIF" type="text" id="NIF"  value={inputValue.NIF} onChange={handleChange} />
                        <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleChange} />
                    </Style>

                    <Input label="Registre de commerce:" name="Registre de commerce" type="text" id="Registre_de_commerce"  value={inputValue.Registre_de_commerce} onChange={handleChange} />
                    <Input label="Article d'imposition:" name="Article_dimposition" type="text" id="Article_imposition" value={inputValue.Article_dimposition}  onChange={handleChange} />
                    <Input label="Devise:" name="Devise" type="text" id="Devise" value={inputValue.Devise} onChange={handleChange} />

                    <Style>
                        <Input label="Rue:" name="Rue" type="text" id="Rue" value={inputValue.Rue}  onChange={handleChange} />
                        <Input label="Ville:" name="Ville" type="text" id="Ville" value={inputValue.Ville} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Region:" name="Region" type="text" id="Region" value={inputValue.Region} onChange={handleChange} />
                        <Input label="Type de region:" name="Type_de_region" type="text" id="Type_de_region" value={inputValue.Type_de_region} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Code postal:" name="Code_postal" type="text" id="Code_postal" value={inputValue.Code_postal} onChange={handleChange} />
                        <Input label="Pays:" name="Pays" type="text" id="Pays" value={inputValue.Pays} onChange={handleChange} />
                    </Style>

                        <Input label="Telephone:" name="Telephone" type="text" id="Telephone" value={inputValue.Telephone} onChange={handleChange} />
                        <Input label="Email:" name="email" type="email" id="email" value={inputValue.inputValue.email} onChange={handleChange} />

                        <Input label="Secteur d'activite:" name="Secteur_activite" type="text" id="Secteur_activite" value={inputValue.Secteur_dactivite}  onChange={handleChange} />
                        <Input label="Condition de paiement:" name="Condition_de_paiement" type="text" id="Condition_de_paiement" value={inputValue.Condition_de_paiement} onChange={handleChange} />

                    <Input label="Nom:" name="Nom" type="text" id="Nom" value={inputValue.Nom} onChange={handleChange} />
                    <Input label="Prenom:" name="Prenom" type="text" id="Prenom" value={inputValue.Prenom} onChange={handleChange} />

                    <Style>
                        <Input label="Fonction:" name="Fonction" type="text" id="Fonction" value={inputValue.Fonction} onChange={handleChange} />
                        <Input label="Type de client:" name="Type_de_client" type="text" id="Type_de_client" value={inputValue.Type_de_client} onChange={handleChange} />
                    </Style>

                    <Input label="Fax:" name="Fax" type="text" id="Fax" value={inputValue.Fax} onChange={handleChange} />

                        <Select label="Dossier valide:" name="Dossier_valide" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={inputValue.Dossier_valide} onChange={handleChange} />
                        <Select label="Status:" name="Status" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={inputValue.Status} onChange={handleChange} />
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md
                                                        md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            Envoyer
                        </button>
                    </div>
            </form>
        </>
    );
};

export default EditClient