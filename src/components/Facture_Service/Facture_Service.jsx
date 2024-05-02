import { FaDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input,Facture_Service_PDF} from '../index'
import {getAll} from '../../Redux/API/GetAll'
import { PDFDownloadLink } from "@react-pdf/renderer";

const Facture_Service = () => {

    const [Search, setSearch] = useState("");

    const dispatch = useDispatch();
    const Clients = useSelector(state => state.ClientList.ClientsList);
    const isLoading = useSelector(state => state.ClientList.isLoading)

    useEffect(()=>{
        dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
    },[dispatch]);

    const viewPDF = (client) => {
        const pdfContent = <Facture_Service_PDF client={client} />;
        const pdfBlob = new Blob([pdfContent], { type: 'application/pdf' });
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL);
    };

    return (
        <>
        <Menu/>

            <div>
            <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Facture Service:
                </h1>
                <Search_input
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className='py-1 px-2 border-none  rounded-md bg-[--statistic-color] my-3
                                    hover:bg-[--light-color] sm:text-xs sm:ml-[78%]
                                    md:text-sm md:ml-[79%] lg:text-2xl lg:ml-[77%]
                                    2xl:text-3xl
                                    '>
                    <a href="/AddClient" className='font-semibold'>Ajouter +</a>
                </button>

                <table className="ml-5 sm:mr-4 xl:mr-8">
                    <thead className='bg-[--statistic-color] text-white font-semibold
                                        sm:text-[10px] md:text-xl lg:text-2xl
                                        xl:text-3xl 2xl:text-4xl
                                    '>
                        <tr className="m-2 text-center">
                            <th scope="col" className='py-2 px-4'>id</th>
                            <th scope="col" className='py-2 px-4'>Code</th>
                            <th scope="col" className='py-2 px-4'>Nom</th>
                            <th scope="col" className='py-2 px-4'>Email</th>
                            <th scope="col" className='py-2 px-4'>Address</th>
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
                        Clients
                        .filter((client) => {
                            return Search.toLowerCase() === ''
                                ? client
                                :
                                client.name.toLowerCase().includes(Search) ||
                                client.username.toLowerCase().includes(Search) ||
                                client.email.toLowerCase().includes(Search) ||
                                client.website.toLowerCase().includes(Search)
                        })
                        .map((client) => (
                            <tr key={client.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                <td className="pl-6">{client.id}</td>
                                <td className="p-3 ">{client.name}</td>
                                <td>{client.username}</td>
                                <td>{client.email}</td>
                                <td>{client.website}</td>
                                <td>
                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl'>
                                        <a href="#"><IoMdInformationCircleOutline  /></a>
                                    </button>
                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl'>
                                        <PDFDownloadLink document={<Facture_Service_PDF client={client} />} fileName="Facture_Vente.pdf" >
                                            {({Loading}) =>
                                                Loading ? (
                                                    <LuLoader />
                                                ) : (
                                                    <FaDownload />
                                                )
                                            }
                                        </PDFDownloadLink>
                                    </button>
                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl'
                                                                    onClick={() => viewPDF(client)}>
                                        <a href="#"><FaFilePdf /></a>
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

export default Facture_Service