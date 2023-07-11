import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = ({ orders }) => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody> 
            {orders && orders.map(order => ( 
            <tr key={order.id}> 
              <td>{order.id}</td>
              <td>Processing</td> 
              <td>{order.cheeseBurger + order.vegCheeseBurger + order.cheeseBurgerFries}</td> 
              <td>€ {order.total}</td> 
              <td>Card</td> 
              <td> 
              <Link to={`/order/${order.id}`}> 
                <AiOutlineEye /> 
              </Link> 
              </td> 
            </tr> 
            ))} 
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
