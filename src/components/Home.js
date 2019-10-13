import React,{useContext} from "react";
// import img1 from "../img/product-1.png";
import { FaStar } from "react-icons/fa";
import StoreContext from '../store/StoreContext';
const Home = () => {
  const {products,addToCart}=useContext(StoreContext);
  return (
    <div className="mobiles">
    {products.map(pro=>(
        <div className="mobile" key={pro.id}>
          <div className="image">
            <img src={require(`../${pro.img}`)} alt="..." />
          </div>
          <div className="name">{pro.title}</div>
          <div className="control">
            <p classname="rating">
              &nbsp;
              <FaStar color="gold" /> 4.5
            </p>
            {pro.inCart?<span>incart</span>:
            <button onClick={()=>addToCart(pro)}>add to cart</button>}
          </div>
      </div>
    ))}
    </div>
  );
};

export default Home;
