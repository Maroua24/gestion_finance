import {Item , Style} from "../index"
import { FiAlignLeft } from "react-icons/fi";
import { useState } from 'react';
import image from '../../images/icosnet-removebg-preview.png'
const Menu =() => {
    const [statistic, setstatistic] = useState(false);
    const click = () =>{
        setstatistic(!statistic)
    }
    return(
        <>
        <div className="sm:ml-3 md:ml-5 lg:ml-7 xl:ml-8">
                <img src={image} alt="image" className='sm:w-14 sm:mr-1 md:w-20 lg:w-24 xl:w-40'/>
                <FiAlignLeft className='cursor-pointer inline-block' onClick={click}/>

            {statistic &&(
                <div className='w-24 h-full w-[78%]'>
                    <ul className="list-group list-group-flush">
                        <Item href="/Main" item="Dashboard"/>
                        <Item href="/client" item="Client"/>
                        <Item href="/client_VIP" item="Client VIP"/>
                        <Item href="/Facture_vente" item="Factures vente"/>
                        <Item href="/Facture_Service" item="Factures service"/>
                        <Item item="Avoires vente"/>
                        <Item item="Avoires service"/>
                        <Item href="/Facture_Impayees" item="Facture impayees"/>
                        <Item href="/paiment" item="Paiement"/>
                        <Item item="Paiement proformats"/>
                        <Item item="Dates mise en demande"/>
                        <Item item="Facture A ne pas envoyer"/>
                        <Item item="Log Email"/>
                        <Item item="Transaction CIB"/>
                        <Item item="Facture non envoyer"/>
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default Menu