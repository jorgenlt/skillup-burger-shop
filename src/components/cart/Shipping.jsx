import React, { useState } from "react"; 
import { Country } from "country-state-city"; 
import Popup from "reactjs-popup"; 
import { Link } from "react-router-dom"; 

const Shipping = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleOnClick = () => {
    addOrder({
      name: name,
      street: street,
      houseNo: houseNo,
      city: city,
      country: country,
      zip: zip,
      phone: phone
    });
  }

  return ( 
    <section className="shipping"> 
      <main> 
        <h1>Shipping Details</h1> 
        <form> 
          <div> 
            <label>Name</label> 
            <input 
              type="text" 
              placeholder="Enter Name"
              value={name}
              onChange={e => setName(e.target.value)}
            /> 
          </div> 
          <div> 
            <label>Street</label> 
            <input 
              type="text" 
              placeholder="Enter Street"
              value={street}
              onChange={e => setStreet(e.target.value)}
            /> 
          </div> 
          <div> 
            <label>House Number</label> 
            <input 
              type="text" 
              placeholder="Enter House No."
              value={houseNo}
              onChange={e => setHouseNo(e.target.value)}
            /> 
          </div> 
          <div> 
            <label>City</label> 
            <input 
              type="text" 
              placeholder="Enter City" 
              value={city}
              onChange={e => setCity(e.target.value)}
            /> 
          </div> 
          <div> 
            <label>Country</label> 

            <select
              onChange={e => {
                setCountry(e.target.value);
              }}
            > 
              <option value="">Country</option> 
                {
                  Country && Country.getAllCountries().map((country) => ( 
                    <option 
                      value={country.name} 
                      key={country.isoCode}

                    > 
                      {country.name}
                    </option> 
                  ))
                } 
            </select> 
            </div>
          <div>
            <label>ZIP Code</label> 
            <input 
              type="number" 
              placeholder="Enter ZIP Code" 
              value={zip}
              onChange={e => setZip(e.target.value)}
            /> 
          </div> 
          <div> 
            <label>Phone No.</label> 
            <input 
              type="text" 
              placeholder="Enter Phone No." 
              value={phone}
              onChange={e => setPhone(e.target.value)}
            /> 
          </div> 
              
          <Popup
            trigger={
              <div>
                <Link 
                onClick={handleOnClick}
                  className="link" 
                  to="/myorders"
                > 
                  Confirm Order 
                </Link> 
              </div>
            } 
          > 
            <div 
              style={{ 
                color: "red", 
                transform: "translate(0%,-500%)", 
                backgroundColor: "#fff", 
                padding: "10px", 
                borderRadius: "5px", 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
              }} 
            > 
              Order Successfully Placed! 
            </div> 
          </Popup> 
        </form> 
      </main> 
    </section> 
  ); 
};

export default Shipping;