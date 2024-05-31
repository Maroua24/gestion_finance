import { Page, Text, Document, StyleSheet, View ,Image} from '@react-pdf/renderer';
// import {useDispatch,useSelector} from "react-redux";
import logo from "../../images/logo_icosnet_sgs.png"
import stamp from "../../images/stamp-removebg-preview.png"
import { useEffect,useState} from 'react';

const Avoires_PDF = ({id}) => {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result = JSON.parse(result)
            setData(result);
            console.log(result)
            // console.log(JSON.parse(result).id)
        }) //set  the data

        .catch((error) => console.error(error));
    }, []);

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 20,
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Times-Roman",
        },
        somme:{
            fontSize: 12,
            padding:5,
            textAlign: "center",
            borderStyle: "solid",
            borderWidth: 1,
            margin:5,
        },
        header: {
            fontSize: 10,
            marginBottom: 20,
        },
        image:{
          height:"100%",
          width:"100%"
        },
        pageNumber: {
            fontSize: 12,
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
        sec_table: {
          display: "table",
          width: "100%",
          // borderStyle: "solid",
          // borderWidth: 1,
          marginTop:4,
          marginLeft:170,
          // borderRightWidth: 0,
          // borderBottomWidth: 0,
      },
        tableRow: {
            margin: "auto",
            flexDirection: "row",
        },
        tableCell: {
            fontSize:12,
            // margin: "auto",
            marginVertical: 5,
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            width: "15%",
            textAlign: "center",
            fontWeight: "bold",
        },
        banque:{
          fontSize: 8,
        },
        row: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        },
        column: {
          width: "50%",
        },
        sous_titre:{
          fontSize:13,
        },
        stamp:{
          width:"40%"
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.body}>
            <View style={styles.row}>
                <Image style={styles.image} src={logo} />
                <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                fixed
                />
            </View>
            <Text>{'\n'}</Text>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.header} fixed>
                    Centre des affaires El Qods{'\n'}
                    6eme niveau de la tour centrale {'\n'}
                    16002 Cheraga {'\n'}
                    {'\n'}
                  </Text>
                  <Text style={styles.header} fixed>
                    Tel:    021 99 33 42 {'\n'}
                    Fax:    0982 300 301 {'\n'}
                    Site:   www.icosnet.com.dz {'\n'}
                    Email:  commericail@icosnet.com {'\n'}
                            finance@icosnet.com {'\n'}
                  </Text>
                    <Text style={styles.header} fixed>
                        N doc. lettrage
                        {'\n\n'}
                        Type doc. lettrage   Facture {'\n'}
                    </Text>
                </View>
                <View style={styles.column}>
                  <Text>
                  </Text>
                    <Text style={styles.title}>Facture N : F20240000{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    <Text style={styles.sous_titre}>
                    Alger le : 23/4/1023 {'\n'}
                    <Text style={styles.bold}>Client:</Text> ABC Company {'\n'}
                    {'\n'}
                    <Text style={styles.bold}>Code client:</Text> ABC {'\n'}
                    <Text style={styles.bold}>Adresse:</Text> New York {'\n'}
                    </Text>
                    <Text>{'\n'}</Text>
                <Text style={styles.header}>
                    "New York" {'\n'}
                    "New York" {'\n'}
                    Tel: 098765368 {'\n'}
                    RC: 7800435680 {'\n'}
                    NIF: 00099987765 {'\n'}
                    ART: // {'\n'}
                    NIS: {'\n'}
                </Text>
                </View>
                </View>

                    <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Ref</Text>
                        <Text style={styles.tableCell}>Designation</Text>
                        <Text style={styles.tableCell}>QTE</Text>
                        <Text style={styles.tableCell}>Prix unitaire</Text>
                        <Text style={styles.tableCell}>Montant</Text>
                        <Text style={styles.tableCell}>R%</Text>
                        <Text style={styles.tableCell}>TVA%</Text>
                    </View>
                    {/* {FACTURE.map((Facture) => ( */}
                        {/* <View key={Facture.id} style={styles.tableRow}> */}
                            {/* <Text style={styles.tableCell}>{Facture.id}</Text>
                          <Text style={styles.tableCell}>{Facture.userId}</Text> */}
                          {/* <Text style={styles.tableCell}>kkkk</Text>
                          <Text style={styles.tableCell}>000</Text>
                          <Text style={styles.tableCell}>jjj</Text>
                          <Text style={styles.tableCell}>777</Text>
                          <Text style={styles.tableCell}>ooo</Text>
                          <Text style={styles.tableCell}>jjj</Text>
                          <Text style={styles.tableCell}>----</Text> */}
                            {/* {/* <Text style={styles.tableCell}>{Facture.date_creation}</Text> */}
                        {/* </View> */}
                    {/* ))} */}
                </View>

                <View style={styles.sec_table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Totale DZD TTC</Text>
                        <Text style={styles.tableCell}>-99000</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>Totale DZD TTC</Text>
                        <Text style={styles.tableCell}>-99000</Text>
                    </View>
                </View>

                    <Text style={styles.somme}>
                      Arrete la presnete a la somme de : douze mile neuf dinar algeriens
                    </Text>

                <View style={styles.row}>
                  <View style={styles.column}>
                    <Text style={styles.header}>
                      Modalite de paiment: {'\n'}
                      Echence de paiment:  {'\n'}
                      Date depot facture : 9/9/2021 {'\n'}
                      Zone de recouvrement: {'\n'}
                    </Text>
                  </View>
                  <View style={styles.column}>
                    <Image  style={styles.stamp}  src={stamp} />
                  </View>
                </View>

                <Text style={styles.banque}>
                  <Text  className="font-black">Comptes bancaires:</Text>
                  {'\n\n'}
                  <Text style={styles.bold}>Banque BNP: </Text>
                  Lot N 01 Amara ll Route de Oued Fayet Alger RIB : 027007030000202/00117 SWIFT BNPADZAL
                  {'\n\n'}
                  <Text style={styles.bold}>Banque NATIXIS: </Text>
                  Immeuble El Ksar, Lot 34/35 Zone d'affaires Mercure Bab Ezzouar RIB: 020 00168 7290412001 56 SWIFT:NATXDZAL
                  {'\n\n'}
                  <Text style={styles.bold}>Banque SGA: </Text>
                  Agence de CHERAGA KAOUCHE Lotissement Kaouche, Cheraga RIB: 021 00003 1130049870/46 SWIFT:SOGEDZAL
                </Text>

            </Page>
        </Document>
    );
}

export default Avoires_PDF;
