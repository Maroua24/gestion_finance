import "./Select.css"

const Select = (props) => {
    return(
        <>
            <label className="ml-2 text-light-color text-xs">{props.name}</label>
            <select
                id={props.id}
                className="bg-transparent text-xs border-2 border-outset border-card-color text-light-color m-3 text-black" name="Selector"
                onChange={props.handleInput}
                >

                <option value={props.v1}>{props.choix1}</option>
                <option value={props.v2}>{props.choix2}</option>
            </select><br></br>
        </>
    )
}

export default Select