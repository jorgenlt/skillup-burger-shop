import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect} from 'react'
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";

import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from './components/myOrders/MyOrders'
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  const [cheeseBurger, setCheeseBurger] = useState(0);
  const [vegCheeseBurger, setVegCheeseBurger] = useState(0);
  const [cheeseBurgerFries, setCheeseBurgerFries] = useState(0);
  const [total, setTotal] = useState(0);

  const increment = item => {
    switch (item) {
      case 'cheeseBurger':
        setCheeseBurger(prev => prev + 1)
        break;
      case 'vegCheeseBurger':
        setVegCheeseBurger(prev => prev + 1)
        break;
      case 'cheeseBurgerFries':
        setCheeseBurgerFries(prev => prev + 1)
        break;
      default:
        console.log('Unknown item.');
    }
  }

  const decrement = item => {
    switch (item) {
      case 'cheeseBurger':
        cheeseBurger !== 0 ? setCheeseBurger(prev => prev - 1) : setCheeseBurger(0);
        break;
      case 'vegCheeseBurger':
        vegCheeseBurger !== 0 ? setVegCheeseBurger(prev => prev - 1) : setVegCheeseBurger(0);
        break;
      case 'cheeseBurgerFries':
        cheeseBurgerFries !== 0 ? setCheeseBurgerFries(prev => prev - 1) : setCheeseBurgerFries(0);
        break;
      default:
        console.log('Unknown item.');
    }
  }

  useEffect(() => {
    const cheeseBurgerTotal = 400 * cheeseBurger;
    const vegCheeseBurgerTotal = 500 * vegCheeseBurger;
    const cheeseBurgerFriesTotal = 600 * cheeseBurgerFries;

    const cheeseBurgersTotal = cheeseBurgerTotal + vegCheeseBurgerTotal + cheeseBurgerFriesTotal;

    setTotal(cheeseBurgersTotal);

  }, [cheeseBurger, vegCheeseBurger, cheeseBurgerFries])


  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={
          <Cart 
            increment={increment}
            decrement={decrement}
            cheeseBurger={cheeseBurger}
            vegCheeseBurger={vegCheeseBurger}
            cheeseBurgerFries={cheeseBurgerFries}
            total={total}
          />
        } 
        />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
