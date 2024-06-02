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
        fetch(`http://127.0.0.1:8000/api/avoir_vente/${id}`, requestOptions)
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
                <Info name="ID : " API={clientInvoices.client}/>
                    <Info name="facture id : " API={clientInvoices.facture_id}/>
                    <Info name="ligne de commande : " API={clientInvoices.commande_ligne}/>
                    <Info name="client : " API={clientInvoices.nom}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                <Info name="Date de creation : " API={clientInvoices.date_creation}/>
                    <Info name="Date de comptabilisation : " API={clientInvoices.date_comptabilisation}/>
                </div>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Etat : " API={clientInvoices.non_payee}/>
                </div>

                </div>

                </Style>
        </div>

    );
};

export default Facture_Vente_Info;
