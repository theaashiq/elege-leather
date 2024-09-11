import { createContext, useEffect, useState, useRef } from "react"
import data from "../../../services/data"

export const AddCartContext = createContext()

export const AddCartItems = ({children}) => {

    const [cartItems, setCartItems] = useState(() => {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [proceedToBuyIds, setProceedToBuyIds] = useState([])
    const [buyItems, setBuyItems] = useState([])
    const [products, setProducts] = useState(data)
    const [total, setTotal] = useState({
        total_amount: '',
        total_discount: '',
    })
    const [selectedCat, setSelectedCat] = useState([])
    const [posterToogle, setPosterToogle] = useState(true)
    const [searchInput, setSearchInput] = useState('')

    const targetRef = useRef(null);

    const scrollToTarget = () => {
        if (targetRef.current) {
          const offsetTop = targetRef.current.offsetTop;
          const viewportHeight = window.innerHeight;
          const scrollToPosition = offsetTop - viewportHeight / 4;
      
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth',
          });
        }
      };

      useEffect(() => {
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);
    


  return (
        <AddCartContext.Provider 
            value={{
                cartItems, setCartItems,
                buyItems, 
                setBuyItems,
                proceedToBuyIds, 
                setProceedToBuyIds,
                total, setTotal,
                selectedCat, setSelectedCat,
                posterToogle, setPosterToogle,
                products, setProducts,
                scrollToTarget,
                targetRef,
                searchInput, setSearchInput
            }}>
          {children}      
        </AddCartContext.Provider>
    )
}