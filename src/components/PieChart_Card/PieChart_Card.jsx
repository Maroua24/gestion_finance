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
        <div className="inline-block">
            <div className='bg-[--card-color] text-[--light-color] m-6 ml-6 cursor-pointer h-16 w-56 font-Main-font transition duration-700 hover:border-2 border-inset border-royal-blue shadow-md' onClick={click}>
                <p className='container'>{props.title}</p>
                <button className='text-xs w-16 bg-Menu-hover border-b border-solid border-light-color border-r'>
                    <a href="" className="text-light-color">More Info</a>
                    <MdReadMore  className='ml-1 transform -rotate-90 hover:More-icon transition duration-700 transform rotate-0'/>
                </button>
            </div>

            {statistic &&(
            <div className="w-[230px] h-[220px] ml-5  mb-0 mt-30 border border-solid border-light-color bg-[--statistic-color] shadow-md ">
                    <PieChart width={200} height={140}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="55%"
                            cy="40%"
                            outerRadius={30}
                            label ={{fontSize: 10,}}
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