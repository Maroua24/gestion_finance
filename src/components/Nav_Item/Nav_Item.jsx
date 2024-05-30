
const Nav_Item = (props) => {

    const id = props.id;
    const clientId = parseInt(id);
    //const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));
    return (
        <div onClick={props.onClick} className="w-[200px]">
                <p className="m-3 p-2 border border-slate-50 cursor-pointer hover:bg-[#143C60]">
                    <b className="text-[#143C60] hover:text-[--light-color]">
                            {props.label}
                    </b>
                </p>
        </div>
    )
}

export default Nav_Item