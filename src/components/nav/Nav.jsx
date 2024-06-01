import {Nav_Item,Nav_Table } from "../index";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { FaCircleDollarToSlot } from "react-icons/fa6";


const Nav = ({id}) => {
    const [openTable, setOpenTable] = useState(null);
    const [Facture, setFacture] = useState([]);
    const [FactureImpayees, setFactureImpayees] = useState([]);
    const [Avoires, setAvoires] = useState([]);
    const [Paiement, setPaiement] = useState([]);
    const [Commandes, setCommandes] = useState([]);

    // const dispatch = useDispatch();

    const handleToggleTable = (table) => {
        setOpenTable(prevTable => (prevTable === table ? null : table));
    }

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/factures/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setFacture(result);
                } else {
                    setFacture([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setFacture([]);
            });
    }, [id]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/factures/non-payee/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setFactureImpayees(result);
                } else {
                    setFactureImpayees([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setFactureImpayees([]);
            });
    }, [id]);

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

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/paiements/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setPaiement(result);
                } else {
                    setPaiement([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setPaiement([]);
            });
    }, [id]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/commandes/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setCommandes(result);
                } else {
                    setCommandes([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setCommandes([]);
            });
    }, [id]);

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
                            <Nav_Table API={FactureImpayees}  />)}

                        {openTable === 'Facturepayees' && (
                            <table className="w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date Creation</th>
                                    <th>Date Comptabilisation</th>
                                    <th>Date D'echeance</th>
                                    <th>Non Payée</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Facture.map(invoice => (
                                        <tr key={invoice.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                            <td className="pl-6">{invoice.id}</td>
                                            <td className="p-3">{invoice.date_creation}</td>
                                            <td>{invoice.date_comptabilisation}</td>
                                            <td>{invoice.date_decheance}</td>
                                            <td>{invoice.non_payée}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>)}

                        {openTable === 'Avoires' && (
                            <Nav_Table API={Avoires} />)}

                        {openTable === 'Paiement' && (
                            <Nav_Table API={Paiement} />)}

                        {openTable === 'Commande' && (
                        <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Client</th>
                                        <th>Date de commande</th>
                                        <th>Code promo</th>
                                        <th>Produits</th>
                                        <th>Etat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Commandes.map(Commande => (
                                            <tr key={Commande.client} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">                                                <td className="p-3">{Commande.id}</td>
                                                <td>{Commande.client}</td>
                                                <td>{Commande.date_commande}</td>
                                                <td>{Commande.code_promo}</td>
                                                <td>{Commande.produits}</td>
                                                <td>{Commande.est_promo}</td>
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
