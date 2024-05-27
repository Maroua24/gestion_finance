import { useParams } from "react-router-dom";
import { Input,Menu } from "../index"
import { useDispatch,useSelector } from "react-redux";
import {UpdateFacture} from "../../Redux/API/Avoires_API"
import { useState, useEffect } from "react";


const Edit_Facture = () => {
    const { id } = useParams();
    const FactureId = parseInt(id);
    const Facture = useSelector(state => state.AvoiresReducerList.AvoiresList.find(c => c.id === FactureId));
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        Categorie_de_compte: '',
        type_facture: '',
        date_creation: '',
        date_comptabilisation: '',
        date_decheance: '',
        non_payee: '',
        montant: '',
    });

    useEffect(() => {
        if (Facture) {
            setInputValue({
                type_facture:Facture.type_facture,
                date_creation:Facture.date_creation,
                date_comptabilisation:Facture.date_comptabilisation,
                date_decheance:Facture.date_decheance,
                non_payee:Facture.non_payee,
                montant:Facture.montant,
            });
        }
    }, [Facture]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateFacture({ id: FactureId, ...inputValue }));
    };
    return (
        <>
        <Menu/>
            <form onSubmit={handleSubmit}>
            <h1 className="text-[--statistic-color] text-3xl m-3">Modifier les informations du Facture</h1>

            <Input label="ID client:" name="client" type="text" id="client" value={Facture.client} cursor={'cursor-not-allowed'}/>
            <Input label="ID Facture:" name="facture_id" type="text" id="facture_id" value={inputValue.client} cursor={'cursor-not-allowed'}/>
            <Input label="Commande ligne:" name="commande_ligne" type="text" id="commande_ligne" value={inputValue.commande_ligne} cursor={'cursor-not-allowed'}/>

            <Input label="Type:" name="type_facture" type="text" id="type_facture" value={inputValue.type_facture} onChange={handleChange} />
            <Input label="Date de creation:" name="date_creation" type="text" id="date_creation" value={inputValue.date_creation} onChange={handleChange} />
            <Input label="date_comptabilisation:" name="date_comptabilisation" type="text" id="date_comptabilisation" value={inputValue.date_comptabilisation} onChange={handleChange} />
            <Input label="Date de decheance:" name="date_decheance" type="text" id="date_decheance" value={inputValue.date_decheance} onChange={handleChange} />
            <Input label="Etat:" name="non_payee" type="text" id="non_payee" value={inputValue.non_payee} onChange={handleChange} />
            <Input label="Montant:" name="montant" type="text" id="montant" value={inputValue.montant} onChange={handleChange} />

            <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md
                                                        md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Envoyer
            </button>
            </form>
        </>
    )
}

export default Edit_Facture