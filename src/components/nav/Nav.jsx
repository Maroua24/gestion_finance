import {Style} from "../index"
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <>
            <div className="block relative">
                <div className="absolute inset-0 bg-[--statistic-color] opacity-50 blur-sm"></div>
                    <div className="relative">
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
                    </div>
                </div>
        </>
    )
}

export default Nav