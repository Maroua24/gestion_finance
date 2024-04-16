import { Select, Input , Style,Menu} from "../index"
import { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch ,useSelector} from "react-redux";
// import { addClient } from "../../Redux/ClientReduser";
import { useNavigate } from 'react-router-dom'

const AddClient = () => {
    const [Categorie_de_compte, setCategorie_de_compte] = useState("");
    const [Raison_sociale, setRaison_sociale] = useState("");
    const [Sigle, setSigle] = useState("");
    const [Code_TVA, setCode_TVA] = useState("");
    const [Nature_du_compte, setNature_du_compte] = useState("");
    const [NIF, setNIF] = useState("");
    const [NIS, setNIS] = useState("");
    const [Registre_de_commerce, setRegistre_de_commerce] = useState("");
    const [Article_imposition, setArticle_imposition] = useState("");
    const [Devise, setDevise] = useState("");
    const [Rue, setRue] = useState("");
    const [Ville, setVille] = useState("");
    const [Region, setRegion] = useState("");
    const [Type_de_region, setType_de_region] = useState("");
    const [Code_postal, setCode_postal] = useState("");
    const [Pays, setPays] = useState("");
    const [Telephone, setTelephone] = useState("");
    const [Email, setEmail] = useState("");
    const [Secteur_activite, setSecteur_activite] = useState("");
    const [Condition_de_paiement, setCondition_de_paiement] = useState("");
    const [Cre_le, setCre_le] = useState("");
    const [Cre_par, setCre_par] = useState("");
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Fonction, setFonction] = useState("");
    const [Type_de_client, setType_de_client] = useState("");
    const [Fax, setFax] = useState("");
    const [Dossier_valide, setDossier_valide] = useState("");
    const [valid, setvalid] = useState("");


    return (
        <>
           <Menu/>
            <form  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--light-color] text-2xl">Ajouter un client:</h1>
                {/* {% csrf_token %}  */}
                <div style={{ display: "block" }}>
                    <Select name="Categorie de compte :" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Categorie_de_compte " value={Categorie_de_compte} onChange={e => setCategorie_de_compte(e.target.value)}/>

                    <Style>
                        <Input name="Raison sociale :" type="text" id="Raison_sociale" value={Raison_sociale} onChange={e => setRaison_sociale(e.target.value)} />
                        <Input name="Sigle :" type="text" id="Sigle" value={Sigle} onChange={e => setSigle(e.target.value)}/>
                    </Style>

                    <Input name="Code TVA :" type="text" id="Code_TVA"  value={Code_TVA} onChange={e => setCode_TVA(e.target.value)}/>
                    <Input name="Nature du compte :" type="text" id="Nature_du_compte"  value={Nature_du_compte} onChange={e => setNature_du_compte(e.target.value)}/>

                    <Style>
                        <Input name="NIF :" type="text" id="NIF"  value={NIF} onChange={e => setNIF(e.target.value)}/>
                        <Input name="NIS :" type="text" id="NIS" value={NIS} onChange={e => setNIS(e.target.value)}/>
                    </Style>

                    <Input name="Registre de commerce :" type="text" id="Registre_de_commerce"  value={Registre_de_commerce} onChange={e => setRegistre_de_commerce(e.target.value)}/>
                    <Input name="Article d'imposition :" type="text" id="Article_imposition" value={Article_imposition}  onChange={e => setArticle_imposition(e.target.value)}/>
                    <Input name="Devise :" type="text" id="Devise" value={Devise} onChange={e => setDevise(e.target.value)}/>

                    <Style>
                        <Input name="Rue :" type="text" id="Rue" value={Rue}  onChange={e => setRue(e.target.value)}/>
                        <Input name="Ville :" type="text" id="Ville" value={Ville} onChange={e => setVille(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Region :" type="text" id="Region" value={Region} onChange={e => setRegion(e.target.value)}/>
                        <Input name="Type de region :" type="text" id="Type_de_region" value={Type_de_region} onChange={e => setType_de_region(e.target.value)}/>

                    </Style>

                    <Style>
                        <Input name="Code postal :" type="text" id="Code_postal" value={Code_postal} onChange={e => setCode_postal(e.target.value)}/>
                        <Input name="Pays :" type="text" id="Pays" value={Pays} onChange={e => setPays(e.target.value)}/>
                    </Style>

                        <Input name="Telephone :" type="text" id="Telephone" value={Telephone} onChange={e => setTelephone(e.target.value)}/>
                        <Input name="Email :" type="email" id="Email" value={Email} onChange={e => setEmail(e.target.value)}/>

                        <Input name="Secteur d'activite :" type="text" id="Secteur_activite" value={Secteur_activite}  onChange={e => setSecteur_activite(e.target.value)}/>
                        <Input name="Condition de paiement :" type="text" id="Condition_de_paiement" value={Condition_de_paiement} onChange={e => setCondition_de_paiement(e.target.value)}/>

                    <Style>
                        <Input name="Cre le :" type="date" id="Cre_le" value={Cre_le} onChange={e => setCre_le(e.target.value)}/>
                        <Input name="Cre par :" type="text" id="Cre_par" value={Cre_par} onChange={e => setCre_par(e.target.value)}/>
                    </Style>

                    <Input name="Nom :" type="text" id="Nom" value={Nom} onChange={e => setNom(e.target.value)}/>
                    <Input name="Prenom :" type="text" id="Prenom" value={Prenom} onChange={e => setPrenom(e.target.value)}/>

                    <Style>
                        <Input name="Fonction :" type="text" id="Fonction" value={Fonction} onChange={e => setFonction(e.target.value)}/>
                        <Input name="Type de client :" type="text" id="Type_de_client" value={Type_de_client} onChange={e => setType_de_client(e.target.value)}/>
                    </Style>

                    <Input name="Fax :" type="text" id="Fax" value={Fax} onChange={e => setFax(e.target.value)}/>

                        <Select name="Dossier valide :" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={Dossier_valide} onChange={e => setDossier_valide(e.target.value)}/>
                        <Select name="Status:" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={valid} onChange={e => setvalid(e.target.value)}/>
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md">Envoyer</button>
                    </div>
            </form>
        </>
    );
};

export default AddClient