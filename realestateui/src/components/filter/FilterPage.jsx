import React from 'react'
import "./filter.scss"
function FilterPage() {
  return (
    <div className='filter'>
      <h2>Search result for <b>London</b></h2>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="city">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Minimum Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='Any' />
        </div>

        <div className="item">
          <label htmlFor="city">Max Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='Any' />
        </div>

        <div className="item">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input type="number" id='bedrooms' name='bedrooms' placeholder='Any' />
        </div>

        <button>
          <img src="/images/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default FilterPage
