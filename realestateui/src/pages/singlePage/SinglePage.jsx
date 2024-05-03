import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/dummydata'
import Map from '../../components/map/Map'
function SinglePage() {
  return (
    <div className='singlePage'>   
      <div className="details">
        <div className="wrapper">
          <Slider images= {singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/images/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feture">
              <img src="/images/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feture">
              <img src="/images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>

            <div className="feture">
              <img src="/images/fee.png" alt="" />
              <div className="featureText">
                <span>Fees policy</span>
                <p>Must be 3x</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
            <div className="sizes">
              <div className="size">
                <img src="/images/size.png" alt="" />
                <span>100sqf</span>
              </div> 
              
              <div className="size">
                <img src="/images/bed.png" alt="" />
                <span>1 bedroom</span>
              </div> 

              <div className="size">
                <img src="/images/bath.png" alt="" />
                <span>1 bathroom</span>
              </div> 
            </div>
          
          
          <p className='title'>Nearby Places</p>        
          <div className="listHorizontal">
          <div className="feature">
              <img src="/images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m Away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/images/pet.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m Away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/images/fee.png" alt="" />
              <div className="featureText">
                <span>Restraunt</span>
                <p>1km away</p>
              </div>
            </div>
          </div>

          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items = {[singlePostData]}/>
          </div>

          <div className="buttons">
            <button>
              <img src="/images/chat.png" alt="" />
              Send a message.
            </button>

            <button>
              <img src="/images/save.png" alt="" />
              Save the place
            </button>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default SinglePage
