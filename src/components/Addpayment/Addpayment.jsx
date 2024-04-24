import { Select, Input , Style,Menu} from "../index"
import { useState} from "react";
import { useDispatch} from "react-redux";


const Add_payment = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({

    });

    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        // dispatch(addClient(inputValue))
        // console.log(inputValue)
    }


    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit}  method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] text-3xl m-3 ml-6">Ajouter un client:</h1>
                {/* {% csrf_token %}  */}
                <div style={{ display: "block" }}>
                    <Select name="Categorie de paiement" value_1="C" value_2="S" choix1="Complet" choix2="Partiel" id="Categorie_de_paiement " value={inputValue.Categorie_de_paiement} onChange={handleInput}/>

                    <Input label="Montant:" name="montant" type="Number" id="Registre_de_commerce"  value={inputValue.Registre_de_commerce} onChange={handleInput}/>
                    <Input label="Article d'imposition:" name="Article_dimposition" type="text" id="Article_imposition" value={inputValue.Article_imposition}  onChange={handleInput}/>
                    <Input label="Devise:" name="Devise" type="text" id="Devise" value={inputValue.Devise} onChange={handleInput}/>

                    <Input label="Fax:" name="Fax" type="text" id="Fax" value={inputValue.Fax} onChange={handleInput}/>

                        <Select label="Dossier valide:" name="Dossier_valide" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_valide" value={inputValue.Dossier_valide} onChange={handleInput}/>
                        <Select label="Status:" name="Status" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value={inputValue.valid} onChange={handleInput}/>
                        <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md">Envoyer</button>
                    </div>
            </form>
        </>
    );
};

export default Add_payment