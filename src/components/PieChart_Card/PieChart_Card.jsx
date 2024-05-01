import { Statistic } from "../index";
import { MdReadMore } from "react-icons/md";
import { useState } from 'react';
import {PieChart, Pie } from "recharts"
const PieChart_Card = (props) =>{
    const data = [
        {name : props.Key_name1, value: props.Key_value1, fill: '#409B9B'},
        {name : props.Key_name2, value: props.Key_value2, fill: '#F06513'},
    ]
    const [statistic, setstatistic] = useState(false);
    const click = () =>{
        setstatistic(!statistic)
    }
    return (
        <>
        <div className="inline-block sm:h-[200px] sm:w-[240px] lg:h-[50px] 2xl:h-[40%]">
            <div className='bg-[--card-color] text-[--light-color] m-6 ml-6 cursor-pointer  font-[--Main-font]   shadow-lg'
                            onClick={click}>
                <p className='container text-3xl mb-3
                                sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                                '>
                    {props.title}
                </p>
                <button className='text-2xl bg-Menu-hover border-b border-solid border-light-color border-r'>
                    <a href="" className="mr-2 sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl
                                ">
                        More Info
                    </a>
                    <MdReadMore  className='sm:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl'/>
                </button>
            </div>

            {statistic &&(
            <div className="border border-solid border-[--light-color] bg-[--statistic-color] shadow-lg ">
                    <PieChart  width={450} height={140}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="25%"
                            cy="48%"
                            outerRadius={55}
                            label ={{fontSize: 17,}}
                        />
                    </PieChart>

                <div className='m-neg-14 m-3 mb-5 mr-0'>
                    <Statistic color="#409B9B" details={props.Key_name1}/>
                    <Statistic color="#F06513" details={props.Key_name2}/>
                </div>
                </div>
                )}
                </div>
        </>
    )
}
export default PieChart_Card