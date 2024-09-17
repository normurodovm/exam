"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phonetype } from '@/services/query/get-phone';

const getCartFromLocalStorage = (): Phonetype[] => {
  try {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (items: Phonetype[]) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

interface CartState {
  items: Phonetype[];
}

const initialState: CartState = {
  items: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phonetype>) => {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
