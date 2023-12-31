import LandPage from "./components/landPage";
import ProductPage from "./components/mainPage";
import SignIn from "./components/signIn";
import LogIn from "./components/logIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./components/productView";
import AddToCart from "./components/addToCart";
import MainPage from "./components/mainPage";
import Products from "./components/products";
import Header from "./components/header";
//import Header from "./components/header";

function App() {
  return (
    
    
    <>
    <div className='app'>  
      <BrowserRouter basename='/elege-leather'>
        <Routes>
          <Route exact path='/' element={<LandPage/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/mainPage' element={<MainPage/>}>
            <Route path='/mainPage/products' element={<Products />}/>
            <Route path='/mainPage/productView/:productId' element={<ProductView/>} />
            <Route path='/mainPage/addToCart' element={<AddToCart />} />
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
