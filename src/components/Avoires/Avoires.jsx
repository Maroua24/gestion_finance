import { Link } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import {Menu,Search_input} from '../index'
import { GrDocumentUpdate } from "react-icons/gr";
import {getAll} from '../../Redux/API/GetAll'

const Avoires = () => {
    const [Search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);

    const dispatch = useDispatch();
    const Avoires = useSelector(state => state.FactureServiceList.FactureServiceList);
    const isLoading = useSelector(state => state.FactureServiceList.isLoading)

useEffect(()=>{
    dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
      //dispatch(getAll("http://127.0.0.1:8000/api/factures_service/"));
},[dispatch]);


return (
    <>
    <Menu/>

        <div>
            <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                            md:text-5xl lg:text-7xl
                        ">
                Avoires:
            </h1>
            <Search_input
                onChange={(e) => setSearch(e.target.value)}
            />


            <table className="ml-5  mt-4 sm:mr-4 xl:mr-8">
                <thead className='bg-[--statistic-color] text-white font-semibold
                                    sm:text-[10px] md:text-xl lg:text-2xl
                                    xl:text-3xl 2xl:text-4xl
                                '>
                    <tr className="m-2 text-center">
                        <th scope="col" className='py-2 px-4'>id</th>
                        <th scope="col" className='py-2 px-4'>Date de comptabilisation</th>
                        <th scope="col" className='py-2 px-4'>Date de decheance</th>
                        <th scope="col" className='py-2 px-4'>Commande ligne</th>
                        <th scope="col" className='py-2 px-4'>Type</th>
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
                        Avoires
                    .map((Avoires) => (
                        <tr key={Avoires.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                            <td className="pl-6">{Avoires.id}</td>
                            <td className="p-3 ">{Avoires.Date_de_comptabilisation}</td>
                            <td>{Avoires.date_comptabilisation}</td>
                            <td>{Avoires.date_decheance}</td>
                            <td>{Avoires.type}</td>
                            {/* <td className="pl-6">{Avoires.id}</td>
                            <td className="p-3 ">13/03/2018</td>
                                <td>20/02/2020</td>
                                <td>12/04/2021</td>
                                <td>facture</td> */}
                                <td>
                                <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                                    sm:text-sm md:text-xl lg:text-2xl
                                                                    xl:text-3xl 2xl:text-4xl
                                                                    '>
                                    <Link to={`/Edit_Facture/${Avoires.id}`}>
                                        <GrDocumentUpdate  />
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

export default Avoires