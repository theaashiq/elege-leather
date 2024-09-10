import LandPage from "./components/pages/landpage/landPage";
import SignIn from "./components/pages/registration/signIn"
import LogIn from "./components/pages/registration/logIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./components/pages/mainpage/productView/productView"
//import AddToCart from "./components/pages/mainPage/cart/addToCart";
import MainPage from "./components/pages/mainpage/main/mainPage";
import Products from "./components/pages/mainpage/main/products";
import AddToCart from "./components/pages/mainpage/cart/addToCart";
import { AddCartItems } from "./components/pages/mainpage/cart/addtocartContext";
import Checkout from "./components/pages/mainpage/checkout/checkout";
import CheckoutContext from './components/pages/mainpage/checkout/CheckoutContext'
// import { AddCartItems } from "./components/pages/mainpage/cart/addtocartContext";
// import { AddCartItems } from "./components/pages/cart/addtocartContext"

function App() {
  return (
    <>
      <div className='app'>  
        <BrowserRouter basename='/elege-leather'>
          <Routes>
            <Route exact path='/' element={<LandPage/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/signIn' element={<SignIn/>}/>
            <Route path='/mainPage' element={
                                              <AddCartItems>
                                                <MainPage/>
                                              </AddCartItems>
                                            }>
              <Route path='/mainPage/products' element={<Products/>}/>
              <Route path='/mainPage/productView/:productId' element={<ProductView/>} />
              <Route path='/mainPage/addToCart' element={<AddToCart/>} />
            </Route>
            <Route 
              path='/checkout' 
              element={<CheckoutContext>
                        <Checkout/>
                      </CheckoutContext>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
