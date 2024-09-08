import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iteams: [],
  isAvailable: false,
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleshowOn(state) {
      state.isAvailable = true;
    },
    handleshowOff(state) {
      state.isAvailable = false;
    },
    addToCart(state, action) {
      const newitem = action.payload;
      const existitem = state.iteams.find((item) => item.id === newitem.id);
      if (!existitem) {
        state.iteams.push({
          id: newitem.id,
          title: newitem.title,
          price: newitem.price,
          image: newitem.image,
          quantity: 1,
          totalPrice: newitem.price,
        });
        console.log("data pushed to your cart");
        state.totalQuantity += 1;
        state.totalAmount += newitem.price;
        console.log(state.totalAmount);
      } else {
        existitem.quantity++;
        state.totalAmount += newitem.price;
        console.log(
          state.totalAmount,
          "not pushed quntity increased and also price"
        );
      }
    },
    removeFromCart(state, action) {
      const removeItem = action.payload;
      const existitem = state.iteams.find((item) => item.id === removeItem);
      if (existitem) {
        if (existitem.quantity === 1) {
          console.log(" removed");
          state.iteams = state.iteams.filter((item) => item.id !== removeItem);
        } else {
          console.log("item quntity was decreased ");
          existitem.quantity -= 1;
        }
      }
      state.totalAmount -= existitem.price;
      state.totalQuantity -= 1;

      console.log(removeItem);
    },
  },
});
export const { handleshowOn, handleshowOff, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
