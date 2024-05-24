import {Input ,Menu,Style,Check_box} from "../index"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";




const Add_payment = () => {

    const { id } = useParams();
    const FactureId = parseInt(id);
    const client = useSelector(state => state.PaimentList.PaimentList.find(c => c.id === FactureId));


    return (
        <>
            <Menu/>
            <form method="post" action="{% url 'formulaire_client' %}">
                <h1 className="text-[--statistic-color] p-4 sm:text-3xl
                                md:text-5xl lg:text-7xl
                            ">
                    Ajouter un paiment:
                </h1>
                <div style={{ display: "block" }}>
                    <Input label="Code Client" name="Code client" type="Number" id="Code_client"  value={client.id}/>
                    <div className="ml-6 mt-8">
                        <Style>
                            <Style>
                                <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Avance:
                                </p>
                                <p className="text-red-500 sm:mr-[95px] md:mr-[137px] lg:mr-[150px] xl:mr-[177px] 2xl:mr-[215px]">*</p>
                            </Style>
                            <div>
                                <Check_box label="oui" />
                                <Check_box label="Non" />
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
                                    <Check_box label="Espece" />
                                    <Check_box label="Cheque" />
                                    <Check_box label="Virement" />
                                    <Check_box label="CIB" />
                                    <Check_box label="Avance" />
                                    <Check_box label="Autre" />
                                </div>
                            </Style>
                                <p className="text-xs ml-3 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Banque d'encaissenment:
                                </p>
                                    <p className="text-red-500">*</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle h-9" data-bs-toggle="dropdown" aria-expanded="false">
                                        Veuillez choisir une banque
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">BNA</a></li>
                                        <li><a class="dropdown-item" href="#">BADR</a></li>
                                        <li><a class="dropdown-item" href="#">BDL</a></li>
                                        <li><a class="dropdown-item" href="#">CPA</a></li>
                                        <li><a class="dropdown-item" href="#">CNEP BANQUE</a></li>
                                        <li><a class="dropdown-item" href="#">NATIONALE DE L'HABITAT</a></li>
                                        <li><a class="dropdown-item" href="#">AL BARAKA D’ALGERIE</a></li>
                                        <li><a class="dropdown-item" href="#">BANK ABC</a></li>
                                        <li><a class="dropdown-item" href="#">NATIXIS ALGERIE</a></li>
                                        <li><a class="dropdown-item" href="#">SOCIETE GENERALE ALGERIE</a></li>
                                        <li><a class="dropdown-item" href="#">CITIBANK N.A. ALGERIA</a></li>
                                        <li><a class="dropdown-item" href="#">ARAB BANK PLC ALGERIA</a></li>
                                        <li><a class="dropdown-item" href="#">BNP PARIBAS EL DJAZAIR</a></li>
                                        <li><a class="dropdown-item" href="#">TBA</a></li>
                                        <li><a class="dropdown-item" href="#">AGB</a></li>
                                        <li><a class="dropdown-item" href="#">HBTF - ALGERIA</a></li>
                                        <li><a class="dropdown-item" href="#">FRANSABANK EL-DJAZAIR</a></li>
                                        <li><a class="dropdown-item" href="#">ASBA</a></li>
                                        <li><a class="dropdown-item" href="#">Succursale de banque</a></li>
                                    </ul>
                                </div>
                        </Style>
                        

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
                                <Check_box label="Payer" />
                                <Check_box label="Payer & Reactive" />
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
                                <Check_box label="oui" />
                                <Check_box label="Non" />
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
                        <Input label="Montant d'encaissenment:" name="Montant d'encaissenment" type="Number" id="Code_client" placeholder="Montant d'encaissenment"/>
                        <Input label="Montant de reglement:" name="Montant de reglement" type="Number" id="Montant de reglement" placeholder="Montant de reglement"/>
                        <Input label="Etat:" name="Montant de reglement" type="Number" id="Montant de reglement" placeholder="Montant de reglement"/>

                        <p className="text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            Commentaire:
                        </p>
                        <textarea name="Commentaire" className="w-full border border-solid border-2 border-outset" ></textarea>
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