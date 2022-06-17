import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // concat add new item into an array and returns a new array (push updates an existing array)
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price + action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = props => {
  // useReducer always needs to be inside a component!
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

const addItemToCartHandler = item => {
  dispatchCartAction({type: 'ADD_ITEM', item: item});
};

const removeItemFromCartHandler = id => {
  dispatchCartAction({type: 'REMOVE_ITEM', id: id})
};

const cartContext = {
  items: cartState.items,
  totalAmount: cartState.totalAmount,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler
}

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
