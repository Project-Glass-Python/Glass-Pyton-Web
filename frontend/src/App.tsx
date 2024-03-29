import "./App.css";
import Home from "./Home/Home";
import Products from "./Products/Products";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import PaymentScreen from "./Payment/Payment";
import Fulfillment from "./Fulfillment/fulfillment";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Glass Python</a>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payments</Link>
            <Link to="/fulfillment">Fulfillment</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/fulfillment" element={<Fulfillment />} />
          </Routes>
        </main>
        <footer className="footer">&copy; 2024 Glass Python</footer>
      </div>
    </Router>
  );
}

export default App;
