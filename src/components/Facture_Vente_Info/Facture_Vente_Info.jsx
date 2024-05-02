import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {Nav,Info,Menu,Style} from "../index"

const Facture_Vente_Info = () => {
    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    return (

            <div className="">
                <Style>
                    <Menu/>
                    <div>
                <h2 className="shadow-md p-3 text-[#071F90] m-3 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                    <b>Les informations du facture :</b>
                </h2>

                <div class="animate-bounce w-[200px] cursor-pointer ml-[50%]">
                    <FaRegArrowAltCircleDown className="w-9 h-9 text-blue-800" />
                </div>

                <div className="md:flex">
                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="ID : " API={client.id}/>
                    <Info name="Nom : " API={client.company.name}/>
                    <Info name="Prenom : " API={client.company.catchPhrase}/>
                    <Info name="Email : " API={client.email}/>
                    <Info name="Telephone : " API={client.phone}/>
                </div>

                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Categorie de compte : " API={client.name}/>
                    <Info name="Nature du compte : " API={client.phone}/>
                    <Info name="Raison sociale : " API={client.username}/>
                    <Info name="Registre de commerce : " API={client.company.name}/>
                </div>
                </div>

                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Sigle : " API={client.email}/>
                    <Info name="Code TVA : " API={client.website}/>
                    <Info name="NIF : " API={client.company.name}/>
                    <Info name="NIS : " API={client.company.catchPhrase}/>
                </div>

                <div className="md:flex">
                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Article imposition : " API={client.id}/>
                    <Info name="Devise : " API={client.name}/>
                    <Info name="Code postal : " API={client.company.name}/>
                    <Info name="Secteur activite : " API={client.name}/>
                    <Info name="Condition de paiement : " API={client.username}/>
                </div>

                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Rue : " API={client.username}/>
                    <Info name="Ville : " API={client.email}/>
                    <Info name="Region : " API={client.website}/>
                    <Info name="Type de region : " API={client.phone}/>
                    <Info name="Pays : " API={client.company.catchPhrase}/>
                </div>
                </div>

                <div className="md:flex">
                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Sigle : " API={client.email}/>
                    <Info name="Cre le : " API={client.website}/>
                    <Info name="Cre par : " API={client.phone}/>
                    <Info name="Fonction : " API={client.company.name}/>
                </div>

                <div className="shadow-md rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Type de client : " API={client.website}/>
                    <Info name="Fax : " API={client.phone}/>
                    <Info name="Dossier valide : " API={client.company.name}/>
                    <Info name="valid : " API={client.company.catchPhrase}/>
                </div>
                </div>
                <Nav/>
                </div>

                </Style>
</div>
    );
};

export default Facture_Vente_Info;
