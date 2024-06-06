import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("mui-products")) || [],
};

const saveCartData = (data) => {
  localStorage.setItem("mui-products", JSON.stringify(data));
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    create: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...payload, amount: 1 }];
      }
      saveCartData(state.value);
    },
    deleteProduct: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
      saveCartData(state.value);
    },
    createProductCount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value?.map((el, inx) => {
        if (index === inx) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
      });
      saveCartData(state.value);
    },
    deleteProductCount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value?.map((el, inx) =>
        index === inx ? { ...payload, amount: el.amount - 1 } : el
      );
      saveCartData(state.value);
    },
    removeAll: () => {},
  },
});
export const { create, createProductCount, deleteProduct, deleteProductCount } =
  productsSlice.actions;
export default productsSlice.reducer;
