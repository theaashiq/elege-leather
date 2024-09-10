import React, { useContext } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CheckoutContextData } from '../CheckoutContext';
import { useSelector } from 'react-redux';
import './invoice.css'
// import { FormatPrice } from '../../../../services/formatPrice';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  table: {
    width: '100%',
    marginTop: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableColHeader: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRightWidth: 1,
    borderRightColor: '#ccc'
  },
  tableCol: {
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc'
  },
  tableCellHeader: {
    fontWeight: 'bold',
    fontSize: 10
  },
  tableCell: {
    flexWrap: 'wrap',
    fontSize: 10,
    color: '#333'
  },
  header: {
    backgroundColor: '#d2042d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'flex-end',
    padding: '0px 20px 15px 20px',
    color: '#fff',
    fontSize: 14,
  },
  brandName: {
    fontSize: 20,
  },
  sectionA: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    fontWeight: 'normal',
    color: '#333333',
  },
  sectionAHeading: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
    color: '#000',
  },
  billingAddress: {
    textAlign:'end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '40%'
  },
  soldBy: {
    width: '40%'
  },
  address: {
    textAlign: 'right'
  },
  shippingAddress: {
    marginTop:'30',
    width: '40%',
    fontSize: '10',
    color: '#333333',
  },
  sectionB: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginTop:'30',
    fontSize: '10'
  },
  sectionBDefinition: {
    color: "#333333"
  },
  priceDetailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    padding: '5px 8px 5px 5px',
    fontSize: 10,
    color: '#333'
  },
  savedUpTo: {
    width: '100%',
    fontSize: 8,
    textAlign: 'right',
    marginTop: 4,
    paddingRight: 6,
  },
  signatureSection: { marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' },
  signature: { width: '45%', textAlign: 'center' },
  signatureDate: { width: '45%', textAlign: 'center' },
  signatureLine: { borderTop: '1px solid #000', marginVertical: 10, width: '100%' },
  footer: {width:'100%', fontSize: 10, textAlign:'center', marginTop:'20px', color:'#333'},
  modeOfPay:{fontSize: '10px', textAlign:'left', margin: '5'}
});

// Create Document Component
const MyDocument = ({ customerDetails, deliveryDetails, buyProduct, priceDetails}) => {


const generateOrderNumber = () => {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

const getFormattedDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = now.getFullYear();
  return `${day}.${month}.${year}`;
};

const FormatPrice = ({ price }) => {
    return `${price.toLocaleString('en-IN')}`;
  };
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brandName}>Elega Leather</Text>
          <Text>INVOICE BILL</Text>
        </View>
        <View style={styles.sectionA}>
          <View style={styles.soldBy}>
            <Text style={styles.sectionAHeading}>Sold By:</Text>
            <Text>Elega Leather Private Limited.</Text>
            <Text>No 4 Amardeep Nivas Dasopanthi Lane Sunkalpet</Text>
            <Text>Bangalore, Karnataka, 560002</Text>
          </View>
          <View style={styles.billingAddress}>
            <Text style={styles.sectionAHeading}>Billing Address</Text>
            <Text>{customerDetails.name}</Text>
            <Text style={styles.address}>{deliveryDetails.address}</Text>
            <Text>{deliveryDetails.city}, {deliveryDetails.state}, {deliveryDetails.pincode}</Text>
          </View>
        </View>
        <View style={styles.shippingAddress}>
            <Text style={styles.sectionAHeading}>Shipping Address</Text>
            <Text>{customerDetails.name}</Text>
            <Text>{deliveryDetails.address}</Text>
            <Text>{deliveryDetails.city}, {deliveryDetails.state}, {deliveryDetails.pincode}</Text>
        </View>
        <View style={styles.sectionB}>
            <View>
                <Text>
                    Order number: <Text style={styles.sectionBDefinition}>{generateOrderNumber()}</Text>
                </Text>
                <Text>
                    Order Date: <Text style={styles.sectionBDefinition}>{getFormattedDate()}</Text>
                </Text>
            </View>
            <View>
                <Text>
                    Invoice Date: <Text style={styles.sectionBDefinition}>{getFormattedDate()}</Text>
                </Text>
            </View>
        </View>
        <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
              <View style={[styles.tableColHeader, { flex: 0.1 }]}>
                <Text style={styles.tableCellHeader}>S.No</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 1 }]}>
                <Text style={styles.tableCellHeader}>Item name</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 0.2,  textAlign:'center' }]}>
                <Text style={styles.tableCellHeader}>Unit Price</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 0.1, textAlign:'center' }]}>
                <Text style={styles.tableCellHeader}>Qty</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 0.2, textAlign:'center' }]}>
                <Text style={styles.tableCellHeader}>Total Amount</Text>
              </View>
            </View>
            {/* Table Rows */}
            {buyProduct.map((product, index) => (
            <View style={styles.tableRow}>
                <View style={[styles.tableCol, { flex: 0.1 }]}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>
                    {product.product_name.split(' ')[0]} {product.product_name.split(' ')[1]}
                </Text>
                </View>
                <View style={[styles.tableCol, { flex: 0.2, textAlign:'right' }]}>
                  <Text style={styles.tableCell}><FormatPrice price={product.offer_price}/></Text>
                </View>
                <View style={[styles.tableCol, { flex: 0.1, textAlign:'center' }]}>
                  <Text style={styles.tableCell}>{product.quantity ? product.quantity : 1}</Text>
                </View>
                <View style={[styles.tableCol, { flex: 0.2, textAlign:'right' }]}>
                  <Text style={styles.tableCell}><FormatPrice price={product.disOffer_price}/></Text>
                </View>
            </View>))}
        </View>
        <View style={styles.priceDetailsSection}>
            <View>
                <Text>Total</Text>
            </View>
            <View>
                <Text><FormatPrice price={priceDetails.price}/></Text>
            </View>
        </View>
        <View style={styles.priceDetailsSection}>
            <View>
                <Text>Delivery Charges</Text>
            </View>
            <View>
                <Text><FormatPrice price={priceDetails.delivery}/></Text>
            </View>
        </View>
        <View style={styles.priceDetailsSection}>
            <View>
                <Text>Packing Charges</Text>
            </View>
            <View>
                <Text><FormatPrice price={priceDetails.packing}/></Text>
            </View>
        </View>
        <View style={[styles.priceDetailsSection, 
                    {   borderTopWidth: 1, 
                        borderBottomWidth: 1, 
                        borderColor: '#000', 
                        color:'#000', 
                        fontSize: 12 }]}>
            <View>
                <Text>Toatal Amout</Text>
            </View>
            <View>
                <Text><FormatPrice price={priceDetails.totalPay}/></Text>
            </View>
        </View>
        <View style={styles.savedUpTo}>
            <Text>Your total saving on this order <FormatPrice price={priceDetails.savedUpTo}/></Text>
        </View>
        <View style={styles.modeOfPay}>
            <Text>Mode of Payment: <Text>Cash on Delivery</Text></Text>
        </View>
        <View style={styles.footer}>
          <Text>Thank you for shopping with Elega Leather!</Text>
          <Text>For any queries, contact us at support@elegaleather.com</Text>
          <Text>Visit our website: www.elegaleather.com</Text>
        </View>
      </Page>
    </Document>
  );
};

// Create a component to download the PDF
const Invoice = () => {

const buyProduct = useSelector((state) => state.buyProductsInfo.buyProducts)
const { customerDetails, deliveryDetails, priceDetails } = useContext(CheckoutContextData);

console.log(buyProduct, 'Buy Products')
  return (

    <div className='invoiceBtn' style={{margin: '20px 0px 100px 0px'}}>
        <PDFDownloadLink 
            document={<MyDocument 
            customerDetails={customerDetails} 
            deliveryDetails={deliveryDetails} 
            priceDetails={priceDetails}
            buyProduct={buyProduct}/>} 
            fileName="Elega_Leather_Private_Limited_invoice_document.pdf">
            {({ loading }) => (loading ? 'Loading document...' : 'Download Invoice')}
        </PDFDownloadLink>
  </div>)
};

export default Invoice;
