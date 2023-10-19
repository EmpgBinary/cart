import React from 'react'
import './amazon.css';
import list  from '../Data';
import Product from '../product/Product';
// import './product.css';


const Amazon = ({handleClick}) => {
   console.log(list);
    return (
        
      <section className='product'>
          {list.map((items) =>(
            <Product items={items}  handleClick={ handleClick} />
            
               ) )
          }
    </section>
  )
}

export default Amazon