import React, { useState } from 'react'
import "./searchbar.scss"

const types = ["buy", "rent"]
function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (val) => {
        setQuery((prev)=>({...prev, type:val}))
    }
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map(type =>(
            <button key={type} onClick={()=>switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>

        ))}
        
       
      </div>
      <form>
        <input type="text" name='location' placeholder='City'/>
        <input type="number" name='minPrice' placeholder='Minimum Price'/>
        <input type="number" name='maxPrice' placeholder='Maximum Price'/>
        <button>
            <img src="/images/search.png" alt="" />
        </button>


      </form>
    </div>
  )
}

export default SearchBar
