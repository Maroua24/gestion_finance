import { Style, Nav_Item,Facture_Impayees_item,Facture_payees_Item } from "../index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Nav = (props) => {
    return (
        <>
        <Style>
            <Facture_Impayees_item id={props.id} />
            <Facture_payees_Item id={props.id}/>
        </Style>
        </>
    );
}

export default Nav;
