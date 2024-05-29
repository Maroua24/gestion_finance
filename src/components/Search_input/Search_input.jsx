import { IoSearchSharp } from "react-icons/io5";
import {Style} from "../index"

const Search_input = (props) => {
    return (
        <form>
            <Style>
                <input
                    type="text"
                    placeholder='Search...'
                    className="shadow-md p-1 pr-8 sm:w-[20%] sm:ml-[70%] md:text-xl
                                lg:text-3xl xl:text-4xl xl:w-[300px] xl:h-[50px] xl:ml-[61.5%]
                                2xl:w-[400px] 2xl:h-[60px] 2xl:ml-[59%]
                                "
                    onChange={props.onChange}
                />
                {/* <IoSearchSharp
                    className='text-[--light-color] bg-[--statistic-color] absolute mt-2 p-1 rounded-xl
                                sm:ml-[77%] md:ml-[80%] lg:text-3xl lg:ml-[82%]
                                xl:ml-[74%]
                                '
                /> */}
            </Style>
        </form>
    )
}

export default Search_input