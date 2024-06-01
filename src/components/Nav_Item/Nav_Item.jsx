const Nav_Item = ({ onClick, label, isActive }) => {
    return (
        <div onClick={onClick} className="w-[200px]">
            <p className={`m-3 p-2 text-center border border-slate-50 cursor-pointer ${isActive ? 'bg-[#143C60] text-[--light-color]' : 'hover:bg-[#143C60] text-[#143C60] hover:text-[--light-color]'}`}>
                <b>
                    {label}
                </b>
            </p>
        </div>
    );
}

export default Nav_Item;
