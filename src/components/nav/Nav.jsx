import { Style, Nav_Item,Facture_Impayees_item,Facture_payees_Item,Avoires_Item } from "../index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from "react";

const Nav = (props) => {
    const [openTable,setOpenTable] = useState(null)

    const handleToggleTable = (table) =>{
        setOpenTable(prevTable => (prevTable === table ? null : table))
    }
    return (
        <>
        <Style>
        <div className="container flex flex-row w-full">

            <Facture_Impayees_item
                id={props.id}
                isOpen={openTable === 'impayees'}
                onToggle={()=> handleToggleTable('impayees')}
            />

            <Facture_payees_Item
                id={props.id}
                isOpen={openTable === 'payees'}
                onToggle={()=> handleToggleTable('payees')}
            />

            <Avoires_Item
                id={props.id}
                isOpen={openTable === 'Avoires'}
                onToggle={()=> handleToggleTable('Avoires')}
            />
        </div>
        </Style>
        </>
    );
}

export default Nav;
