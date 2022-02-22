import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSiteToggle] = useState(false)
  return (
    //1.31.41
    <BrowserRouter>
     <Navbar click={() => setSiteToggle(true)}/>
     <SideDrawer show={sideToggle}click={() => setSiteToggle(false)}/>
     <Backdrop show={sideToggle} click={() => setSiteToggle(false)}/>
     <main>
       <Routes>
         <Route exact path="/" element={<HomeScreen/>} /> 
         <Route exact path="/product/:id" element={<ProductScreen/>} /> 
         <Route exact path="/cart" element={<CartScreen />} /> 
         
       </Routes>
     </main>
     {/* homescreen */}
     {/* Product screen */}
     {/* Cart screen */}
    </BrowserRouter>
  );
}

export default App;
