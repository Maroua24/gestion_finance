import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css"
import {Style,Log_in,Main,Client,AddClient,EditClient,Client_VIP, Facture_Service,Facture_vente,Paiment,AddFactureService,AddFactureVente} from "./components/index"

const App = () => {
    return(
        <>
            <Router>
                <Style>
                    <Routes>
                        <Route path='/' element={<Log_in/>}/>
                        <Route path='/Main' element={<Main/>}/>

                        <Route path='/client'    element={<Client/>} />
                        <Route path='/AddClient' element={<AddClient/>} />
                        <Route path='/Update'    element={<EditClient/>}/>

                        <Route path='/client_VIP' element={<Client_VIP/>}/>
                        <Route path='/Facture_vente' element={<Facture_vente/>}/>
                        <Route path='/Facture_Service' element={<Facture_Service/>}/>
                        <Route path='/Paiment' element={<Paiment/>}/>
                        <Route path='/AddFacturService' element={<AddFactureService/>}/>
                        <Route path='/AddFactureVente' element={<AddFactureVente/>}/>
                    </Routes>
                </Style>
            </Router>
        </>
    )
}

export default App