import React,{useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import StoreContext from '../store/StoreContext'



const Navbar = () => {
  const {cart}=useContext(StoreContext);
  return (
    <nav>
      <Link to="/">
        <h2 className="header">Scommerce</h2>
      </Link>
      <div className="cart_icon">
        <Link to="/cart">
          <FaShoppingCart color="white" size="1.4rem" />
          {cart.length===0?'':<sup>{cart.length}</sup>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
