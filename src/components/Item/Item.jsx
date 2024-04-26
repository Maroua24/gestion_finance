
const Item = (props) => {
    return(
        <>
            <li className="item list-group-item text-xs font-[--Main-font] hover:ml-4 sm:text-xs lg:text-lg xl:text-2xl 2xl:text-2xl">
                <a href={props.href} className="text-[--statistic-color] ">{props.item}</a>
            </li>
        </>
    )
}
export default Item