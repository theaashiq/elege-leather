import { createContext, useEffect, useState } from "react"
import data from "../../../services/data"

export const AddCartContext = createContext()

export const AddCartItems = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const [proceedToBuyIds, setProceedToBuyIds] = useState([])
    const [buyItems, setBuyItems] = useState([])
    const [total, setTotal] = useState({
        total_amount: '',
        total_discount: '',
    })
    const [selectedCat, setSelectedCat] = useState([])
    const [posterToogle, setPosterToogle] = useState(true)

  return (
        <AddCartContext.Provider 
            value={{
                cartItems,
                setCartItems,
                buyItems, 
                setBuyItems,
                proceedToBuyIds, 
                setProceedToBuyIds,
                total, setTotal,
                selectedCat, setSelectedCat,
                posterToogle, setPosterToogle
            }}>
          {children}      
        </AddCartContext.Provider>
    )
}