import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {Nav,Info,Menu,Style} from "../index"


const ClientInfo = () => {
    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    return (
        <>
            <div className="">
                <Style>
                    <Menu/>
                    <div>
                <h2 className="shadow-lg p-3 text-[#071F90] m-3 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                    <b>Information du client:</b>
                </h2>
                <Nav id={client.id}/>
                <div className="md:flex">
                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="ID : " API={client.id}/>
                    <Info name="Nom : " API={client.nom}/>
                    <Info name="Prenom : " API={client.prenom}/>
                    <Info name="Email : " API={client.email}/>
                    <Info name="Telephone : " API={client.telephone}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Categorie de compte : " API={client.categorie_compte}/>
                    <Info name="Nature du compte : " API={client.nature_compte}/>
                    <Info name="Raison sociale : " API={client.raison_sociale}/>
                    <Info name="Registre de commerce : " API={client.registre_commerce}/>
                </div>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Sigle : " API={client.sigle}/>
                    <Info name="Code TVA : " API={client.code_tva}/>
                    <Info name="NIF : " API={client.company.nif}/>
                    <Info name="NIS : " API={client.nis}/>
                </div>

                <div className="md:flex">
                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Article imposition : " API={client.article_imposition}/>
                    <Info name="Devise : " API={client.devise}/>
                    <Info name="Code postal : " API={client.code_postale}/>
                    <Info name="Secteur activite : " API={client.secteur_activite}/>
                    <Info name="Condition de paiement : " API={client.condition_paiement}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Rue : " API={client.rue}/>
                    <Info name="Ville : " API={client.ville}/>
                    <Info name="Region : " API={client.region}/>
                    <Info name="Type de region : " API={client.type_de_region}/>
                    <Info name="Pays : " API={client.pays}/>
                </div>
                </div>

                <div className="md:flex">
                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Sigle : " API={client.sigle}/>
                    <Info name="Cre le : " API={client.creer_par}/>
                    <Info name="Cre par : " API={client.cree_le}/>
                    <Info name="Fonction : " API={client.fonction}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Type de client : " API={client.type_client}/>
                    <Info name="Fax : " API={client.fax}/>
                    <Info name="Dossier valide : " API={client.dossier_valide}/>
                    <Info name="VIP : " API={client.est_vip}/>
                </div>
                </div>
                </div>

                </Style>
</div> 
</>
    );
};

export default ClientInfo;
