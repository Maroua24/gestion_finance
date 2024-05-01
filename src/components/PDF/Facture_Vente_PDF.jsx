import { Page, Text,Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body:{
        paddingTop:35,
        paddingBottom:65,
        paddingHorizontal:35,
    },
    title:{
        fontSize:24,
        textAlign:"centre",
    },
    text:{
        margin:12,
        fontSize:14,
        textAlign:"justify",
        fontFamily:"Times-Roman",
    },
    header:{
        fontSize:12,
        marginBottom:20,
        textAlign:"center",
        color:"gray",
    },
    pageNumber:{
        position:"absolute",
        fontSize:12,
        bottom:30,
        left:0,
        right:0,
        textAlign:"center",
        color:"gray",
    },
});

const Facture_Vente_PDF = () => (
    <Document>
        <Page size="A4" style={styles.body}>
            <Text style={styles.header} fixed></Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea placeat expedita quae? Praesentium nemo totam nisi corrupti expedita saepe tempora nostrum, ipsum repellat, delectus facilis soluta ex et amet fugiat.</Text>
            <Text
                style={styles.pageNumber}
                render={({pageNumber,totalPages}) => `${pageNumber} / ${totalPages}`}
                fixed
            />
        </Page>
    </Document>
)

export default Facture_Vente_PDF

