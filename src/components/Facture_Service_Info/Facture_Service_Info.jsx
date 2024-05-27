import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Info,Menu,Style,Nav_Item} from "../index"
import { useState } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import {Link} from "react-router-dom"


const Facture_Service_Info = () => {
    const [openTable, setOpenTable] = useState(null);

    const handleToggleTable = (table) => {
        setOpenTable(prevTable => (prevTable === table ? null : table));
    }

    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    const FactureVenteList = useSelector(state => state.FactureVenteList.FactureVenteList);
    const clientInvoices = FactureVenteList ? FactureVenteList.filter(invoice => invoice.id === clientId) : [];

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
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date Creation</th>
                                        <th>Date Comptabilisation</th>
                                        <th>Date Decheance</th>
                                        <th>Non Payée</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clientInvoices.map(invoice => (
                                            <tr key={invoice.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                                <td className="pl-6">{invoice.id}</td>
                                                <td className="p-3">{invoice.date_creation}</td>
                                                <td>{invoice.date_comptabilisation}</td>
                                                <td>{invoice.date_decheance}</td>
                                                <td>{invoice.non_payée}</td>
                                                <td>
                                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                            sm:text-sm md:text-xl lg:text-2xl
                                                            xl:text-3xl 2xl:text-4xl'>
                                                        <Link to={`/Add_payment/${invoice.id}`}>
                                                            <FaCircleDollarToSlot />
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>)}
                </div>
                <div className="md:flex">
                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="ID : " API={client.id}/>
                    <Info name="facture id : " API={123}/>
                    <Info name="ligne de commande : " API={3344}/>
                    <Info name="client : " API={client.name}/>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Date de creation : " API={"13/03/2018"}/>
                    <Info name="Date de comptabilisation : " API={"20/02/2020"}/>
                </div>
                </div>

                <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    <Info name="Etat : " API={"false"}/>
                </div>

                </div>

                </Style>
        </div>

    );
}

export default Facture_Service_Info