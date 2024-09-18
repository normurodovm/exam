"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/app/redux/store/cartSlice';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Calculate total price, ensuring that price is a number
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'number' ? item.price : 0; // Ensure price is a number
    return acc + price * item.quantity;
  }, 0);

  // Calculate total number of items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Savatcha</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Savatcha bo'sh</p>
      ) : (
        <>
        <Button>
                <Link href={"/"}>Back</Link>
            </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  aria-label={item.title} // Improved accessibility
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{item.price.toLocaleString()} so'm</p>
                
                {/* Display total price for the item */}
                <p className="text-gray-700 text-md mb-2">Jami narxi: {(item.price * item.quantity).toLocaleString()} so'm</p>
                
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-gray-300 text-black hover:bg-gray-400 px-3 py-1 rounded-md"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity <= 1}
                    aria-label={`Decrease quantity of ${item.title}`}
                  >
                    -
                  </button>
                  <span className="text-gray-700">Miqdor: {item.quantity}</span>
                  <button
                    className="bg-gray-300 text-black hover:bg-gray-400 px-3 py-1 rounded-md"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    aria-label={`Increase quantity of ${item.title}`}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md w-full"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  aria-label={`Remove ${item.title} from cart`}
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>

          {/* Display total items and price */}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Umumiy mahsulotlar soni: {totalItems}</h2>
            <h2 className="text-2xl font-bold">Jami narx: {totalPrice.toLocaleString()} so'm</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
