import "./Statistic.css"

const statistic = (props) =>{
    return(
        <>
            <div style={{display:"flex"}}>
                <div className='w-4 h-4 border border-white m-1' style={{background:props.color}}></div>
                <p className='text-xs mt-1 mb-2 text-[--light-color]'>{props.details}</p>
            </div>
        </>
    )
}
export default statistic