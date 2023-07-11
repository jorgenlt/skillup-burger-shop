import React from "react"; 
import { IoFastFoodOutline } from "react-icons/io5"; 
import { Link } from "react-router-dom"; 
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; 
import { motion } from "framer-motion"; 

const Header = ({ isAuthenticated = false }) => { 
  return ( 
    <nav>
      <Link to="/" className="burger-home">
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}> 
          <IoFastFoodOutline />
        </motion.div> 
      </Link>
      
      <div> 
        <Link to="/">Home</Link> 
        <Link to="/contact">Contact</Link> 
        <Link to="/about">About</Link>
        <Link to="/myorders">Orders</Link>
        <Link to="/cart"> 
        <FiShoppingCart /> 
        </Link>  
        <Link to="/login">
          <FiLogIn />
        </Link>
      </div> 
    </nav> 
  ); 
};

export default Header;