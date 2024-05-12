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
                    </div>
                    <button type="submit" className="text-xs bg-[--card-color] text-[--light-color] border-2 border-outset border-[--card-color] py-1 px-2 m-2 shadow-md">Envoyer</button>
                </div>
            </form>
        </>
    );
};

export default Add_payment