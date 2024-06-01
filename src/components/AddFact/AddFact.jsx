import {Input,Select,Menu,Validation} from '../index'
import { useState} from "react";
import { useDispatch} from "react-redux";
import {addFact} from '../../Redux/API/Facture_API'

const AddFact = () => {
    const dispatch = useDispatch();
    const [errors,setErrors] = useState({})

    const [inputValue, setInputValue] = useState({
        type_facture:"Vente",
        commande_ligne:"",
        client:"",
        date_creation:"",
        date_comptabilisation:"",
        date_decheance:"",
        montant:"",
    });
    const clearInputValues = () => {
        setInputValue({
            type_facture:"Vente",
            commande_ligne:"",
            client:"",
            date_creation:"",
            date_comptabilisation:"",
            date_decheance:"",
            montant:"",
        });
    };
    const handleInput=(e) => {
        console.log(e.target.name, e.target.value);
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }


    const handleSubmit=(e)=> {
        e.preventDefault();
        const validationErrors = Validation(inputValue);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(addFact(inputValue));
            clearInputValues();
        }
        console.log(inputValue)
    }
    return (
    <>
    <Menu/>
        <form onSubmit={handleSubmit}>
            <Select label="Type de facture:" name="type_facture" value_1="Vente" value_2="Service" choix1="Vente" choix2="Service" id="type_facture " value={inputValue.type_facture} onChange={handleInput}/>

            <div>
                <Input label="Ligne de commande:" name="commande_ligne" type="text" id="commande_ligne" value={inputValue.commande_ligne} onChange={handleInput}/>
                {errors.commande_ligne && <p className="text-red-500 ml-6">{errors.commande_ligne}</p>}
            </div>

            <div>
                <Input label="client:" name="client" type="text" id="client" value={inputValue.client} onChange={handleInput}/>
                {errors.client && <p className="text-red-500 ml-6">{errors.client}</p>}
            </div>

            <div>
                <Input label="Date de creation:" name="date_creation" type="date" id="date_creation" value={inputValue.date_creation} onChange={handleInput}/>
                {errors.date_creation && <p className="text-red-500 ml-6">{errors.date_creation}</p>}
            </div>

            <div>
                <Input label="Date de comptabilisation:" name="date_comptabilisation" type="date" id="date_comptabilisation" value={inputValue.date_comptabilisation} onChange={handleInput}/>
                {errors.date_comptabilisation && <p className="text-red-500 ml-6">{errors.date_comptabilisation}</p>}
            </div>

            <div>
                <Input label="Date d'echeance:" name="date_decheance" type="date" id="date_decheance" value={inputValue.date_decheance} onChange={handleInput}/>
                {errors.date_decheance && <p className="text-red-500 ml-6">{errors.date_decheance}</p>}
            </div>

            <div>
                <Input label="Montant:" name="montant" type="Number" id="montant" value={inputValue.montant} onChange={handleInput}/>
                {errors.montant && <p className="text-red-500 ml-6">{errors.montant}</p>}
            </div>

            <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md
                                            md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Envoyer
            </button>
        </form>
    </>
    )
}

export default AddFact