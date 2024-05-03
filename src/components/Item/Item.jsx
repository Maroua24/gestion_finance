import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <>
            <li className="item list-group-item text-xs font-[--Main-font] hover:ml-4 sm:text-xs lg:text-lg xl:text-xl 2xl:text-xl">
                <Link to={props.href} className="text-[--statistic-color] ">{props.item}</Link>
            </li>
        </>
    )
}
export default Item