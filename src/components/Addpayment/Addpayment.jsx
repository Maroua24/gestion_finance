import {Input ,Menu,Style,Check_box,Type_Banque,Validation} from "../index"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";



const Add_payment = () => {

    const { id } = useParams();
    const FactureId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === FactureId));

    const [PaymentMode, setPaymentMode] = useState('');
    const [errors,setErrors] = useState({})
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        Numero_du_cheque:'',
        Virement:'',
        Numero_carte_CIB:'',
        Preciser:'',
        commentaire:'',
    });
    const clearInputValues = () => {
        setInputValue({
            Numero_du_cheque:'',
            Virement:'',
            Numero_carte_CIB:'',
            Preciser:'',
            commentaire:'',
        });
    };
    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        const validationErrors = Validation(inputValue);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // dispatch(addClient(inputValue));
            clearInputValues();
        }
    }
    const handlePaymentMode = (event) => {
        setPaymentMode(event.target.value);
    };
    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit} method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Ajouter un paiment:
                </h1>
                <div style={{ display: "block" }}>

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
                            value={client.id}
                />
            </div>
            <div className="block flex-wrap h-5 m-4 md:h-8 lg:h-11 xl:h-14 2xl:h-16">
                <label className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        ID facture
                </label>
                <input
                    type="text"
                    id="input"
                    className="bg-transparent border border-solid w-full h-5 border-2 border-outset focus:border-transparent
                            md:h-[30px] md:text-lg
                            lg:h-[35px] lg:text-xl
                            xl:h-[40px] xl:text-2xl
                            2xl:h-[50px] 2xl:text-3xl cursor-not-allowed"
                            value={client.id}
                />
            </div>

                    <div className="ml-6 mt-8">
                        <Style>
                            <Style>
                                <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Avance:
                                </p>
                                <p className="text-red-500 sm:mr-[95px] md:mr-[137px] lg:mr-[150px] xl:mr-[177px] 2xl:mr-[215px]">*</p>
                            </Style>
                            <div>
                                <Check_box choice="Oui" name="Avance" />
                                <Check_box choice="Non" name="Avance" />
                            </div>
                        </Style>
                    </div>

                    <div className="ml-6 mt-8">
                            <Style>
                                <Style>
                                <Style>
                                    <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                        Mode de regiement:
                                    </p>
                                    <p className="text-red-500 sm:mr-[30px] md:mr-[35px] lg:mr-[40px] xl:mr-[45px] 2xl:mr-[50px]">*</p>
                                </Style>
                                <div>
                                    <Check_box choice="Espece" name="regiement" onChange={handlePaymentMode}/>
                                    <Check_box choice="Cheque" name="regiement" onChange={handlePaymentMode}/>
                                    <Check_box choice="Virement" name="regiement" onChange={handlePaymentMode}/>
                                    <Check_box choice="CIB" name="regiement" onChange={handlePaymentMode}/>
                                    <Check_box choice="Avance" name="regiement" onChange={handlePaymentMode}/>
                                    <Check_box choice="Autre" name="regiement" onChange={handlePaymentMode}/>
                                </div>
                                </Style>
                                {PaymentMode === 'Espece' && (
                                <Style>
                                    <Style>
                                        <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ml-7">
                                        Payer le timbre:
                                        </p>
                                        <p className="text-red-500 mr-5">*</p>
                                    </Style>
                                    <div>
                                        <Check_box choice="Oui" name="timbre"/>
                                        <Check_box choice="Non" name="timbre"/>
                                    </div>
                                </Style>
                                )}
                                {PaymentMode === 'Cheque' && (
                                <div>
                                <Type_Banque/>
                                <Input label="Numero du cheque" name="Numero_du_cheque" type="Number" id="Numero_du_cheque" placeholder="Numero du cheque" value={inputValue.Numero_du_cheque} onChange={handleInput}/>
                                </div>
                                )}
                                {PaymentMode === 'Virement' && (
                                    <div>
                                    <Type_Banque/>
                                    <Input label="Virement" name="Virement" type="Number" id="Virement" placeholder="Virement" value={inputValue.Virement} onChange={handleInput}/>
                                    </div>
                                )}
                                {PaymentMode === 'CIB' && (
                                    <div>
                                    <Input label="CIB" name="CIB" type="text" id="CIB" placeholder="CIB" value={inputValue.CIB} onChange={handleInput}/>
                                    <Input label="Numero carte CIB" name="Numero_carte_CIB" type="Number" id="Numero_carte_CIB" placeholder="Numero carte CIB" value={inputValue.Numero_carte_CIB} onChange={handleInput}/>
                                    </div>
                                )}
                                {PaymentMode === 'Autre' && (
                                    <Input label="Preciser:" name="Preciser" type="text" id="Preciser" placeholder="Preciser" value={inputValue.Preciser} onChange={handleInput}/>
                                )}
                            </Style>
                                <div>
                                    <Style>
                                    <p className="block text-xs mt-3  ml-9 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                        Banque d'encaissenment:
                                    </p>
                                    <p className="text-red-500 mt-3">*</p>
                                    </Style>
                                    <Type_Banque/>
                                </div>
                                <div>

                                </div>

                        <div className="ml-1 mt-8">
                        <Style>
                            <Style>
                                <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Operations:
                                </p>
                                <p className="text-red-500 sm:mr-[70px] md:mr-[102px]  mr-[133px]
                                            lg:mr-[113px] xl:mr-[132px] 2xl:mr-[160px]">
                                    *
                                </p>
                            </Style>
                            <div>
                                <Check_box choice="Payer" name="Operations"/>
                                <Check_box choice="Payer & Reactive" name="Operations"/>
                            </div>
                        </Style>
                        </div>

                        <div className="ml-1 mt-8">
                        <Style>
                            <Style>
                                <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Stocker dans l'avance:
                                </p>
                                <p className="text-red-500  mr-3 ">*</p>
                            </Style>
                            <div>
                                <Check_box choice="oui" name="avance"/>
                                <Check_box choice="Non" name="avance"/>
                            </div>
                        </Style>
                        </div>

                        <div className="ml-1 mt-8">
                        <Style>
                        <Style>
                            <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                Devise:
                            </p>
                            <p className="text-red-500  mr-3 ">*</p>
                        </Style>
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                EUR
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">GBP</a></li>
                                <li><a className="dropdown-item" href="#">USD</a></li>
                                <li><a className="dropdown-item" href="#">CAD</a></li>
                                <li><a className="dropdown-item" href="#">AUD</a></li>
                                <li><a className="dropdown-item" href="#">JPY</a></li>

                            </ul>
                        </div>
                        </Style>
                        </div>

                        <div>
                            <Input label="Montant d'encaissenment:" name="Montant_encaissenment" type="Number" id="Montant_encaissenment" placeholder="Montant d'encaissenment" value={inputValue.Montant_encaissenment} onChange={handleInput}/>
                            {errors.Montant_encaissenment && <p className="text-red-500 ml-6">{errors.Montant_encaissenment}</p>}
                        </div>

                        <div>
                            <Input label="Montant de reglement:" name="Montant_de_reglement" type="Number" id="Montant_de_reglement" placeholder="Montant de reglement" value={inputValue.Montant_de_reglement} onChange={handleInput}/>
                            {errors.Montant_de_reglement && <p className="text-red-500 ml-6">{errors.Montant_de_reglement}</p>}
                        </div>
                        <div>
                            <Input label="Etat:" name="Etat" type="Number" id="Etat" placeholder="Etat"/>
                            {errors.Etat && <p className="text-red-500 ml-6">{errors.Etat}</p>}
                        </div>

                        <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            Commentaire:
                        </p>
                        <textarea name="Commentaire" className="w-full border border-solid border-2 border-outset" value={inputValue.commentaire} ></textarea>
                    </div>
                    <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md
                                                    md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        Envoyer
                    </button>
                </div>
            </form>
        </>
    );
};

export default Add_payment