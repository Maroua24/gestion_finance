import { Link } from "react-router-dom";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const Nav_Table = (props) => {
    const API = props.API
    const test = props.API
    return (
        <>
            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date Creation</th>
                                        <th>Date Comptabilisation</th>
                                        <th>Date Decheance</th>
                                        <th>Non Payée</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        API.map(invoice => (
                                            <tr key={invoice.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                                <td className="pl-6">{invoice.id}</td>
                                                <td className="p-3">{invoice.date_creation}</td>
                                                <td>{invoice.date_comptabilisation}</td>
                                                <td>{invoice.date_decheance}</td>
                                                <td>{invoice.non_payée}</td>
                                                <td>
                                                    <button className='border-none ml-1 px-1 py-1 bg-[--statistic-color]
                                                            sm:text-sm md:text-xl lg:text-2xl
                                                            xl:text-3xl 2xl:text-4xl'>
                                                        <Link to={`/Add_payment/${invoice.id}`}>
                                                            <FaCircleDollarToSlot />
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
        </>
    )
}

export default Nav_Table