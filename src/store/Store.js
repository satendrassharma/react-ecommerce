import React, { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";
import {
  LOADING,
  CLEAR_ITEMS,
  DELETE_ITEM,
  ADD_CART,
  DEC_ITEM,
  INC_ITEM,
  GET_PRODUCT,
  GET_PRODUCTS
} from "./types";
import { storeProducts as products } from "../data";
const Store = props => {
  const initialState = {
    products: [],
    product: {},
    cart: [],
    loading: false
  };

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: LOADING
    });
  };
  const getProducts = () => {
    setLoading();

    //read data from file

    //dispatch action
    console.log(products);
    dispatch({ type: GET_PRODUCTS, products });
  };

  const getProduct = id => {
    setLoading();

    //find the product byid
    const product = state.products.find(p => p.id === id);

    //dispatch the action
    dispatch({ type: GET_PRODUCT, product });
  };

  const addToCart = product => {
    //dispatch the action
    dispatch({ type: ADD_CART, product });
  };

  const IncrementItem = id => {
    dispatch({ type: INC_ITEM, id });
  };

  const DecrementItem = id => {
    const product = state.cart.find(c => c.id === id);
    if (product.count > 1) {
      dispatch({ type: DEC_ITEM, id });
    } else {
      DeleteItem(id);
    }
  };

  const DeleteItem = id => {
    dispatch({ type: DELETE_ITEM, id: id });
  };

  const ClearCart = () => {
    dispatch({ type: CLEAR_ITEMS });
  };

  const totalPrice = () => {
    if (state.cart.length > 0) {
      return state.cart.reduce((acc, cur) => {
        return {count:1,price:acc.count * acc.price + cur.count * cur.price}
      }).price*100;
    }
    return 0;
  };

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,
        loading: state.loading,
        getProducts,
        getProduct,
        addToCart,
        IncrementItem,
        DecrementItem,
        DeleteItem,
        ClearCart,
        totalPrice
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default Store;
