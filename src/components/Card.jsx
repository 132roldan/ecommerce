import { useContext } from "react";
import CartContext from "../CartContext";
import { AiFillShopping } from "react-icons/ai";


import "../css/styles.css";
function Card({ name, price ,icon, }) {
  const { addToCart } = useContext(CartContext);
  
  return (
    
    <div className="card" >
      <div className="product-box">
        <span className="icons">
          {icon}
        </span>
        <div>
        <div className="purchase">
          <h3>Product Name: {name}</h3>
          <button onClick={() => addToCart(name, price)} className="add-to-bag">
            {" "}
            <h4>
              Add to Bag <AiFillShopping />
            </h4>
          </button>
        </div>
        <h4>Price: {price}</h4>
      </div>
      </div>
    </div>
  );
}

export default Card;
