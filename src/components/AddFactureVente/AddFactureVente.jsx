import { Input, Select, Style, Menu } from "../index"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFactureVente } from "../../Redux/API/FactureVenteAPI";

const AddFactureVente = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({

    });

    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addFactureVente(inputValue))
        // console.log(inputValue)
    }

    return (
        <>
            <Menu />
            <form onSubmit={handleSubmit}>
                <h1 className="text-[--statistic-color] text-3xl m-3">Ajouter une facture vente:</h1>
                <Input label="Date de creation:" name="date_creation" type="date" id="date_creation" value="" onchange={handleInput} />
                <Input label="Date comptabilisation:" name="date_comptabilisation" type="date" id="date_comptabilisation" value="" onchange={handleInput} />
                <Input label="Date_decheance" name="date_decheance" type="text" id="date_decheance" value="" onchange={handleInput} />
                <Input label="" name="" type="" id="" value="" />
                <Input label="" name="" type="" id="" value="" />
            </form>
        </>
    )
}

export default AddFactureVente