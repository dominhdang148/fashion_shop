//import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <div className="frontend">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/products" Component={Products} />
          <Route exact path="/products/:id" Component={Product} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </div>
      <div className="admin">
        <Routes>
          <Route exact path="/admin" Component={MasterLayout} />
          <Route exact path="/admin/dashboard" Component={Dashboard} />
          
          <Route exact path="/admin/products" Component={Productss} />
          <Route exact path="/admin/products/editproducts" Component={EditProducts} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
