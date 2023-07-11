import React from "react"; 
import MenuCard from "./MenuCard"; 
import burger1 from "../../assets/burger1.png"; 
import burger2 from "../../assets/burger2.png"; 
import burger3 from "../../assets/burger3.png"; 

const Menu = ({ increment }) => {
  const incrementItem = item => {
    increment(item);
  }
  
  return ( 
    <section id="menu"> 
      <h1>MENU</h1>  
      <div> 
        <MenuCard 
          item={'cheeseBurger'} 
          burgerSrc={burger1} 
          price={9} 
          title="Cheese Burger" 
          incrementItem={incrementItem}
          delay={0.1}
        /> 
        <MenuCard 
          item={'vegCheeseBurger'} 
          burgerSrc={burger2} 
          price={11} 
          title="Veg Cheese Burger" 
          incrementItem={incrementItem}
          delay={0.5} 
        /> 
        <MenuCard 
          item={'cheeseBurgerFries'} 
          burgerSrc={burger3} 
          price={15} 
          title="Cheese Burger with French Fries" 
          incrementItem={incrementItem}
          delay={0.8} 
        /> 
      </div> 
    </section> 
  ); 
};

export default Menu; 