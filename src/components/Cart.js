import React, { useContext } from "react";
// import img1 from '../img/product-1.png';
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import StoreContext from "../store/StoreContext";

const Cart = () => {
  const {
    cart,
    totalPrice,
    IncrementItem,
    DecrementItem,
    DeleteItem,
    ClearCart
  } = useContext(StoreContext);
  const Price = totalPrice();
  console.log(Price);
  return (
    <div className="cart">
      <h2>Your Cart </h2>
      <div className="products">
        {cart.map(c => (
          <div className="product" key={c.id}>
            <div className="image">
              <img src={require(`../${c.img}`)} alt=".." />
            </div>
            <div className="controls">
              <span className="control inc" onClick={() => DecrementItem(c.id)}>
                -
              </span>
              <span>{c.count}</span>
              <span className="control dec" onClick={() => IncrementItem(c.id)}>
                +
              </span>
            </div>
            <div className="price">
              <FaRupeeSign />
              {c.price * c.count * 100}{" "}
              <span onClick={() => DeleteItem(c.id)}>
                <FaTrashAlt color="red" size="1.2rem" />
              </span>
            </div>
          </div>
        ))}
        {cart.length === 0 && <div>Your cart is empty</div>}
      </div>
      {cart.length !== 0 && (
        <>
          <hr />
          <div className="total_price">
            Total Price: <FaRupeeSign />
            {Price}
          </div>
          <button className="clear_cart" onClick={ClearCart}>clear All</button>
          <button className='checkout'>checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
