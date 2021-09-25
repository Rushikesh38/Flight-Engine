import React, { useState } from "react";
import List from "../List/List";
import './Lists.css'
const Lists = ({ ticks }) => {
  const [search, setSearch] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [prices, setPrice] = useState('');
  return (
    <>
      <div className="container">

        <div className="right">
          <form className="search-fields">

            Origin City <input type="text" placeholder="Enter originecity" onChange={(event) => { setSearch(event.target.value) }} />
            Destination City  <input type="text" placeholder="Enter destinationcity" onChange={(event) => { setDestination(event.target.value) }} />
            Departure Date
            <input type="date" placeholder="Departure Date" onChange={(event) => { setDepartureDate(event.target.value) }} />
            Return Date
            <input type="date" placeholder="Return  Date" onChange={(event) => { setReturnDate(event.target.value) }} />

          </form>
        </div>


        <div className="left">
          {/* <p> Derture: {departDate}</p>
          <p> Return: {returnDate}</p> */}
          {ticks.filter((val) => {
            if (search === "") {
              return val
            }
            if (val.originCity.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return val
            }
            if (val.destinationCity.toLocaleLowerCase().includes(destination.toLocaleLowerCase())) {
              return val
            }

            if (val.departureDate.includes(departDate.toLocaleLowerCase())) {

              return val
            }
            if (val.returnDate.includes(returnDate.toLocaleLowerCase())) {
              return val
            }

          }).map((item) => {
            return (
              <main className="ticks">
                <List key={item.id} {...item} />
              </main>
            )
          })}
        </div>




      </div>
    </>
  )
}
export default Lists;