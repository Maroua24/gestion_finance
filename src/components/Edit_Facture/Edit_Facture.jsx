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
    });

    useEffect(() => {
        if (Facture) {
            setInputValue({
                Categorie_de_compte: Facture.Categorie_de_compte,
                
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

            <div className="block flex-wrap h-5 m-4 md:h-8 lg:h-11 xl:h-14 2xl:h-16">
                <label className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Code Client
                </label>
                <input
                    type="text"
                    id="input"
                    className="bg-transparent border border-solid w-full h-5 border-2 border-outset focus:border-transparent
                            md:h-[30px] md:text-lg
                            lg:h-[35px] lg:text-xl
                            xl:h-[40px] xl:text-2xl
                            2xl:h-[50px] 2xl:text-3xl cursor-not-allowed"
                    value={Facture.id}
                />
            </div>
            {/* <Input label="Type facture:" name="Type_facture" type="text" id="Type_facture" value={inputValue.Type_facture} onChange={handleChange} />
            <Input label="ID client:" name="client" type="text" id="client" value={inputValue.client} onChange={handleChange} />
            <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleChange} />
            <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleChange} />
            <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleChange} />
            <Input label="NIS:" name="NIS" type="text" id="NIS" value={inputValue.NIS} onChange={handleChange} /> */}

            </form>
        </>
    )
}

export default Edit_Facture