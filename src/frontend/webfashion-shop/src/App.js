//import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import About from "./component/About";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./component/Admin/Dashboard";
import EditProducts from "./component/Admin/EditProducts";
import Productss from "./component/Admin/Productss";
import Users from "./component/Admin/Users";
import Index from "./component/Index";
import IndexAdmin from "./layouts/admin/IndexAdmin";
import AddProducts from "./component/Admin/AddProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home/>}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route path="/admin" element={<IndexAdmin />}>
            {/* <Route exact path="/admin" element={<MasterLayout/>} /> */}
            <Route exact path="/admin/dashboard" element={<Dashboard/>} />
            <Route exact path="/admin/products" element={<Productss/>} />
            <Route exact path="/admin/products/edit" element={<EditProducts/>} />
            <Route exact path="/admin/products/add" element={<AddProducts/>} />
            <Route exact path="/admin/products/edit/:id" element={<EditProducts/>} />
            <Route exact path="/admin/products/add/:id" element={<AddProducts/>} />
            <Route exact path="/admin/user" element={<Users/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
