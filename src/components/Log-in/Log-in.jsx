import './Log-in.css'

const Log_in = () => {
    return (
        <>
            <form className='form'>
                <div className="mb-2  ml-[580px] mr-9 mt-5">
                    <label className="form-label text-[#0284fe]">Email address</label>
                    <input type="email" className="form-control w-64 h-6" id=""/>
                </div>

                <div className="mb-3  ml-[580px]">
                    <label className="form-label text-[#0284fe]">Password</label>
                    <input type="password" className="form-control w-64 h-6" id="" />
                </div>

                <button type="submit" className="btn btn-primary ml-[580px] mb-[212px] ">
                    <a href="/Main" className='text-[#0284fe] text-white'>Log in</a>
                </button>
            </form>
        </>
    )
}

export default Log_in;