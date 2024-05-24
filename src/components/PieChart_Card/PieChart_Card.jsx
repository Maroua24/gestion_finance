import { Statistic } from "../index";
import {PieChart, Pie } from "recharts"
const PieChart_Card = (props) =>{
    const data = [
        {name : props.Key_name1, value: props.Key_value1, fill: '#409B9B'},
        {name : props.Key_name2, value: props.Key_value2, fill: '#F06513'},
    ]
    return (
        <>
        <div className="inline-block">
            <div className='bg-[--card-color] text-[--light-color] m-6 ml-6 cursor-pointer font-[--Main-font]  shadow-lg
                                sm:h-[100px] sm:w-[220px] md:h-[110px] md:w-[290px]
                                lg:h-[120px] lg:w-[330px] 2xl:h-[170px] 2xl:w-[470px]
                            '>
                <p className='container text-3xl mb-3
                                sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                                '>
                    {props.title}
                </p>
            </div>

            <div className="border border-solid border-[--light-color] bg-[--statistic-color] shadow-lg ml-6
                            sm:w-[220px] md:w-[290px] lg:w-[330px] 2xl:w-[470px]
                            sm:h-[320px] lg:h-[350px]">
                    <PieChart  width={450} height={140}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="35%"
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
                </div>
        </>
    )
}
export default PieChart_Card