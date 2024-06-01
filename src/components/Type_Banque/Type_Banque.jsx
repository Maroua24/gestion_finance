
const Type_Banque = ({onChange}) => {

    const handleSelect = (e) => {
        onChange(e.target.textContent);
    };
    return (
        <div className="btn-group ml-9">
        <button type="button" className="btn btn-primary dropdown-toggle h-9  text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" data-bs-toggle="dropdown" aria-expanded="false">
            Veuillez choisir une banque
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>BNA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>BADR</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>BDL</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>CPA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>CNEP BANQUE</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>NATIONALE DE L'HABITAT</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>AL BARAKA D’ALGERIE</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>BANK ABC</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>NATIXIS ALGERIE</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>SOCIETE GENERALE ALGERIE</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>CITIBANK N.A. ALGERIA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>ARAB BANK PLC ALGERIA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>BNP PARIBAS EL DJAZAIR</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>TBA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>AGB</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>HBTF - ALGERIA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>FRANSABANK EL-DJAZAIR</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>ASBA</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>Succursale de banque</a></li>
        </ul>
    </div>
    )
}

export default Type_Banque