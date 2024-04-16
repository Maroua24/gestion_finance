import './Nav.css'
import icosnet from '../../images/icosnet-removebg-preview.png'
const Nav = () => {
    return (
        <>
        <nav className="navbar border-b border-solid border-outset">
            <div >
                <img src={icosnet} alt="" width="40" height="30" />
            </div>
        </nav>
        </>
    )
}

export default Nav