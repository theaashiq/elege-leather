import { createContext, useState } from "react"

export const AddCartContext = createContext()

export const AddCartItems = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    return (
        <AddCartContext.Provider 
            value={{
                cartItems,
                setCartItems
            }}>
          {children}      
        </AddCartContext.Provider>
    )
}