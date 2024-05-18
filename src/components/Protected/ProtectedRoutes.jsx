import { Navigate,Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const isLoggedIn = useSelector( state => state.authentication.isLoggedIn);

    return isLoggedIn ? <Outlet/> : <Navigate to='/'/>
}

export default ProtectedRoutes