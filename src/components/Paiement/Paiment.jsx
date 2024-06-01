import { Link } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input} from '../index'
import {getAll} from '../../Redux/API/GetAll'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { CSVLink } from "react-csv";


const Paiment = () => {

    const [Search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [Rapport,setRapport] = useState([])

    const dispatch = useDispatch();
    const PaimentList = useSelector(state => state.PaimentList.PaimentList);
    const isLoading = useSelector(state => state.PaimentList.isLoading)

    useEffect(()=>{
        dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
        //dispatch(getAll("http://127.0.0.1:8000/api/Non-payées/"));
    },[dispatch]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        // console.log(id)
        fetch("http://127.0.0.1:8000/api/paiements/rapport/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (Array.isArray(result)) {
                    setRapport(result);
                } else {
                    setRapport([result]);
                }
                console.log(result)
            }) //set the data
            .catch((error) => {
                console.error(error);
                setRapport([]);
            });
    }, []);
    return (
        <>
        <Menu/>

            <div>
            <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Paiement:
                </h1>
                <Search_input
                    onChange={(e) => setSearch(e.target.value)}
                />

                <CSVLink data={Rapport} className='py-1 px-2 border-none  rounded-md bg-[--statistic-color] my-3
                                    hover:bg-[--light-color] sm:text-xs sm:ml-[70%]
                                    md:text-sm md:ml-[71%] lg:text-2xl lg:ml-[70%]
                                    2xl:text-3xl
                                    '>Rapport
                </CSVLink>

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
                                <td className="p-3 ">13/03/2018</td>
                                <td>20/02/2020</td>
                                <td>12/04/2021</td>
                                <td>false</td>
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