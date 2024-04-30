import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Nav} from "../index"

const ClientInfo = () => {
    const { id } = useParams();
    const clientId = parseInt(id);
    const client = useSelector(state => state.ClientList.ClientsList.find(c => c.id === clientId));

    return (
        <div>
            <Nav/>
            <div>
                <h2>Client Information</h2>
                <p>ID: {client.id}</p>
                <p>Name: {client.name}</p>
                <p>Username: {client.username}</p>
                <p>Email: {client.email}</p>
                <p>Website: {client.website}</p>
                <p>phone: {client.phone}</p>
                <p>company Name: {client.company.name}</p>
                <p>company catchPhrase: {client.company.catchPhrase}</p>
                <p>company Name: {client.company.name}</p>
            </div>
        </div>
        
    );
};

export default ClientInfo;
