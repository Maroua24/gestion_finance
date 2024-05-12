import { Link } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input} from '../index'
import {getAll} from '../../Redux/API/GetAll'
const ClientVIP = () => {

    const [Search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);

    const dispatch = useDispatch();
    const ClientsVIP = useSelector(state => state.Client_VIP_List.ClientsVIPList);
    const isLoading = useSelector(state => state.Client_VIP_List.isLoading);

    useEffect(()=>{
        dispatch(getAll("http://127.0.0.1:8000/api/clients/create/"));
        //dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
    },[dispatch]);

    const handleSort = (key) => {
        if (sortBy === key) {
            setSortBy(null);
        } else {
            setSortBy(key);
        }
    };
    const highlightMatch = (text, search) => {
        return search ? (
            <span dangerouslySetInnerHTML={{ __html: text.replace(new RegExp(search, 'gi'), match => `<span style="color:blue">${match}</span>`) }} />
        ) : (
            text
        );
    };

    return (
        <>
            <Menu/>
            <div className="">

                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Client VIP:
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
                            <th scope="col" className='py-2 px-4 cursor-pointer ' onClick={() => handleSort('nom')}>Nom</th>
                            <th scope="col" className='py-2 px-4 cursor-pointer ' onClick={() => handleSort('prenom')}>Code</th>
                            <th scope="col" className='py-2 px-4 cursor-pointer ' onClick={() => handleSort('email')}>Email</th>
                            <th scope="col" className='py-2 px-4 cursor-pointer ' onClick={() => handleSort('pays')}>Address</th>
                            <th scope="col" className='py-2 px-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            isLoading ?
                                <div class="d-flex align-items-center text-primary md:text-2xl lg:text-3xl">
                                    <strong>Loading...</strong>
                                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                </div>:
                                ClientsVIP
                                .filter((client) => {
                                    return Search.toLowerCase() === ''
                                        ? client
                                        :
                                        client.nom.toLowerCase().includes(Search) ||
                                        client.prenom.toLowerCase().includes(Search) ||
                                        client.email.toLowerCase().includes(Search) ||
                                        client.pays.toLowerCase().includes(Search)
                                })
                                .sort((a, b) => {
                                    if (sortBy) {
                                        return a[sortBy].localeCompare(b[sortBy]);
                                    } else {
                                        return 0;
                                    }
                                })
                                    .map((client) => (
                                        <tr key={client.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                            <td className="pl-6">{client.id}</td>
                                            <td className="p-3 ">
                                                {highlightMatch(client.nom, Search)}
                                            </td>
                                            <td>
                                                {highlightMatch(client.prenom, Search)}
                                            </td>
                                            <td>
                                                {highlightMatch(client.email, Search)}
                                            </td>
                                            <td>
                                                {highlightMatch(client.pays, Search)}
                                            </td>
                                            <td>
                                                <button to={`/edit/${client.id}`}
                                                        className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl
                                                                    '>
                                                    <a href="/Update"><GrDocumentUpdate  /></a>
                                                </button>

                                                <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl
                                                                    '>
                                                    <Link to={`/Client_info/${client.id}`}>
                                                        <IoMdInformationCircleOutline />
                                                    </Link>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ClientVIP

