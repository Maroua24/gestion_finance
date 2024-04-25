import { IoSearchSharp } from "react-icons/io5";
import {Style} from "../index"

const Search_input = (props) => {
    return (
        <form>
            <Style>
                <input
                    type="text"
                    placeholder='Search...'
                    className="ml-[70%] shadow-md p-1 pr-8 sm:w-[20%] md:w-[30%] lg:w-[40%]   "
                    onChange={props.onChange}
                />
                <IoSearchSharp className='text-[--light-color] bg-[--statistic-color] absolute ml-[69%] mt-2 p-1 rounded-xl' />
            </Style>
        </form>
    )
}

export default Search_input