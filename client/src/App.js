
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCatogery from './Pages/ShopCatogery';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatogery categogry ="mens"/>}/>
        <Route path='/Womens' element={<ShopCatogery categogry ="Womens"/>}/>
        <Route path='/Mobilecovers' element={<ShopCatogery categogry ="Mobilecovers"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
