import {PieChart_Card , StraightPieChart_Card , TowLevelPieChart_Card ,BarChart_Card} from '../index';

const Dashboard = () => {
    return (
        <>
        <div className='flex flex-wrap h-200'>

            <PieChart_Card title="Factures"
                Key_name1="Nomber de Facture vente" Key_value1={13948}
                Key_name2="Nomber de Facture service" Key_value2={47277}
            />

            <PieChart_Card title="Avoires"
                Key_name1="Nomber des Avoirs vente" Key_value1={688}
                Key_name2="Nomber des Avoirs services" Key_value2={2781}
            />


            <StraightPieChart_Card title="Client VIP"
                Key_name1="Nomber de Client VIP" Key_value1={65}
                Key_name2="Nomber de Client VIP Actif" Key_value2={65}
                Key_name3="Nomber de Client VIP Inactif" Key_value3={65}
                Key_name4="Nomber des Client VIP Bloque" Key_value4={0}
            />

            <TowLevelPieChart_Card title="Suspensions"
                Key_name1="Nomber de toutes les Suspensions" Key_value1={3}
                Key_name2="Nomber de  Suspensions" Key_value2={0}
                Key_name3="Nomber de date a Suspendre" Key_value3={0}
            />

            <StraightPieChart_Card title="Paiment"
                Key_name1="Nomber de paiment " Key_value1={69237}
                Key_name2="Nomber de paiment annule" Key_value2={46}
                Key_name3="Nomber de paiment complet" Key_value3={69104}
                Key_name4="Nomber de paiment partie" Key_value4={87}
            />

            <BarChart_Card title="Paiment"
                Key_name1="Nomber de paiment par autre" Key_value1={688}
                Key_name2="Nomber de paiment par cheque" Key_value2={13948}
                Key_name3="Nomber de paiment par CIB" Key_value3={0}
                Key_name4="Nomber de paiment par espece" Key_value4={47277}
                Key_name5="Nomber de paiment par virement" Key_value5={807}
            />

            <TowLevelPieChart_Card title="Paiment"
                Key_name1="Nomber de paiment proformat" Key_value1={0}
                Key_name2="Nomber de paiment proformat CRM" Key_value2={0}
                Key_name3="Nomber de paiment proformat Site" Key_value3={0}
            />
        </div>
        </>
    )
}

export default Dashboard