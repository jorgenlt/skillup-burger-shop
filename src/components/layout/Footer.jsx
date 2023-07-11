import React from "react"; 
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai"; 

const Footer = () => { 
  return ( 
    <footer> 
      <div> 
        <h2>Burger Shop</h2> 
        
        <p>The best burger money can get!</p> 
        <br /> 
      </div> 
      
      <aside> 
        <h4>Follow Us</h4>  
        <a href="https://youtube.com/xyz"> 
          <AiFillYoutube /> 
        </a> 
        <a href="https://instagram.com/xyz"> 
          <AiFillInstagram /> 
        </a> 
      </aside> 
    </footer> 
  ); 
};

export default Footer;