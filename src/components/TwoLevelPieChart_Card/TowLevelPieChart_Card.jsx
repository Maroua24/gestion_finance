import { Statistic } from "../index";
import { MdReadMore } from "react-icons/md";
import { useState } from 'react';
import { PieChart, Pie} from "recharts"
const TowLevelPieChart_Card = (props) => {
    const data = [
        { name: props.Key_name1, value: props.Key_value1, fill: '#409B9B' },
        { name: props.Key_name2, value: props.Key_value2, fill: '#F06513' },
        { name: props.Key_name3, value: props.Key_value3, fill: '#705B41' },
    ]
    const [statistic, setstatistic] = useState(false);
    const click = () => {
        setstatistic(!statistic)
    }
    return (
        <>
            <div className="inline-block w-[40%] h-[40%] sm:h-[30%] lg:h-[35%] 2xl:h-[40%]">
                <div className='bg-[--card-color] text-[--light-color] m-6 ml-6 cursor-pointer  h-[60%] w-[90%] font-Main-font transition duration-700 hover:border-2 border-inset border-royal-blue shadow-lg' onClick={click}>
                    <p className='container text-3xl mb-3
                                    sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                                    '>
                        {props.title}
                    </p>
                    <button className=' text-2xl bg-Menu-hover border-b border-solid border-light-color border-r'>
                        <a href="" className="mr-2 sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl">
                            More Info
                        </a>
                        <MdReadMore  className='sm:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl'/>
                    </button>
                </div>

                {statistic && (
                    <div className="w-[230px] h-[270px] ml-5  mb-0 mt-30 border border-solid border-light-color bg-[--statistic-color] shadow-md ">
                        <PieChart width={200} height={140}>
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={50}
                                label={{ fontSize: 10,}}
                            />
                        </PieChart>

                        <div className='m-neg-14 ml-3  mr-0'>
                            <Statistic color="#409B9B" details={props.Key_name1} />
                            <Statistic color="#F06513" details={props.Key_name2} />
                            <Statistic color="#705B41" details={props.Key_name3} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default TowLevelPieChart_Card