import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";


const EditClient = () => {


    const { id } = useParams();
    const ClientId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === ClientId));
    const dispatch = useDispatch();

    const {
        Categorie_de_compte,
        Sigle,
        Raison_sociale,
        Code_TVA,
        Nature_du_compte,
        NIF,
        NIS,
        Registre_de_commerce,
        Article_dimposition,
        Devise,
        Rue,
        Ville,
        Region,
        Type_de_region,
        Code_postal,
        Pays,
        Telephone,
        email,
        Secteur_dactivite,
        Condition_de_paiement,
        Cre_le,
        Cre_par,
        Nom,
        Prenom,
        Fonction,
        Type_de_client,
        Fax,
        Dossier_valide,
        Status,
    } = client;

    const [inputValue, setInputValue] = useState({
        Categorie_de_compte,
        Raison_sociale,
        Sigle,
        Code_TVA,
        Nature_du_compte,
        NIF,
        NIS,
        Registre_de_commerce,
        Article_dimposition,
        Devise,
        Rue,
        Ville,
        Region,
        Type_de_region,
        Code_postal,
        Pays,
        Telephone,
        email,
        Secteur_dactivite,
        Condition_de_paiement,
        Cre_le,
        Cre_par,
        Nom,
        Prenom,
        Fonction,
        Type_de_client,
        Fax,
        Dossier_valide,
        Status,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateClient(ClientId, inputValue));
    };
    return (
        <>
        <Menu/>
        <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] text-3xl m-3">Modifier les informations du client</h1>
                <div style={{ display: "block" }}>
                    <Select name="Categorie_de_compte" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={Categorie_de_compte} onChange={handleChange} />

                    <Style>
                        <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={Raison_sociale}  onChange={handleChange} />
                        <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={Sigle} onChange={handleChange} />
                    </Style>

                    <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={Code_TVA} onChange={handleChange} />
                    <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={Nature_du_compte} onChange={handleChange} />

                    <Style>
                        <Input label="NIF:" name="NIF" type="text" id="NIF"  value={NIF} onChange={handleChange} />
                        <Input label="NIS:" name="NIS" type="text" id="NIS" value={NIS} onChange={handleChange} />
                    </Style>

                    <Input label="Registre de commerce:" name="Registre de commerce" type="text" id="Registre_de_commerce"  value={Registre_de_commerce} onChange={handleChange} />
                    <Input label="Article d'imposition:" name="Article_dimposition" type="text" id="Article_imposition" value={Article_dimposition}  onChange={handleChange} />
                    <Input label="Devise:" name="Devise" type="text" id="Devise" value={Devise} onChange={handleChange} />

                    <Style>
                        <Input label="Rue:" name="Rue" type="text" id="Rue" value={Rue}  onChange={handleChange} />
                        <Input label="Ville:" name="Ville" type="text" id="Ville" value={Ville} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Region:" name="Region" type="text" id="Region" value={Region} onChange={handleChange} />
                        <Input label="Type de region:" name="Type_de_region" type="text" id="Type_de_region" value={Type_de_region} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Code postal:" name="Code_postal" type="text" id="Code_postal" value={Code_postal} onChange={handleChange} />
                        <Input label="Pays:" name="Pays" type="text" id="Pays" value={Pays} onChange={handleChange} />
                    </Style>

                        <Input label="Telephone:" name="Telephone" type="text" id="Telephone" value={Telephone} onChange={handleChange} />
                        <Input label="Email:" name="Email" type="email" id="Email" value={email} onChange={handleChange} />

                        <Input label="Secteur d'activite:" name="Secteur_activite" type="text" id="Secteur_activite" value={Secteur_dactivite}  onChange={handleChange} />
                        <Input label="Condition de paiement:" name="Condition_de_paiement" type="text" id="Condition_de_paiement" value={Condition_de_paiement} onChange={handleChange} />

                    <Style>
                        <Input label="Cre le:" name="Cre_le" type="date" id="Cre_le" value={Cre_le} onChange={handleChange} />
                        <Input label="Cre par:" name="Cre_par" type="text" id="Cre_par" value={Cre_par} onChange={handleChange} />
                    </Style>

                    <Input label="Nom:" name="Nom" type="text" id="Nom" value={Nom} onChange={handleChange} />
                    <Input label="Prenom:" name="Prenom" type="text" id="Prenom" value={Prenom} onChange={handleChange} />

                    <Style>
                        <Input label="Fonction:" name="Fonction" type="text" id="Fonction" value={Fonction} onChange={handleChange} />
                        <Input label="Type de client:" name="Type_de_client" type="text" id="Type_de_client" value={Type_de_client} onChange={handleChange} />
                    </Style>

                    <Input label="Fax:" name="Fax" type="text" id="Fax" value={Fax} onChange={handleChange} />

                        <Select label="Dossier valide:" name="Dossier_valide" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={Dossier_valide} onChange={handleChange} />
                        <Select label="Status:" name="Status" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={Status} onChange={handleChange} />
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md">Envoyer</button>
                    </div>
            </form>
        </>
    );
};

export default EditClient