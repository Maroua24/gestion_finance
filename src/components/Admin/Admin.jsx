import { useDispatch, useSelector} from "react-redux";
import { useState,useEffect} from "react";
import { AddUser } from "../../Redux/API/Admin_API";
import {getAll} from '../../Redux/API/GetAll'

function Admin() {
    const dispatch = useDispatch();
    const Users = useSelector(state => state.UsersList.UsersList);
    const isLoading = useSelector(state => state.UsersList.isLoading);

    const [inputValue, setInputValue] = useState({
        email:'',
        password:'',
    });
    const clearInputValues = () => {
        setInputValue({
            email:'',
            password:'',
        });
    };

    const handleInput=(e) => {
        setInputValue({...inputValue,[e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch(AddUser(inputValue))
        clearInputValues();
    }
    useEffect(()=>{
        //dispatch(getAll("http://127.0.0.1:8000/api/users/"));
        dispatch(getAll("https://jsonplaceholder.typicode.com/users"));
    },[dispatch]);
    return (
        <div className='ml-[37%] md:ml-[34%] lg:ml-[31%]'>
            <h1 className='text-primary text-8xl   ml-[1%] sm:text-lg sm:ml-[12%] sm:m-1 lg:text-4xl lg:m-9 xl:text-5xl xl:m-12 2xl:text-6xl'>
                Registration
            </h1>
            <form onSubmit={handleSubmit} className='border border-primary shadow shadow-md  sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl'>
                <div className="m-3 npm start">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email"
                            className="form-control w-full xl:h-12 xl:text-xl  2xl:h-16 2xl:text-3xl" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'
                            value={inputValue.email} onChange={handleInput}/>
                </div>
                <div className="m-3">
                    <label htmlFor="exampleInputPassword1" className="form-label ">Mot de passe</label>
                    <input name='website' type="password"
                            className="form-control w-full  xl:h-12 xl:text-xl 2xl:h-16 2xl:text-3xl" 
                            id="exampleInputPassword1" placeholder='Mot de passe'
                            value={inputValue.password} onChange={handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary m-3">
                    Créer
                </button>
            </form>

            <h1 className="text-[--statistic-color] text-3xl m-3">Users</h1>
            <table className="ml-5 sm:mr-4 xl:mr-8">
                    <thead className='bg-[--statistic-color] text-white font-semibold
                                        sm:text-[10px] md:text-xl lg:text-2xl
                                        xl:text-3xl 2xl:text-4xl
                                    '>
                        <tr className="m-2 text-center">
                        <th scope="col" className='py-2 px-4'>id</th>
                            <th scope="col" className='py-2 px-4 cursor-pointer ' >Email</th>
                            <th scope="col" className='py-2 px-4 cursor-pointer ' >password</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            isLoading ?
                                <div class="d-flex align-items-center text-primary md:text-2xl lg:text-3xl">
                                    <strong>Loading...</strong>
                                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                </div>:
                                Users
                                    .map((User) => (
                                        <tr key={User.id} className="shadow-md sm:text-[10px] md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">
                                            <td className="pl-6">{User.id}</td>
                                            <td className="p-3 ">{User.email}</td>
                                            <td>{User.password}</td>
                                        </tr>
                                    ))
                        }
                    </tbody>
                </table>

        </div>
    )
}

export default Admin