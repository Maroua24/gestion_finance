import { useParams } from "react-router-dom";
import { Input } from "../index"
import { useSelector } from "react-redux";

const Edit_Facture = () => {
    const { id } = useParams();
    const FactureId = parseInt(id);
    const Facture = useSelector(state => state.AvoiresReducerList.AvoiresList.find(c => c.id === FactureId));

    return (
        <>
            <form>
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