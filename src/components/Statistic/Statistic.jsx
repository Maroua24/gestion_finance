const statistic = (props) =>{
    return(
        <>
            <div style={{display:"flex"}}>
                <div className='w-4 h-4 border border-white m-1' style={{background:props.color}}></div>
                <p className='mb-3 text-[--light-color] sm:text-xs md:text-base lg:text-lg 2xl:text-xl'>{props.details}</p>
            </div>
        </>
    )
}
export default statistic