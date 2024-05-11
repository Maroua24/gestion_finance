import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css"
import {Style,Log_in,Main,Nav,Client,AddClient,EditClient,Client_VIP, Facture_Service,Facture_vente,Paiment,AddFactureService,AddFactureVente,Add_payment,FactureImpayees,Client_info,Facture_Vente_Info} from "./components/index"

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
                        <Route path='/Client_info/:id' element={<Client_info/>}/>

                        <Route path='/client_VIP' element={<Client_VIP/>}/>

                        <Route path='/Facture_vente' element={<Facture_vente/>}/>
                        <Route path='/Facture_Vente_Info/:id' element={<Facture_Vente_Info/>} />

                        <Route path='/Facture_Service' element={<Facture_Service/>}/>

                        <Route path='/Facture_Impayees' element={<FactureImpayees/>}/>

                        <Route path='/Paiment' element={<Paiment/>}/>
                        <Route path='/Add_payment' element={<Add_payment/>}/>
                    </Routes>
                </Style>
            </Router>
        </>
    )
}

export default App