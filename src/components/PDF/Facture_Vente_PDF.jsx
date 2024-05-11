import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';
import {useSelector} from "react-redux";

const Facture_Vente_PDF = ({client,Clients}) => {

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
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
                <Text style={styles.header} fixed>Facture Vente</Text>
                <Text style={styles.text}>
                    {client.name}
                    {client.username}
                    {client.email}
                    {client.phone}
                </Text>
                <Text style={styles.text}>
                    {client.website}
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                    fixed
                />

                    <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Item</Text>
                        <Text style={styles.tableCell}>Quantity</Text>
                        <Text style={styles.tableCell}>Price</Text>
                        <Text style={styles.tableCell}>Total</Text>
                    </View>
                    {/* Map over your items to create table rows */}
                    {Clients.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{item.name}</Text>
                            <Text style={styles.tableCell}>{item.username}</Text>
                            <Text style={styles.tableCell}>{item.email}</Text>
                            <Text style={styles.tableCell}>{item.email }</Text>
                        </View>
                    ))}
                </View>

            </Page>
        </Document>
    );
}

export default Facture_Vente_PDF;
