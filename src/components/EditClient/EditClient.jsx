import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";


const EditClient = () => {


    const { id } = useParams();
    const ClientId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === ClientId));


    // const {
    //     Categorie_de_compte,
    //     Sigle,
    //     Raison_sociale,
    //     Code_TVA,
    //     Nature_du_compte,
    //     NIF,
    //     NIS,
    //     Registre_de_commerce,
    //     Article_dimposition,
    //     Devise,
    //     Rue,
    //     Ville,
    //     Region,
    //     Type_de_region,
    //     Code_postal,
    //     Pays,
    //     Telephone,
    //     Email,
    //     Secteur_dactivite,
    //     Condition_de_paiement,
    //     Cre_le,
    //     Cre_par,
    //     Nom,
    //     Prenom,
    //     Fonction,
    //     Type_de_client,
    //     Fax,
    //     Dossier_valide,
    //     Status,
    // } = existingClient[0];

    // const [inputValue, setInputValue] = useState({
    //     Categorie_de_compte,
    //     Raison_sociale,
    //     Sigle,
    //     Code_TVA,
    //     Nature_du_compte,
    //     NIF,
    //     NIS,
    //     Registre_de_commerce,
    //     Article_dimposition,
    //     Devise,
    //     Rue,
    //     Ville,
    //     Region,
    //     Type_de_region,
    //     Code_postal,
    //     Pays,
    //     Telephone,
    //     Email,
    //     Secteur_dactivite,
    //     Condition_de_paiement,
    //     Cre_le,
    //     Cre_par,
    //     Nom,
    //     Prenom,
    //     Fonction,
    //     Type_de_client,
    //     Fax,
    //     Dossier_valide,
    //     Status,
    // });


    return (
        <>
        <Menu/>



        <form   method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-xl
                                md:text-2xl lg:text-5xl">
                    Modifier les informations du client
                </h1>
                <div style={{ display: "block" }}>
                    <Select name="Categorie_de_compte" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={client.id} />

                    <Style>
                        <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={client.name}  />
                        <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={client.id} />
                    </Style>

                    <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={client.username} />
                    <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={client.name} />

                    <Style>
                        <Input label="NIF:" name="NIF" type="text" id="NIF"  value={234} />
                        <Input label="NIS:" name="NIS" type="text" id="NIS" value={567} />
                    </Style>

                    </div>
            </form>



        {/* <form   method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] text-3xl m-3">Modifier les informations du client</h1>
                <div style={{ display: "block" }}>
                    <Select name="Categorie_de_compte" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={Categorie_de_compte} />

                    <Style>
                        <Input label="Raison sociale:" name="Raison_sociale" type="text" id="Raison_sociale" value={Raison_sociale}  />
                        <Input label="Sigle:" name="Sigle" type="text" id="Sigle" value={Sigle} />
                    </Style>

                    <Input label="Code TVA:" name="Code_TVA" type="text" id="Code_TVA"  value={Code_TVA} />
                    <Input label="Nature du compte:" name="Nature_du_compte" type="text" id="Nature_du_compte"  value={Nature_du_compte} />

                    <Style>
                        <Input label="NIF:" name="NIF" type="text" id="NIF"  value={NIF} />
                        <Input label="NIS:" name="NIS" type="text" id="NIS" value={NIS} />
                    </Style>

                    <Input label="Registre de commerce:" name="Registre de commerce" type="text" id="Registre_de_commerce"  value={Registre_de_commerce} />
                    <Input label="Article d'imposition:" name="Article_dimposition" type="text" id="Article_imposition" value={Article_dimposition}  />
                    <Input label="Devise:" name="Devise" type="text" id="Devise" value={Devise} />

                    <Style>
                        <Input label="Rue:" name="Rue" type="text" id="Rue" value={Rue}  />
                        <Input label="Ville:" name="Ville" type="text" id="Ville" value={Ville} />
                    </Style>

                    <Style>
                        <Input label="Region:" name="Region" type="text" id="Region" value={Region} />
                        <Input label="Type de region:" name="Type_de_region" type="text" id="Type_de_region" value={Type_de_region} />
                    </Style>

                    <Style>
                        <Input label="Code postal:" name="Code_postal" type="text" id="Code_postal" value={Code_postal} />
                        <Input label="Pays:" name="Pays" type="text" id="Pays" value={Pays} />
                    </Style>

                        <Input label="Telephone:" name="Telephone" type="text" id="Telephone" value={Telephone} />
                        <Input label="Email:" name="Email" type="email" id="Email" value={Email} />

                        <Input label="Secteur d'activite:" name="Secteur_activite" type="text" id="Secteur_activite" value={Secteur_dactivite}  />
                        <Input label="Condition de paiement:" name="Condition_de_paiement" type="text" id="Condition_de_paiement" value={Condition_de_paiement} />

                    <Style>
                        <Input label="Cre le:" name="Cre_le" type="date" id="Cre_le" value={Cre_le} />
                        <Input label="Cre par:" name="Cre_par" type="text" id="Cre_par" value={Cre_par} />
                    </Style>

                    <Input label="Nom:" name="Nom" type="text" id="Nom" value={Nom} />
                    <Input label="Prenom:" name="Prenom" type="text" id="Prenom" value={Prenom} />

                    <Style>
                        <Input label="Fonction:" name="Fonction" type="text" id="Fonction" value={Fonction} />
                        <Input label="Type de client:" name="Type_de_client" type="text" id="Type_de_client" value={Type_de_client} />
                    </Style>

                    <Input label="Fax:" name="Fax" type="text" id="Fax" value={Fax} />

                        <Select label="Dossier valide:" name="Dossier_valide" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={Dossier_valide} />
                        <Select label="Status:" name="Status" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={Status} />
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md">Envoyer</button>
                    </div>
            </form> */}
        </>
    );
};

export default EditClient