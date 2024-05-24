import {PieChart_Card , StraightPieChart_Card , TowLevelPieChart_Card ,BarChart_Card} from '../index';

const Dashboard = () => {
    return (
        <>
        <div className='flex flex-wrap h-200'>

            <PieChart_Card title="Factures"
                Key_name1="Nombre de Facture vente" Key_value1={13948}
                Key_name2="Nombre de Facture service" Key_value2={47277}
            />

            <PieChart_Card title="Avoires"
                Key_name1="Nombre des Avoirs vente" Key_value1={688}
                Key_name2="Nombre des Avoirs services" Key_value2={2781}
            />


            <StraightPieChart_Card title="Client VIP"
                Key_name1="Nombre de Client VIP" Key_value1={65}
                Key_name2="Nombre de Client VIP Actif" Key_value2={65}
                Key_name3="Nombre de Client VIP Inactif" Key_value3={65}
                Key_name4="Nombre des Client VIP Bloque" Key_value4={0}
            />

            <TowLevelPieChart_Card title="Suspensions"
                Key_name1="Nombre de toutes les Suspensions" Key_value1={3}
                Key_name2="Nombre de  Suspensions" Key_value2={0}
                Key_name3="Nombre de date a Suspendre" Key_value3={0}
            />

            <StraightPieChart_Card title="Paiement"
                Key_name1="Nombre de paiement " Key_value1={69237}
                Key_name2="Nombre de paiement annule" Key_value2={46}
                Key_name3="Nombre de paiement complet" Key_value3={69104}
                Key_name4="Nombre de paiement partie" Key_value4={87}
            />

            <BarChart_Card title="Paiement"
                Key_name1="Nombre de paiement par autre" Key_value1={688}
                Key_name2="Nombre de paiement par cheque" Key_value2={13948}
                Key_name3="Nombre de paiement par CIB" Key_value3={0}
                Key_name4="Nombre de paiement par espece" Key_value4={47277}
                Key_name5="Nombre de paiement par virement" Key_value5={807}
            />

            <TowLevelPieChart_Card title="Paiement"
                Key_name1="Nombre de paiement proformat" Key_value1={0}
                Key_name2="Nombre de paiement proformat CRM" Key_value2={0}
                Key_name3="Nombre de paiement proformat Site" Key_value3={0}
            />
        </div>
        </>
    )
}

export default Dashboard