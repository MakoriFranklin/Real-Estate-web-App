import React, { useState } from 'react'
import "./slider.scss"
function Slider({images}) {
    const [imageIndex, setimageIndex] = useState(null);

    const changeSlide = (direction)=>{
        if(direction === "left"){
            if(imageIndex === 0){
                setimageIndex(images.length - 1);
            }else{
                setimageIndex(imageIndex - 1);
            }
        }else{
            if(imageIndex === images.length - 1){
                setimageIndex(0);
            }else{
                setimageIndex(imageIndex + 1);
            }
        }

    };
  return (
    <div className='slider'>
        {
            imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src="/images/arrow.png" alt="" onClick={()=>changeSlide("left")}/>
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>
                    <div className="arrow">
                        <img src="/images/arrow.png" alt="" className='right' onClick={()=>changeSlide("right")}/>
                    </div>

                    <div className="close" onClick={()=>setimageIndex(null)}>X</div>
                </div>
            )
        }
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setimageIndex(0)}/>
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index)=>(
                <img src={image} alt='' key={index} onClick={()=>setimageIndex(index+1)}/>
            ))}
        </div>
      
    </div>
  )
}

export default Slider
