import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Style,Dashboard,Client,AddClient,EditClient,Menu} from "../index"
const Main = () => {
    return (
        <Style>
            <Menu/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </Style>
    )
}
export default Main