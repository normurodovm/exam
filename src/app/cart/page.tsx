"use client";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [mounted, setMounted] = useState(false); 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">Savatcha</h1>
      {cartItems.length === 0 ? (
        <p>Savatcha bo'sh</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
              <img src={item.img} alt={item.title} className="w-20 h-20" />
              <h2>{item.title}</h2>
              <p>{item.price} so'm</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
