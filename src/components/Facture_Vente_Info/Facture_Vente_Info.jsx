import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Info,Menu,Style} from "../index"

const Facture_Vente_Info = () => {
    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    return (

            <div >
                <Style>
                    <Menu/>
                    <div>
                <h2 className="shadow-lg p-3 text-[#071F90] m-3 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                    <b>Les informations de facture :</b>
                </h2>

                <div className="md:flex">
                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="ID : " API={client.id}/>
                    <Info name="facture id : " API={client.name}/>
                    <Info name="ligne de commande : " API={client.company.name}/>
                    <Info name="client : " API={client.company.catchPhrase}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Date de creation : " API={client.phone}/>
                    <Info name="Date de comptabilisation : " API={client.username}/>
                </div>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Etat : " API={client.company.name}/>
                </div>

                </div>

                </Style>
        </div>

    );
};

export default Facture_Vente_Info;
