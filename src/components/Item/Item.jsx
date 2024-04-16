
const Item = (props) => {
    return(
        <>
            <li className="item list-group-item bg-light text-black">
                <a href={props.href} className="text-black">{props.item}</a>
            </li>
        </>
    )
}
export default Item