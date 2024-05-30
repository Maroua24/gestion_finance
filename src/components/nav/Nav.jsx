import { Style, Nav_Item, Facture_Impayees_item, Facture_payees_Item, Avoires_Item,Nav_Table } from "../index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { getAll } from "../../Redux/API/GetAll";
import { getAllCommandes } from "../../Redux/API/Get_All_Commandes";
const Nav = (props) => {
    const [openTable, setOpenTable] = useState(null);
    const dispatch = useDispatch();

    const handleToggleTable = (table) => {
        setOpenTable(prevTable => (prevTable === table ? null : table));
    }

    const id = props.id;
    const clientId = parseInt(id);

    const FactureVenteList = useSelector(state => state.FactureVenteList.FactureVenteList);
    const Facture_client = FactureVenteList ? FactureVenteList.filter(invoice => invoice.id === clientId) : [];

    const FactureImpayeesList = useSelector(state => state.FactureImpayeesList.FactureImpayeesList);
    const FactureImpayees = FactureImpayeesList ? FactureImpayeesList.filter(invoice => invoice.id === clientId) : [];

    const AvoiresList = useSelector(state => state.AvoiresReducerList.AvoiresList);
    const clientAvoires = AvoiresList ? AvoiresList.filter(invoice => invoice.id === clientId) : [];

    const CommandeList = useSelector(state => state.CommandesList.CommandesList);
    const clientCommande = CommandeList ? CommandeList.filter(invoice => invoice.id === clientId) : [];

    useEffect(()=>{
        //dispatch(getAll("http://127.0.0.1:8000/api/clients/"));
        dispatch(getAllCommandes());
    },[dispatch]);
    return (
        <>
            <table className="w-full">
                <thead>
                    <tr colSpan="5">
                        <td>
                            <Nav_Item onClick={() => handleToggleTable('FactureImpayees')}
                            label="Facture impayees" />
                        </td>
                        <td>
                            <Nav_Item onClick={() => handleToggleTable('Facturepayees')}
                            label="Facture payees" />
                        </td>
                        <td>
                            <Nav_Item onClick={() => handleToggleTable('Avoires')}
                            label="Avoires" />
                        </td>
                        <td>
                            <Nav_Item onClick={() => handleToggleTable('Paiement')}
                            label="Paiement" />
                        </td>
                        <td>
                            <Nav_Item onClick={() => handleToggleTable('Commande')}
                            label="Commande" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5">
                        {openTable === 'FactureImpayees' && (
                            <Nav_Table API={Facture_client}  />)}

                        {openTable === 'Facturepayees' && (
                            <Nav_Table API={FactureImpayees} />)}

                        {openTable === 'Avoires' && (
                            <Nav_Table API={clientAvoires} />)}

                        {openTable === 'Paiement' && (
                            <Nav_Table API={Facture_client} />)}

                        {openTable === 'Commande' && (
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
                                        clientCommande.map(Commande => (
                                            <tr key={Commande.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                                <td className="pl-6">{Commande.userId}</td>
                                                <td className="p-3">{Commande.id}</td>
                                                <td>{Commande.title}</td>
                                                <td>{Commande.date_decheance}</td>
                                                <td>{Commande.non_payée}</td>
                                                <td>
                                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                            sm:text-sm md:text-xl lg:text-2xl
                                                            xl:text-3xl 2xl:text-4xl'>
                                                        <Link to={`/Add_payment/${Commande.id}`}>
                                                            <FaCircleDollarToSlot />
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Nav;
