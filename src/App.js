import React, { useState } from "react";

import Navbar from "./component/navbar/Navbar";
import Amazon from "./component/amazon/Amazon";
import Cart from "./component/cart/Cart";


function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((commodity) => {
      if (item.id === commodity.id)
        isPresent = true;
    })
    if (isPresent)
      return;
    setCart([...cart, item]);
  }


  return (
    <div className="App">
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        {
          show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />
        }
       
        
    </React.Fragment>
    </div>
  );
}

export default App;
