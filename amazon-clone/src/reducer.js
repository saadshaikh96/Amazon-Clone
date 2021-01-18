export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => {
  let totalAmount = cart?.reduce((total, item) => item.price + total, 0);
  // console.log("Total amount = ", totalAmount);
  let cartTotal = totalAmount.toFixed(2);
  // console.log("Cart total = ", cartTotal);
  return cartTotal;
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const productIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (productIndex >= 0) {
        newCart.splice(productIndex, 1);
      } else {
        console.log(`Can't remove product (id: ${action.id})`);
      }
      return {
        ...state,
        cart: newCart,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
