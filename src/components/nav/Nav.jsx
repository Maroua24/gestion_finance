import { Style, Nav_Item, Facture_Impayees_item, Facture_payees_Item, Avoires_Item,Nav_Table } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const Nav = (props) => {
    const [openTable, setOpenTable] = useState(null);

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

    // const CommandeList = useSelector(state => state.CommandeList.CommandeList);
    // const clientCommande = CommandeList ? CommandeList.filter(invoice => invoice.id === clientId) : [];

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
                            <Nav_Table API={Facture_client} />)}

                        {openTable === 'Facturepayees' && (
                            <Nav_Table API={FactureImpayees} />)}

                        {openTable === 'Avoires' && (
                            <Nav_Table API={clientAvoires} />)}

                        {openTable === 'Paiement' && (
                            <Nav_Table API={Facture_client} />)}

                        {openTable === 'Commande' && (
                            <Nav_Table API={Facture_client} />)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Nav;
