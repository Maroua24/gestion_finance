function Check_box(props) {

    return (
        <div>

            <div class="form-check">
            <input className="form-check-input"
            type="radio"
            id="flexRadioDefault1"
            name={props.name}
            value={props.value}
            onChange={props.onChange}/>
            <label className="form-check-label text-xs
                            md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                            htmlFor="flexRadioDefault1">
                            {props.choice}
            </label>
            </div>
        </div>
)
}

export default Check_box