import { Style, Nav_Item, Facture_Impayees_item, Facture_payees_Item, Avoires_Item } from "../index";
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
    const clientInvoices = FactureVenteList ? FactureVenteList.filter(invoice => invoice.id === clientId) : [];

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

                        {openTable === 'Facturepayees' && (
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

                        {openTable === 'Paiement' && (
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Nav;
