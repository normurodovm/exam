import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phonetype } from '@/services/query/get-phone';

interface CartState {
  items: Array<Phonetype & { quantity: number }>;
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phonetype>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Agar mahsulot oldin savatda bo'lsa, sonini oshiramiz
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Yangi mahsulot qo'shilsa, sonini 1 qilamiz
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
