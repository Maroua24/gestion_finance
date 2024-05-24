import { useDispatch} from "react-redux";
import { useState} from "react";
import { AddUser } from "../../Redux/API/Admin_API";
function Admin() {
    const dispatch = useDispatch();

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
    return (
        <div className='ml-[37%] md:ml-[34%] lg:ml-[31%]'>
            <h1 className='text-primary text-8xl   ml-[1%] sm:text-lg sm:ml-[12%] sm:m-1 lg:text-4xl lg:m-9 xl:text-5xl xl:m-12 2xl:text-6xl'>
                Page d'administration
            </h1>
            <form onSubmit={handleSubmit} className='border border-primary shadow shadow-md  sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl'>
                <div className="m-3 npm start">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email"
                            className="form-control w-full xl:h-12 xl:text-xl  2xl:h-16 2xl:text-3xl" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'
                            value={inputValue.email} onChange={handleInput}/>
                </div>
                <div className="m-3">
                    <label for="exampleInputPassword1" className="form-label ">Mot de passe</label>
                    <input name='website' type="password"
                            className="form-control w-full  xl:h-12 xl:text-xl 2xl:h-16 2xl:text-3xl" 
                            id="exampleInputPassword1" placeholder='Mot de passe'
                            value={inputValue.password} onChange={handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary m-3">
                    Créer
                </button>
            </form>
        </div>
    )
}

export default Admin