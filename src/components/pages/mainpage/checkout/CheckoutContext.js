import React, { createContext, useState } from "react";

export const CheckoutContextData = createContext()

const CheckoutContext = ({children}) => {
    const [customerDetails, setCustomerDetails] = useState({
        name:'',
        email: '',
        localId: '',
        phoneNumber: '',
      })
    const [deliveryDetails, setDeliveryDetails] = useState({
      address:'',
      rName: '',
      rPhoneNumber: '',
      pincode: '',
      locality: '',
      city: '',
      state: '',
      landmark: '',
      altPhoneNumber:'',
    })
    const [priceDetails, setPriceDetails] = useState({
        price: '',
        items: '',
        delivery: 200,
        packing: 50,
        totalPay: '',
        savedUpTo: ''
    })
    const [buttonToggle, setButtonToggle] = useState(true)
    const [customerToggle, setCustomerToggle] = useState(true)
    const [InvoicePage, setInvoicePage] = useState(true)
    
    return (
        <CheckoutContextData.Provider 
            value={{
                customerDetails, setCustomerDetails,
                deliveryDetails, setDeliveryDetails,
                customerToggle, setCustomerToggle,
                buttonToggle, setButtonToggle,
                priceDetails, setPriceDetails,
                InvoicePage, setInvoicePage}}>
            {children}
        </CheckoutContextData.Provider>
    )
}

export default CheckoutContext