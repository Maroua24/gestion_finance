import {PieChart_Card , StraightPieChart_Card , TowLevelPieChart_Card ,BarChart_Card} from '../index';
import { useEffect,useState } from 'react';

const Dashboard = () => {
const [FactureVente, setFactureVente] = useState(null);
const [FactureService, setFactureService] = useState(null);
const [AvoiresVente, setAvoiresVente] = useState(null);
const [AvoiresService, setAvoiresService] = useState(null);
const [paiement, setpaiement] = useState(null);
const [paiementComplet, setpaiementComplet] = useState(null);
const [paimentpartiel, setpaimentpartiel] = useState(null);
const [Client, setClient] = useState(null);
const [ClientVIP, setClientVIP] = useState();
useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/factures-vente/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setFactureVente(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/factures-service/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setFactureService(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/avoirs_vente/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setAvoiresVente(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/avoirs_service/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setAvoiresService(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/paiements/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setpaiement(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/paiements_complet/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setpaiementComplet(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/paiements_partiel/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setpaimentpartiel(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/clients/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setClient(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data

useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/clients/statistiques/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setClientVIP(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
})} )//set  the data
    return (
        <>
        <div className='flex flex-wrap h-200'>

            <PieChart_Card title="Factures"
                Key_name1="Nombre de Facture vente" Key_value1={FactureVente}
                Key_name2="Nombre de Facture service" Key_value2={FactureService}
            />

            <PieChart_Card title="Avoires"
                Key_name1="Nombre des Avoirs vente" Key_value1={AvoiresVente}
                Key_name2="Nombre des Avoirs services" Key_value2={AvoiresService}
            />


            <StraightPieChart_Card title="Paiement"
                Key_name1="Nombre de paiement " Key_value1={paiement}
                Key_name3="Nombre de paiement complet" Key_value3={paiementComplet}
                Key_name4="Nombre de paiement partiel" Key_value4={paimentpartiel}
            />

            <PieChart_Card title="Client"
                Key_name1="Nombre des client" Key_value1={Client}
                Key_name2="Nombre des client VIP" Key_value2={ClientVIP}
            />

            {/* <BarChart_Card title="Paiement"
                Key_name1="Nombre de paiement par autre" Key_value1={8}
                Key_name2="Nombre de paiement par cheque" Key_value2={8}
                Key_name3="Nombre de paiement par CIB" Key_value3={0}
                Key_name4="Nombre de paiement par espece" Key_value4={7}
                Key_name5="Nombre de paiement par virement" Key_value5={8}
            /> */}

            {/* <StraightPieChart_Card title="Client VIP"
                Key_name1="Nombre de Client VIP" Key_value1={6}
                Key_name2="Nombre de Client VIP Actif" Key_value2={9}
                Key_name3="Nombre de Client VIP Inactif" Key_value3={5}
                Key_name4="Nombre des Client VIP Bloque" Key_value4={9}
            /> */}

            {/* <TowLevelPieChart_Card title="Suspensions"
                Key_name1="Nombre de toutes les Suspensions" Key_value1={3}
                Key_name2="Nombre de  Suspensions" Key_value2={0}
                Key_name3="Nombre de date a Suspendre" Key_value3={0}
            /> */}



            {/* <TowLevelPieChart_Card title="Paiement"
                Key_name1="Nombre de paiement proformat" Key_value1={0}
                Key_name2="Nombre de paiement proformat CRM" Key_value2={0}
                Key_name3="Nombre de paiement proformat Site" Key_value3={0}
            /> */}
        </div>
        </>
    )
}

export default Dashboard