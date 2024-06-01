import {Input ,Menu,Style,Check_box,Type_Banque,Validation,Select} from "../index"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addPaiement} from '../../Redux/API/Paiement_API'


const Add_payment = () => {

    const { id } = useParams();
    const FactureId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === FactureId));

    const [PaymentMode, setPaymentMode] = useState('');
    const [errors,setErrors] = useState({})
    const [selectedBank1, setSelectedBank1] = useState('');
    const [selectedBank2, setSelectedBank2] = useState('');
    const [selectedBank3, setSelectedBank3] = useState('');

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        numero_cheque: '',
        virement: '',
        numero_carte_cib: '',
        Preciser: '',
        commentaire: '',
        Montant_encaissenment: '',
        Montant_de_reglement: '',
        Etat: '',
        cib:'',
        preciser:'',
    });

    const [checkBox, setCheckBox] = useState({
        etat:'Complet',
        Avance: '',
        payer_timbre: '',
        Operations: '',
        AvanceStock: '',
        mode_reglement:'',
        banque1: '',
        banque2: '',
        banque3: '',
    })
    const clearInputValues = () => {
        setInputValue({
            numero_cheque: '',
            virement: '',
            numero_carte_cib: '',
            Preciser: '',
            commentaire: '',
            Montant_encaissenment: '',
            Montant_de_reglement: '',
            Etat: '',
            cib:'',
            preciser:'',
            etat:'Complet',
            Avance: '',
            Timbre: '',
            Operations: '',
            AvanceStock: '',
            mode_reglement:'',
        });
    };
    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }
    const handleCheckbox=(e) => {
        setCheckBox({...checkBox,[e.target.name]: e.target.value})
        setPaymentMode(e.target.value);
    }
    const handleBankChange1 = (bank) => {
        setInputValue({ ...checkBox, banque1: bank });
    };

    const handleBankChange2 = (bank) => {
        setInputValue({ ...checkBox, banque2: bank });
    };

    const handleBankChange3 = (bank) => {
        setInputValue({ ...checkBox, banque3: bank });
    };
    const handleSubmit=(e)=> {
        e.preventDefault();
        const validationErrors = Validation(inputValue);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            dispatch(addPaiement(inputValue));
            clearInputValues();
        }
        console.log(checkBox)
        console.log(inputValue)
    }
    // const handlePaymentMode = (event) => {
    //     setPaymentMode(event.target.value);
    // };
    return (
        <>
            <Menu/>
            <form onSubmit={handleSubmit} method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Ajouter un paiement:
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
            <Select label="Type de paiement:" name="etat" value_1="Complet" value_2="Partiel" choix1="Complet" choix2="Partiel" id="etat" value={inputValue.etat} onChange={handleInput}/>

                    <div className="ml-6 mt-8">
                        <Style>
                            <Style>
                                <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Avance:
                                </p>
                                <p className="text-red-500 sm:mr-[95px] md:mr-[137px] lg:mr-[150px] xl:mr-[177px] 2xl:mr-[215px]">*</p>
                            </Style>
                            <div>
                                <Check_box choice="Oui" name="Avance" value='True' onChange={handleCheckbox}/>
                                <Check_box choice="Non" name="Avance" value='False' onChange={handleCheckbox}/>
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
                                    <Check_box choice="Espèce" value="Espèce" name="mode_reglement"  onChange={handleCheckbox} />
                                    <Check_box choice="Chèque" value="Chèque" name="mode_reglement"  onChange={handleCheckbox} />
                                    <Check_box choice="Virement" value="Virement" name="mode_reglement"  onChange={handleCheckbox} />
                                    <Check_box choice="CIB" value="CIB" name="mode_reglement"  onChange={handleCheckbox} />
                                    <Check_box choice="Avance" value="Avance" name="mode_reglement"  onChange={handleCheckbox} />
                                    <Check_box choice="Autre" value="Autre" name="mode_reglement"   onChange={handleCheckbox} />
                                </div>
                                </Style>
                                {PaymentMode === 'Espèce' && (
                                <Style>
                                    <Style>
                                        <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ml-7">
                                        Payer le timbre:
                                        </p>
                                        <p className="text-red-500 mr-5">*</p>
                                    </Style>
                                    <div>
                                        <Check_box choice="Oui" value="True" name="payer_timbre"/>
                                        <Check_box choice="Non" value="False" name="payer_timbre"/>
                                    </div>
                                </Style>
                                )}
                                {PaymentMode === 'Chèque' && (
                                <div>
                                <Type_Banque onChange={handleBankChange1}/>
                                <Input label="Numero du cheque" name="numero_cheque" type="Number" id="numero_cheque" placeholder="Numero du cheque" value={inputValue.numero_cheque} onChange={handleInput}/>
                                </div>
                                )}
                                {PaymentMode === 'Virement' && (
                                    <div>
                                    <Type_Banque onChange={handleBankChange2}/>
                                    <Input label="Virement" name="virement" type="Number" id="virement" placeholder="Virement" value={inputValue.virement} onChange={handleInput}/>
                                    </div>
                                )}
                                {PaymentMode === 'CIB' && (
                                    <div>
                                    <Input label="CIB" name="cib" type="text" id="cib" placeholder="CIB" value={inputValue.cib} onChange={handleInput}/>
                                    <Input label="Numero carte CIB" name="numero_carte_cib" type="Number" id="numero_carte_cib" placeholder="Numero carte CIB" value={inputValue.numero_carte_cib} onChange={handleInput}/>
                                    </div>
                                )}
                                {PaymentMode === 'Autre' && (
                                    <Input label="Preciser:" name="preciser" type="text" id="preciser" placeholder="Preciser" value={inputValue.preciser} onChange={handleInput}/>
                                )}
                            </Style>
                                <div>
                                    <Style>
                                    <p className="block text-xs mt-3  ml-9 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                        Banque d'encaissenment:
                                    </p>
                                    <p className="text-red-500 mt-3">*</p>
                                    </Style>
                                    <Type_Banque onChange={handleBankChange3}/>
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
                                <Check_box choice="Payer" name="Operations" onChange={handleCheckbox}/>
                                <Check_box choice="Payer & Reactive" name="Operations" onChange={handleCheckbox}/>
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
                                <Check_box choice="oui" name="avance" onChange={handleCheckbox}/>
                                <Check_box choice="Non" name="avance" onChange={handleCheckbox}/>
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
                        <textarea name="commentaire" className="w-full border border-solid border-2 border-outset" value={inputValue.commentaire} ></textarea>
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