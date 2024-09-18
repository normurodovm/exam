"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from "@/app/redux/store/cartSlice";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface ItemCartProps {
  id: number;
  title: string;
  img: string;
  price: number;
  rame: string;
  color: string;
}

const ItemCart: React.FC<ItemCartProps> = ({ id, title, img, price, rame, color }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Mahsulot savatchaga qo'shilganligini tekshirish
    // Qo'shilgan mahsulot holatini redux yoki mahalliy xotira bilan boshqarishingiz mumkin
  }, [id]);

  const handleAddToCart = useCallback(() => {
    if (!addedToCart) {
      const item = { id, title, img, price, rame, color, quantity: 1 };
      dispatch(addToCart(item));
      setAddedToCart(true);
    } else {
      router.push('/cart');
    }
  }, [addedToCart, dispatch, id, img, price, rame, color, title, router]);
  
  const handleRemoveFromCart = useCallback(() => {
    dispatch(removeFromCart(id));
    setAddedToCart(false);
  }, [dispatch, id]);

  return (
    <div className="bg-white w-[262px] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Link href={`/product/${id}`}>
        <img className=" w-full h-[200px] rounded-md object-cover" src={img} alt={title} />
      </Link>
      <div className="mt-3">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm">{rame}</p>
        <p className="text-gray-500 text-sm">{color}</p>
        <p className="font-extrabold text-xl text-black mt-2">{price} so'm</p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        {addedToCart ? (
          <>
            <Button variant="type" onClick={() => dispatch(decrementQuantity(id))}>
              -
            </Button>
            <Button variant="type" className="p-1" onClick={() => router.push('/cart')}>
              Savatchaga o'tish
            </Button>
            <Button variant="type" onClick={() => dispatch(incrementQuantity(id))}>
              +
            </Button>
          </>
        ) : (
          <Button variant="default" className="w-full" onClick={handleAddToCart}>
            Savatcha
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCart;
