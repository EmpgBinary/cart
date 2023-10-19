import React, {useState} from 'react';
import './cart.css';


const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  return (
    <article>
      {
        cart?.map((item) => (
          <div className='cart-box' key={item.id}
          >
            <div className='cart-img'>
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div>
              <button> + </button> 
              <button> - </button> 
            </div>
            <div>
            <span>{item.price}</span>
            <button>Remove</button>
</div>
</div>          
        ))
      }
      <div>
        <span>Total Price of your Cart</span>
        <span>$ = {price}</span>
      </div>
    </article>
    
  )
}

export default Cart