function Check_box(props) {
    return (
        <div class="form-check">
            <input className="form-check-input" type="radio"  id="flexRadioDefault1"/>
            <label className="form-check-label text-xs
                                md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                    for="flexRadioDefault1">
                {props.label}
            </label>
        </div>
)
}

export default Check_box