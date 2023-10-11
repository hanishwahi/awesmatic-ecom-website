 import './App.css';
import Header from './Components/Header/Header';
 import LandingPage from './Components/LandingPage/LandingPage';
import ProductPage from './Components/Products/ProductPage';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Navbar></Navbar>
      
    <Routes>
    <Route index element={<LandingPage/>}></Route>
    <Route path='productpage/:index' element={<ProductPage/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
