import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Info,Menu,Style,Nav_Item,Nav_Table} from "../index"
import { FaCircleDollarToSlot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { useState ,useEffect} from "react";

const Facture_Vente_Info = () => {
    const [openTable, setOpenTable] = useState(null);
    const [Avoires, setAvoires] = useState();

    const handleToggleTable = (table) => {
        setOpenTable(prevTable => (prevTable === table ? null : table));
    }

    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    const FactureVenteList = useSelector(state => state.FactureVenteList.FactureVenteList);
    const clientInvoices = FactureVenteList ? FactureVenteList.filter(invoice => invoice.id === clientId) : [];

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setAvoires(result);
                } else {
                    setAvoires([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setAvoires([]);
            });
    }, [id]);
    return (

            <div >
                <Style>
                    <Menu/>
                    <div>
                <h2 className="shadow-lg p-3 text-[#071F90] m-3 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                    <b>Les informations de facture :</b>
                </h2>
                <div>
                    <Nav_Item onClick={() => handleToggleTable('Avoires')}
                        label="Avoires" />
                        {openTable === 'Avoires' && (
                            <Nav_Table API={clientInvoices} />)}
                </div>
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
