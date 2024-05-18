import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input,Facture_Impayees_PDF} from '../index'
import {getAll} from '../../Redux/API/GetAll'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const Paiment = () => {

    const [Search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);

    const dispatch = useDispatch();
    const PaimentList = useSelector(state => state.PaimentList.PaimentList);
    const isLoading = useSelector(state => state.PaimentList.isLoading)

    useEffect(()=>{
        //dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
        dispatch(getAll("http://127.0.0.1:8000/api/Non-payées/"));
    },[dispatch]);

    return (
        <>
        <Menu/>

            <div>
            <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Paiment:
                </h1>
                <Search_input
                    onChange={(e) => setSearch(e.target.value)}
                />


                <table className="ml-5  mt-4 sm:mr-4 xl:mr-8">
                    <thead className='bg-[--statistic-color] text-white font-semibold
                                        sm:text-[10px] md:text-base lg:text-xl
                                        xl:text-2xl 2xl:text-3xl
                                    '>
                        <tr className="m-2 text-center">
                            <th scope="col" className='py-2 px-4'>id</th>
                            <th scope="col" className='py-2 px-4'>Date de creation</th>
                            <th scope="col" className='py-2 px-4'>Date de comptabilisation</th>
                            <th scope="col" className='py-2 px-4'>Date de decheance</th>
                            <th scope="col" className='py-2 px-4'>Etat</th>
                            <th scope="col" className='py-2 px-4'>Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {
                            isLoading ?
                            <tr>
                                <td class="d-flex align-items-center text-primary md:text-2xl lg:text-3xl">
                                <strong>Loading...</strong>
                                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                </td>
                            </tr>
                            :
                        PaimentList
                        // .filter((Facture) => {
                        //     return Search.toLowerCase() === ''
                        //         ? Facture
                        //         :
                        //         Facture.name.toLowerCase().includes(Search) ||
                        //         Facture.username.toLowerCase().includes(Search) ||
                        //         Facture.email.toLowerCase().includes(Search) ||
                        //         Facture.website.toLowerCase().includes(Search)
                        // })
                        .map((Paiment) => (
                            <tr key={Paiment.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                {/* <td className="pl-6">{Paiment.id}</td>
                                <td className="p-3 ">{Paiment.date_creation}</td>
                                <td>{Paiment.date_comptabilisation}</td>
                                <td>{Paiment.date_decheance}</td>
                                <td>{Paiment.non_payée}</td> */}
                                <td className="pl-6">{Paiment.id}</td>
                                <td className="p-3 ">{Paiment.name}</td>
                                <td>{Paiment.username}</td>
                                <td>{Paiment.website}</td>
                                <td>{Paiment.email}</td>
                                <td>
                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl'>
                                        <Link to={`/Add_payment/${Paiment.id}`}>
                                            <FaCircleDollarToSlot />
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Paiment