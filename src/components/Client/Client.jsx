import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineMonetizationOn } from "react-icons/md";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input} from '../index'
import {getAll} from '../../Redux/API/GetAll'
const Client = () => {

    const [Search, setSearch] = useState("");

    const dispatch = useDispatch();
    const Clients = useSelector(state => state.ClientList.ClientsList);
    const isLoading = useSelector(state => state.ClientList.isLoading);

    useEffect(()=>{
        // dispatch(getAll("http://127.0.0.1:8000/api/clients"));
        dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
    },[dispatch]);
    return (
        <>
            <Menu/>
            <div className="">

                <h1 className="text-[--statistic-color] p-4 sm:text-3xl">
                    Client:
                </h1>
                <Search_input
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className='py-1 px-2 border-none  rounded-md bg-[--statistic-color] my-3
                                    hover:bg-[--light-color] sm:text-xs sm:ml-[78%]
                                    '>
                    <a href="/AddClient" className='font-semibold'>Ajouter +</a>
                </button>

                <table className="ml-5 sm:mr-4">
                    <thead className='bg-[--statistic-color] text-white font-semibold
                                        sm:text-[10px]
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
                                <div class="d-flex align-items-center text-primary">
                                    <strong>Loading...</strong>
                                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                </div>:
                                Clients
                                    .filter((client) => {
                                        return Search.toLowerCase() === ''
                                            ? client
                                            : client.name.toLowerCase().includes(Search)
                                    })
                                    .map((client) => (
                                        <tr key={client.id} className="sm:text-[10px] md:text-xm lg:text-xl xl:text-xl 2xl:text-6xl  shadow-md">
                                            <td className="pl-6">{client.id}</td>
                                            <td className="p-3 ">{client.name}</td>
                                            <td>{client.username}</td>
                                            <td>{client.email}</td>
                                            <td>{client.website}</td>
                                            <td>
                                                <button to={`/edit/${client.id}`} className='border-none ml-1 px-1 py-1 bg-[--statistic-color]'><a href="/Update"><GrDocumentUpdate  /></a></button>
                                                <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]'><a href="#"><MdOutlineMonetizationOn /></a></button>
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

export default Client