import React from "react";
import Logo from '../Images/flight.jpg'
import './List.css';
const List = ({ id, price, originCity, originCityCode, destinationCity, destinationCityCode, departureDate, returnDate, flightNumber }) => {
  return (
    <>
      <div key={id} className="Tickets">
        <div className="price">
          <div>
            <h1> Rs.{price}</h1>
            <p> {flightNumber} </p>
          </div>
          <div className="info">
            {originCityCode} {`>`} {destinationCityCode}
            <div>
              Depart:{departureDate} <br />   Arrive: {returnDate}
            </div>
          </div>
        </div>

        <div className="pic">
          <div className="logo">
            <img src={Logo} className="image" />
            <div className="btn">
              <button className="btx">Book this flight</button>
            </div>
          </div>
          {/* <img src={Logo} className="image" />
          <div className="btn">
            <button>Book this flight</button>
          </div> */}

        </div>
      </div>
    </>
  )
}
export default List;