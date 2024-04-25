// import './Log-in.css'
import {Input} from '../index'
const Log_in = () => {
    return (
        <>
        <div className='ml-[37%] '>
            <h1 className='text-primary text-8xl m-[10%] ml-[1%]'>Icosnet</h1>
            <form className='border border-primary shadow shadow-md  text-2xl'>
                <div className="m-3 npm start">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                </div>
                <div className="m-3">
                    <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Mot de passe'/>
                </div>
                <button type="submit" className="btn btn-primary m-3">
                    <a href="/Main" className='hover:text-[--light-color]'>Submit</a>
                </button>
            </form>
        </div>






{/*

            <Input />
            <div className="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
            </div> */}

            {/* <form className='form'>
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
            </form> */}
        </>
    )
}

export default Log_in;