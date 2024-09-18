"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Phonetype {
  id: number;
  title: string;
  img: string;
  price: number;
  rame: string;
  color: string;
  quantity: number; // Ensure quantity is always present
}

const getCartFromLocalStorage = (): Phonetype[] => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (items: Phonetype[]) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(items));
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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phonetype>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Increase quantity by 1
        state.items[existingItemIndex].quantity =
          (state.items[existingItemIndex].quantity || 1) + 1;
      } else {
        // Add new item to cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      saveCartToLocalStorage(state.items);
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
