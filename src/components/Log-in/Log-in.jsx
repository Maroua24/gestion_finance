const Log_in = () => {
    return (
        <>
        <div className='ml-[37%] md:ml-[34%] lg:ml-[31%]'>
            <h1 className='text-primary text-8xl   ml-[1%] sm:text-4xl sm:ml-[22%] sm:m-1 lg:text-6xl lg:m-9 xl:text-7xl xl:m-12 2xl:text-8xl'>
                Icosnet
            </h1>
            <form className='border border-primary shadow shadow-md  sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl'>
                <div className="m-3 npm start">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control sm:w-48 lg:w-64 xl:w-80 xl:h-12 xl:text-xl 2xl:w-96 2xl:h-16 2xl:text-3xl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                </div>
                <div className="m-3">
                    <label for="exampleInputPassword1" className="form-label ">Mot de passe</label>
                    <input type="password" className="form-control sm:w-48 lg:w-64 xl:w-80 xl:h-12 xl:text-xl 2xl:w-96 2xl:h-16 2xl:text-3xl" id="exampleInputPassword1" placeholder='Mot de passe'/>
                </div>
                <button type="submit" className="btn btn-primary m-3">
                    <a href="/Main" className='hover:text-[--light-color] xl:text-xl 2xl:text-3xl'>Log in</a>
                </button>
            </form>
        </div>
        </>
    )
}

export default Log_in;