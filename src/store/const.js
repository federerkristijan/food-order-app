const addItemToCartHandler = item => {};

const removeItemFromCartHandler = id => {};

const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler
}

export default cartContext;
