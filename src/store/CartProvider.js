import CartContext from "./cart-context";
import cartContext from "./const";

const CartProvider = props => {

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
