
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';

function App() {
  return (
    <>   

        <Navbar/> 
        {/* <Home></Home> */}
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/products" Component={Products}/>
        <Route exact path="/products/:id" Component={Product}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/cart" Component={Cart}/>
      </Routes>
     
      
    </>
  );
}

export default App;
