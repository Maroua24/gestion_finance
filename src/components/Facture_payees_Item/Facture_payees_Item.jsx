import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from 'react';
import { FaCircleDollarToSlot } from "react-icons/fa6";


const Facture_payees_Item = (props) => {

    const id = props.id;
    const clientId = parseInt(id);

    const FactureVenteList = useSelector(state => state.FactureVenteList.FactureVenteList);
    const isLoading = useSelector(state => state.FactureVenteList.isLoading);
    const clientInvoices = FactureVenteList ? FactureVenteList.filter(invoice => invoice.id === clientId) : [];

    return (
        <>
        <div className="w-full">
            <div className="inline-block w-full" onClick={props.onToggle}>
                <p className="m-3 p-2 border border-slate-50 cursor-pointer hover:bg-[#143C60]">
                    <b>
                        <Link to={props.link} className="text-[#143C60] hover:text-[--light-color]">
                            Facture payees
                        </Link>
                    </b>
                </p>
            </div>

            {props.isOpen && (
            <div className="w-full">
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
                            {  isLoading ?
                            <tr>
                                <td class="d-flex align-items-center text-primary md:text-2xl lg:text-3xl">
                                <strong>Loading...</strong>
                                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                </td>
                            </tr>
                            :
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
                            ))}
                        </tbody>
                    </table>
                
            </div>
            )}
            </div>
        </>
    );
}

export default Facture_payees_Item;
