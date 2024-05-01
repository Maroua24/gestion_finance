import {Style} from "../index"
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <>



                            <Style>
                                <p className="m-3 p-2 border border-slate-50 cursor-pointer  hover:bg-[#143C60]
                                            hover:translate-y-6 transition duration-500
                                            ">
                                    <b> <Link to={``} className="text-[#143C60] hover:text-[--light-color]">Facture impayees</Link> </b>
                                </p>

                                <p className="m-3 p-2 border border-slate-50 cursor-pointer  hover:bg-[#143C60]
                                            hover:translate-y-6 transition duration-500
                                            ">
                                    <b> <Link to={``} className="text-[#143C60] hover:text-[--light-color]">Facture payees</Link> </b>
                                </p>
                            </Style>
        </>
    )
}

export default Nav