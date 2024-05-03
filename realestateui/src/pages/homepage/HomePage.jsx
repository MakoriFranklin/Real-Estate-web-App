import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchbar/SearchBar'
function HomePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h2 className='title'>Get your dream home with us at affordable prices</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores enim sed aperiam veniam assumenda ipsa cumque dolorem modi fugiat corrupti commodi ipsam, porro officia! Sapiente tenetur optio minus ex!</p>

                <SearchBar/>

                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of experience</h2>
                    </div>

                    <div className="box">
                        <h1>5000+</h1>
                        <h2>Properties</h2>
                    </div>

                    <div className="box">
                        <h1>289+</h1>
                        <h2>Recognitions</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/images/bg.png" alt="" />
        </div>
      
    </div>
  )
}

export default HomePage
