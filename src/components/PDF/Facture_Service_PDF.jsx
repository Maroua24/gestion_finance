import { Page, Text, Document, StyleSheet, View,Image } from '@react-pdf/renderer';
import image from '../../images/facture_tamplate.png'

const Facture_Service_PDF = ({Facture,Factures}) => {

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        background: {
            position:"absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex:0,
        },
        title: {
            fontSize: 24,
            textAlign: "center",
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Times-Roman",
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "gray",
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "gray",
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            zIndex:1,
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row",
        },
        tableCell: {
            margin: "auto",
            marginVertical: 5,
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            width: "25%",
            textAlign: "center",
        },
    });


    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>Facture Service</Text>

                <Image
                    style={styles.background}
                    src={image}
                />
                <Text style={styles.text}>
                    {Facture.date_creation}
                    {Facture.date_comptabilisation}
                    {Facture.date_decheance}
                    {Facture.non_payée}
                </Text>

                    <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Item</Text>
                        <Text style={styles.tableCell}>Quantity</Text>
                        <Text style={styles.tableCell}>Price</Text>
                        <Text style={styles.tableCell}>Total</Text>
                    </View>
                    {Factures.map((Facture) => (
                        <View key={Facture.id} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{Facture.date_creation}</Text>
                            <Text style={styles.tableCell}>{Facture.date_comptabilisation}</Text>
                            <Text style={styles.tableCell}>{Facture.date_decheance}</Text>
                        </View>
                    ))}
                </View>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                    fixed
                />

            </Page>
        </Document>
    );
}

export default Facture_Service_PDF;
