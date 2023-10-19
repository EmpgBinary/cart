import React from 'react'
import './product.css'

const Product = ({items, handleClick}) => {
    const { title, company, price, img } = items;
  return (
    
      <div className='products'>
          <div className='image-box'>
              <img src={img} alt={title}/>
          </div>
          <div className='details'>
              <p>{title}</p>
              <p>{company}</p>
              <p>Price - {price}#</p>
              <button onClick={()=>handleClick(items)} >Add to Cart</button>
          </div>
        
    </div>
      
  )
}

export default Product