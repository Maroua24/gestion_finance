import { Select, Input , Style,Menu} from "../index"
import { useDispatch} from "react-redux";
import { useState} from "react";
import {addFactureService} from "../../Redux/API/FactureServiceAPI"

const AddFactureService = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        Num_Fact:'',
        date_creation:'',
        date_comp:'',
        date_dech:'',
    });

    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch(addFactureService(inputValue))
        // console.log(inputValue)
    }



    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit}>
                <Input label="Numero de facture:" name="Num_Fact" type="Number" id="Num_Fact" value={inputValue.Num_Fact} onChange={handleInput}/>
                <Input label="date de creation:" name="date_creation" type="date" id="date_creation" value={inputValue.date_creation} onChange={handleInput}/>
                <Input label="date comptabilisation:" name="date_comp" type="date" id="date_comp" value={inputValue.date_comp} onChange={handleInput}/>
                <Input label="date decheance:" name="date_dech" type="Number" id="date_dech" value={inputValue.date_dech} onChange={handleInput}/>
            </form>
        </>
    )
}

export default AddFactureService