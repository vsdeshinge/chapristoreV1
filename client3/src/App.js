
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCatogery from './Pages/ShopCatogery';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/footer';
import Product from './Pages/Product';
import LoginP from './Pages/LoginP';
import mens_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import LoginSignup from './Components/Login/LoginSignup';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatogery banner={mens_banner} categogry ="mens"/>}/>
        <Route path='/Womens' element={<ShopCatogery banner={women_banner} categogry ="Womens"/>}/>
        <Route path='/Mobilecovers' element={<ShopCatogery banner={kids_banner} categogry ="Mobilecovers"/>}/>
        <Route path='/Sunglasses' element={<ShopCatogery banner={kids_banner} categogry ="Sunglasses  "/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
