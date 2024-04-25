
const Item = (props) => {
    return(
        <>
            <li className="item list-group-item text-xs font-[--Main-font] hover:ml-4 ">
                <a href={props.href} className="text-[--statistic-color] ">{props.item}</a>
            </li>
        </>
    )
}
export default Item