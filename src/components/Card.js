import React from 'react'
import './Resturant.css'
const Card = ({setter}) => {
  return (
    <>
<div className='main'>
    {setter.map((curElemnet)=>{
        return(
            <>
            <div className='mainDiv' key={curElemnet.id}>
                <div>
                    <img className='image' src={curElemnet.img} alt="pic" />
                </div>
                <div><h1> {curElemnet.name}</h1></div>
                <p className='content'>{curElemnet.content}</p>
            <div className='priceDiv'><h4>Price - <span className='sign'>$</span><span className='price'>
            {curElemnet.price}</span> <span><button>Order Now</button></span></h4> </div>
            </div>
            </>
        )
    })

    }
    </div>
      

    </>
  )
}

export default Card
