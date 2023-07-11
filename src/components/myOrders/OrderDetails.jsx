import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = ({ orders }) => {
  const { id } = useParams();

  const order = orders.find(order => order.id === id);
  
  if (!order) {
    return <div>No order found</div>;
  }

  const {
    date,
    cheeseBurger,
    vegCheeseBurger,
    cheeseBurgerFries,
    total,
    name,
    street,
    houseNo,
    city,
    country,
    zip,
    phone
  } = order;

  return ( 
    <section className="orderDetails"> 
      <main> 
        <h1>Order Details</h1> 
        <div> 
          <h1>Shipping</h1> 
          <p> 
          <b>Address:</b> 
            {street} {houseNo}, {zip} {city}, {country}
          </p> 
        </div> 
        <div> 
          <h1>Contact</h1> 
          <p> 
          <b>Name:</b> 
            {name} 
          </p> 
          <p> 
          <b>Phone:</b> 
            {phone} 
          </p> 
        </div> 
        
        <div> 
          <h1>Status</h1> 
          <p> 
          <b>Order Status:</b> 
            {"Processing"} 
          </p> 
          <p> 
          <b>Placed At:</b> 
            {date} 
          </p> 
          <p> 
          <b>Delivered At:</b> 
            Not yet delivered
          </p> 
        </div> 
        
        
        <div> 
          <h1>Payment</h1> 
          <p> 
            <b>Payment Method:</b> 
            {"Card"} 
          </p> 
          <p> 
            <b>Amount:</b>
            € {Number(total * 1.18 + 4).toFixed(2)}
          </p> 
          <p> 
            <b>Payment Reference:</b>
            #{id} 
          </p> 
          <p> 
            <b>Paid At:</b> 
            {date} 
          </p> 
        </div>        
        
        <article> 
          <h1>Ordered Items</h1>  
          <div> 
            <h4>Cheese Burger</h4> 
            <div> 
              <span>{cheeseBurger}</span> x <span>€ {Number(9).toFixed(2)}</span> 
            </div> 
          </div> 
          <div> 
            <h4>Veg Cheese Burger</h4> 
            <div> 
              <span>{vegCheeseBurger}</span> x <span>€ {Number(11).toFixed(2)}</span> 
            </div> 
          </div> 
          <div> 
            <h4>Burger Fries</h4> 
            <div> 
              <span>{cheeseBurgerFries}</span> x <span>€ {Number(15).toFixed(2)}</span> 
            </div> 
          </div> 
          <div> 
            <h4>Sub Total</h4> 
            <div> 
              <span>€ {Number(total).toFixed(2)}</span> 
            </div> 
          </div> 
          <div> 
            <h4>Tax</h4> 
            <div> 
              <span>€ {Number(total * 0.18).toFixed(2)}</span> 
            </div> 
          </div> 
          <div> 
            <h4>Shipping Charges</h4> 
            <div> 
              <span>€ {Number(4).toFixed(2)}</span> 
            </div> 
          </div> 
          
          
          <div> 
            <h4 
              style={{ 
                fontWeight: 800, 
              }} 
            > 
              Total  
            </h4> 
            <div 
              style={{ fontWeight: 800 }}  
            > 
              € {Number(total * 1.18 + 4).toFixed(2)}  
            </div> 
          </div> 
        </article>  
      </main> 
    </section> 
  ); 
}; 
  
export default OrderDetails;