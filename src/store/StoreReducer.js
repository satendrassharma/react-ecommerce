import {
  GET_PRODUCTS,
  LOADING,
  GET_PRODUCT,
  ADD_CART,
  INC_ITEM,
  DEC_ITEM,
  DELETE_ITEM,
  CLEAR_ITEMS
} from "./types";

const StoreReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("getProducts:", action);
      return {
        ...state,
        products: action.products,
        loading: false
      };
    case LOADING:
      return { ...state, loading: true };
    case GET_PRODUCT:
      return { ...state, product: action.product };
    case ADD_CART:
      const product = { ...action.product, count: action.product.count + 1 };
      const cart = [...state.cart, product];
      let products = state.products.map(pro => {
        if (pro.id === action.product.id) {
          return { ...pro, inCart: true };
        }
        return pro;
      });
      return { ...state, cart, products };
    case INC_ITEM:
      let newcart = state.cart.map(c => {
        if (c.id === action.id) {
          let count = c.count + 1;
          // let total = c.total - 1;
          return { ...c, count};
        }
        return c;
      });
      return { ...state, cart: newcart };

    case DEC_ITEM:
      newcart = state.cart.map(c => {
        if (c.id === action.id) {
          let count = c.count - 1;
          // let total = c.total + 1;
          return { ...c, count };
        }
        return c;
      });
      return { ...state, cart: newcart };

    case DELETE_ITEM:
      newcart = state.cart.filter(c => c.id !== action.id);
      products=state.products.map(pro=>{
        if(pro.id===action.id){
          return{...pro,inCart:false}
        }
        return pro;
      })
      return { ...state, cart: newcart,products };

    case CLEAR_ITEMS:
    products=state.products.map(pro=>{
     return {...pro,inCart:false}
    })
      return { ...state, cart: [],products };

    default:
      return state;
  }
};

export default StoreReducer;
