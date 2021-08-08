import { items } from "./Data";
export const initialState = {
  item: items,
  user: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      console.log("w_id--->", action.id);
      let updatedWishlist2 = state.item.map((w) => {
        if (w.id == action.id) {
          console.log("new wishlist item", w);
          return { ...w, inCart: true };
        }
        return w;
      });
      console.log("wishlist adding--->", updatedWishlist2);
      return {
        ...state,
        item: updatedWishlist2,
      };
    case "REMOVE_FROM_WISHLIST":
      let updatedWishlist3 = state.item.map((w) => {
        if (w.id == action.id) {
          // console.log("w", w);
          return { ...w, inCart: false };
        }
        return w;
      });
      console.log("wishlist removing--->", updatedWishlist3);
      return {
        ...state,
        item: updatedWishlist3,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.item,
      };
    case "INCREMENT":
      let updatedWishlist = state.item.map((w) => {
        if (w.id == action.id) {
          // console.log("w", w);
          return { ...w, qty: w.qty + 1 };
        }
        return w;
      });
      console.log("final", updatedWishlist);
      return {
        ...state,
        item: updatedWishlist,
      };
    case "DECREMENT":
      let decWishlist = state.item.map((w) => {
        if (w.id == action.id && w.qty > 1) {
          return { ...w, qty: w.qty - 1 };
        } else return w;
      });
      return {
        ...state,
        item: decWishlist,
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: action.item,
      };
    default:
      return state;
  }
}
export default reducer;
