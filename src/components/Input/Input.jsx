
const Input = (props) => {
    return(
        <>
            <div className="block flex-wrap h-5 m-4">
                <label className="text-xs">{props.label}</label>
                <input
                    type={props.type}
                    id="input"
                    className="bg-transparent border border-solid border-[--light-color] w-full h-5 border-2 border-outset focus:border-transparent"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
            {/* <div class="mb-3 row">
                <label for="staticEmail" class="text-xs col-sm-2 col-form-label">{props.label}</label>
                <div class="col-sm-10">
                    <input
                        type={props.type}
                        class="form-control-plaintext bg-transparent border border-solid border-[--light-color] w-full h-5 text-[--light-color] border-2 border-outset focus:border-transparent"
                        id="input"
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            </div> */}
        </>
    )
}

export default Input