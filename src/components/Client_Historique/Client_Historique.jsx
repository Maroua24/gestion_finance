import {Menu,Style} from '../index'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const Client_Historique = () => {

    const [Data, setData] = useState();
    const [Historique, setHistorique] = useState();
    const { id } = useParams();
    const Id = parseInt(id);

    useEffect((Id) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`http://127.0.0.1:8000/api/clients/${Id}/historique/`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                result = JSON.parse(result)
                setHistorique(result);
                console.log(result)
                // console.log(JSON.parse(result).id)
            }) //set  the data

            .catch((error) => console.error(error));
        }, []);
return (
    <div>
        <Style>
            <Menu/>
            <div>
            <h2 className="shadow-lg p-3 text-[#071F90] m-3 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                <b>Historique du client:</b>
            </h2>
            <div className="shadow-lg rounded-xl p-3 m-3  sm:text-[15px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl">
                    
            </div>
            </div>
        </Style>
        

    </div>
)
}

export default Client_Historique