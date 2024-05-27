import {Style} from "../index"
const Input = (props) => {
    return(
        <>
            <div className="block flex-wrap h-5 m-4 md:h-8 lg:h-11 xl:h-14 2xl:h-16 ">
                <label className="text-xs
                                md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    <Style>
                        {props.label}
                        <p className="text-red-500">*</p>
                    </Style>
                </label>
                <input
                    type={props.type}
                    id="input"
                    className={`bg-transparent border border-solid w-full h-5 border-2 border-outset focus:border-transparent
                            md:h-[30px] md:text-lg
                            lg:h-[35px] lg:text-xl
                            xl:h-[40px] xl:text-2xl
                            2xl:h-[50px] 2xl:text-3xl ${props.cursor}`}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            </div>
        </>
    )
}

export default Input