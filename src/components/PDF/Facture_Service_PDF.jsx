import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const Facture_Service_PDF = ({client}) => {

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
            </Page>
        </Document>
    );
}

export default Facture_Service_PDF;
