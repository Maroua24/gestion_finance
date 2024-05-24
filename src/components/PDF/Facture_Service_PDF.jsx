import React from 'react';
import { Page, Text, Document, StyleSheet, View, Image } from '@react-pdf/renderer';
import backgroundImage from '../../images/facture_tamplate.png';

const Facture_Service_PDF = ({ Facture, Factures }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
    },
    background: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      zIndex: -1,
    },
    content: {
      position: 'relative',
      zIndex: 1,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: 'Times-Roman',
    },
    header: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    text: {
      marginVertical: 10,
      fontSize: 14,
      textAlign: 'justify',
    },
    table: {
      marginTop: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#000000',
    },
    tableRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 24,
    },
    tableCell: {
      width: '33%',
      borderRight: '1px solid #000000',
      borderBottom: '1px solid #000000',
      textAlign: 'center',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'gray',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={backgroundImage} style={styles.background} />
        <View style={styles.content}>
          <Text style={styles.header}>Facture Service</Text>
          <Text style={styles.text}>
            Date de création: {Facture.date_creation} {"\n"}
            Date de comptabilisation: {Facture.date_comptabilisation} {"\n"}
            Date d'échéance: {Facture.date_decheance} {"\n"}
            Non payée: {Facture.non_payée}
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Date de création</Text>
              <Text style={styles.tableCell}>Date de comptabilisation</Text>
              <Text style={styles.tableCell}>Date d'échéance</Text>
            </View>
            {Factures.map((facture) => (
              <View key={facture.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{facture.date_creation}</Text>
                <Text style={styles.tableCell}>{facture.date_comptabilisation}</Text>
                <Text style={styles.tableCell}>{facture.date_decheance}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </View>
      </Page>
    </Document>
  );
};

export default Facture_Service_PDF;
