// import "./Input.css"

const Input = (props) => {
    return(
        <>
            <div className="block flex-wrap h-5 m-4">
                <label className="text-xs">{props.name}</label>
                <input
                    type={props.type}
                    id="input"
                    className="bg-transparent border border-solid border-[--light-color] w-full h-5 text-[--light-color] border-2 border-outset focus:border-transparent"
                    name=""
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}

export default Input