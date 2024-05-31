// src/components/Log_in.js
import { logIn } from '../../Redux/API/Log_in_API';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Log_in = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
    const error = useSelector(state => state.authentication.error);

    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    });

    const clearInputValues = () => {
        setInputValue({
            email: '',
            password: '',
        });
    };

    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(logIn(inputValue));
        clearInputValues();
    };

    if (isLoggedIn) {
        navigate('/Main');
    }

    return (
        <>
            <div className='ml-[37%] md:ml-[34%] lg:ml-[31%]'>
                <h1 className='text-primary text-8xl ml-[1%] sm:text-4xl sm:ml-[22%] sm:m-1 lg:text-6xl lg:m-9 xl:text-7xl xl:m-12 2xl:text-8xl'>
                    Icosnet
                </h1>
                <form onSubmit={handleLogin} className='border border-primary shadow shadow-md sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl'>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' type="email"
                            className="form-control sm:w-48 lg:w-64 xl:w-80 xl:h-12 xl:text-xl 2xl:w-96 2xl:h-16 2xl:text-3xl"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'
                            value={inputValue.email} onChange={handleInput} />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input name='password' type="password"
                            className="form-control sm:w-48 lg:w-64 xl:w-80 xl:h-12 xl:text-xl 2xl:w-96 2xl:h-16 2xl:text-3xl"
                            id="exampleInputPassword1" placeholder='Mot de passe'
                            value={inputValue.password} onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary m-3">
                        Log in
                    </button>
                    {error && <p className="text-red-500 m-3">{error}</p>}
                </form>
            </div>
        </>
    );
};

export default Log_in;
