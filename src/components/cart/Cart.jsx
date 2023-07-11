import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import burger1 from "../../assets/burger1.png"; 
import burger2 from "../../assets/burger2.png"; 
import burger3 from "../../assets/burger3.png"; 

const CartItem = ({ value, title, img, increment, decrement }) => ( 
  <div className="cartItem"> 
    <div> 
      <h4>{title}</h4> 
      <img src={img} alt="Item" /> 
    </div> 
    
    <div> 
      <button onClick={decrement}>-</button> 
      <input type="number" readOnly value={value} /> 
      <button onClick={increment}>+</button> 
    </div> 
  </div> 
); 
  
const Cart = ({ increment, decrement, cheeseBurger, vegCheeseBurger, cheeseBurgerFries, total }) => { 

  return ( 
    <section className="cart"> 
      <main> 
          <CartItem 
          title={"Cheese Burger"} 
          img={burger1} 
          value={cheeseBurger} 
          increment={() => increment('cheeseBurger')} 
          decrement={() => decrement('cheeseBurger')} 
        /> 
        <CartItem 
          title={"Veg Cheese Burger"} 
          img={burger2} 
          value={vegCheeseBurger} 
          increment={() => increment('vegCheeseBurger')} 
          decrement={() => decrement('vegCheeseBurger')} 
        /> 
        <CartItem 
          title={"Cheese Burger with French Fries"} 
          img={burger3} 
          value={cheeseBurgerFries} 
          increment={() => increment('cheeseBurgerFries')} 
          decrement={() => decrement('cheeseBurgerFries')}
        />  
        <article> 
          <div> 
            <h4>Sub Total</h4> 
            <p>€ {Number(total).toFixed(2)}</p> 
          </div> 
          <div> 
            <h4>Tax</h4> 
            <p>€ {Number(total * 0.18).toFixed(2)}</p> 
          </div> 
          <div> 
            <h4>Shipping Charges</h4> 
            <p>€ {Number(4).toFixed(2)}</p> 
          </div>{" "} 
          <div> 
            <h4>Total</h4> 
            <p>€ {Number(total * 1.18 + 4).toFixed(2)}</p> 
          </div> 
          <Link 
            to="/shipping"
          >
            Checkout
          </Link> 
        </article> 
      </main> 
    </section> 
  ); 
};

export default Cart;