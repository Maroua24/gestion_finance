
const Select = (props) => {
    return(
        <>
            <label className="ml-5 text-light-color text-xs md:text-lg xl:text-2xl 2xl:text-3xl">
                {props.label}
            </label>
            <select
                id={props.id}
                className="bg-transparent text-xs  border-2 border-outset border-card-color m-3 text-black
                            md:h-[35px] md:w-[95px] md:text-lg
                            lg:h-[40px] lg:w-[110px] lg:text-xl
                            xl:h-[45px] xl:w-[130px] xl:text-2xl
                            2xl:h-[50px] 2xl:w-[150px] 2xl:text-3xl"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                >
                <option value={props.value_1}>{props.choix1}</option>
                <option value={props.value_2}>{props.choix2}</option>
            </select><br></br>
        </>
    )
}

export default Select