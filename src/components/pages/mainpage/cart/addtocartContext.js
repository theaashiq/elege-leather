import { createContext, useState } from "react"

export const AddCartContext = createContext()

export const AddCartItems = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [proceedToBuyIds, setProceedToBuyIds] = useState([])

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