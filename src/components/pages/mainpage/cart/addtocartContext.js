import { createContext, useEffect, useState } from "react"
import data from "../../../services/data"

export const AddCartContext = createContext()

export const AddCartItems = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [proceedToBuyIds, setProceedToBuyIds] = useState([])

    const fetchBuyingDetails = () => {
        if(proceedToBuyIds.length > 0){
            const buyingItems = data.filter(obj => proceedToBuyIds.includes(obj.id));
            }
        }
     
        
    useEffect(() => {
        fetchBuyingDetails()
    },[proceedToBuyIds])

    return (
        <AddCartContext.Provider 
            value={{
                cartItems,
                setCartItems,
                proceedToBuyIds, 
                setProceedToBuyIds
            }}>
          {children}      
        </AddCartContext.Provider>
    )
}