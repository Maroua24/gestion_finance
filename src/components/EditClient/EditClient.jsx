import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {UpdateClient} from "../../Redux/API/Update_Client"

const EditClient = () => {


    const { id } = useParams();
    const ClientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === ClientId));
    const error = useSelector(state => state.ClientList.error);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        categorie_compte: client ? client.categorie_compte : '',
        raison_sociale: client ? client.raison_sociale : '',
        sigle: client ? client.sigle : '',
        code_tva: client ? client.code_tva : '',
        nature_compte: client ? client.nature_compte : '',
        nif: client ? client.nif : '',
        nis: client ? client.nis : '',
        registre_commerce: client ? client.registre_commerce : '',
        article_imposition: client ? client.article_imposition : '',
        devise: client ? client.devise : '',
        rue: client ? client.rue : '',
        ville: client ? client.ville : '',
        region: client ? client.region : '',
        type_de_region: client ? client.type_de_region : '',
        code_postale: client ? client.code_postale : '',
        pays: client ? client.pays : '',
        telephone: client ? client.telephone : '',
        email: client ? client.email : '',
        secteur_activite: client ? client.secteur_activite : '',
        condition_paiement: client ? client.condition_paiement : '',
        nom: client ? client.nom : '',
        prenom: client ? client.prenom : '',
        fonction: client ? client.fonction : '',
        type_client: client ? client.type_client : '',
        fax: client ? client.fax : '',
        dossier_valide: client ? client.dossier_valide : '',
        statut: client ? client.statut : '',
        est_vip: client ? client.est_vip : '',
    });

    useEffect(() => {
        if (client) {
            // console.log("Client data:", client);
            setInputValue({
                categorie_compte: client.categorie_compte,
                raison_sociale: client.raison_sociale,
                sigle: client.sigle,
                code_tva: client.code_tva,
                nature_compte: client.nature_compte,
                nif: client.nif,
                nis: client.nis,
                registre_commerce: client.registre_commerce,
                article_imposition: client.article_imposition,
                devise: client.devise,
                rue: client.rue,
                ville: client.ville,
                region: client.region,
                type_de_region: client.type_de_region,
                code_postale: client.code_postale,
                pays: client.pays,
                telephone: client.telephone,
                email: client.email,
                secteur_activite: client.secteur_activite,
                condition_paiement: client.condition_paiement,
                nom: client.nom,
                prenom: client.prenom,
                fonction: client.fonction,
                type_client: client.type_client,
                fax: client.fax,
                dossier_valide: client.dossier_valide,
                statut: client.statut,
                est_vip: client.est_vip,
            });
        }
    }, [client]);

    const handleChange = (e) => {
        // const { name, value } = e.target;
        setInputValue({ ...inputValue, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue)
        dispatch(UpdateClient({ClientId, inputValue} ));
    };

    return (
        <>
        <Menu/>
        <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] text-3xl m-3">Modifier les informations du client</h1>
                {error && (
                    <div className="p-4 mb-4 text-red-700 bg-red-100 border border-red-700">
                        {error}
                    </div>
                )}
                <div style={{ display: "block" }}>
                <Select label="Categorie du compte" name="categorie_compte" value_1="Client" value_2="Supplier" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={inputValue.categorie_compte} onChange={handleChange}/>

                    <Style>
                        <Input label="Raison sociale:" name="raison_sociale" type="text" id="raison_sociale" value={inputValue.raison_sociale}  onChange={handleChange} />
                        <Input label="Sigle:" name="sigle" type="text" id="sigle" value={inputValue.sigle} onChange={handleChange} />
                    </Style>

                    <Input label="Code TVA:" name="code_tva" type="text" id="code_tva"  value={inputValue.code_tva} onChange={handleChange} />
                    <Input label="Nature du compte:" name="nature_compte" type="text" id="nature_compte"  value={inputValue.nature_compte} onChange={handleChange} />

                    <Style>
                        <Input label="NIF:" name="nif" type="text" id="nif"  value={inputValue.nif} onChange={handleChange} />
                        <Input label="NIS:" name="nis" type="text" id="nis" value={inputValue.nis} onChange={handleChange} />
                    </Style>

                    <Input label="Registre de commerce:" name="registre_commerce" type="text" id="registre_commerce"  value={inputValue.registre_commerce} onChange={handleChange} />
                    <Input label="Article d'imposition:" name="article_imposition" type="text" id="article_imposition" value={inputValue.article_imposition}  onChange={handleChange} />
                    <Input label="Devise:" name="devise" type="text" id="devise" value={inputValue.devise} onChange={handleChange} />

                    <Style>
                        <Input label="Rue:" name="rue" type="text" id="rue" value={inputValue.rue}  onChange={handleChange} />
                        <Input label="Ville:" name="ville" type="text" id="ville" value={inputValue.ville} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Region:" name="region" type="text" id="region" value={inputValue.region} onChange={handleChange} />
                        <Input label="Type de region:" name="type_de_region" type="text" id="type_de_region" value={inputValue.type_de_region} onChange={handleChange} />
                    </Style>

                    <Style>
                        <Input label="Code postal:" name="code_postale" type="text" id="code_postale" value={inputValue.code_postale} onChange={handleChange} />
                        <Input label="Pays:" name="pays" type="text" id="pays" value={inputValue.pays} onChange={handleChange} />
                    </Style>

                        <Input label="Telephone:" name="telephone" type="text" id="telephone" value={inputValue.telephone} onChange={handleChange} />
                        <Input label="Email:" name="email" type="email" id="email" value={inputValue.email} onChange={handleChange} />

                        <Input label="Secteur d'activite:" name="secteur_activite" type="text" id="secteur_activite" value={inputValue.secteur_activite}  onChange={handleChange} />
                        <Input label="Condition de paiement:" name="condition_paiement" type="text" id="condition_paiement" value={inputValue.condition_paiement} onChange={handleChange} />

                    <Input label="Nom:" name="nom" type="text" id="nom" value={inputValue.nom} onChange={handleChange} />
                    <Input label="Prenom:" name="prenom" type="text" id="prenom" value={inputValue.prenom} onChange={handleChange} />

                    <Style>
                        <Input label="Fonction:" name="fonction" type="text" id="fonction" value={inputValue.fonction} onChange={handleChange} />
                        <Input label="Type de client:" name="type_client" type="text" id="type_client" value={inputValue.type_client} onChange={handleChange} />
                    </Style>

                    <Input label="Fax:" name="fax" type="text" id="fax" value={inputValue.fax} onChange={handleChange} />

                    <Select label="Dossier valide:" name="dossier_valide" value_1="Valide" value_2="Non valide" choix1="oui" choix2="Non" id="dossier_valide" value={inputValue.dossier_valide} onChange={handleChange}/>
                        <Select label="Status:" name="status" value_1="Active" value_2="Inactive" choix1="Active" choix2="Inactive" id="status" value={inputValue.statut} onChange={handleChange}/>
                        <Select label="VIP" name="est_vip" value_1="False" value_2="True" choix1="Non VIP" choix2="VIP" id="est_vip" value={inputValue.est_vip} onChange={handleChange}/>
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