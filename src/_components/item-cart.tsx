"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/store/cartSlice";
import Link from "next/link";
import { useCallback, useState } from "react";
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


  const handleAddToCart = useCallback(() => {
    if (!addedToCart) {
      const item = { id, title, img, price, rame, color };
      dispatch(addToCart(item));
      setAddedToCart(true); 
    } else {
      router.push('/cart'); 
    }
  }, [dispatch, router, addedToCart, id, title, img, price, rame, color]);

  return (
    <div className="bg-white w-[262px] p-4 rounded-[9px]">
      <Link href={`/product/${id}`}>
        <img className="w-[262px] h-[262px]" src={img} alt={title} />
      </Link>
      <h2 className="text-[14px] font-normal">{title}</h2>
      <p>{rame}</p>
      <p>{color}</p>
      <p className="font-extrabold text-[18px]">{price} so'm</p>
      <Button
        className="bg-accent text-black hover:text-white px-4"
        onClick={handleAddToCart}
      >
        {addedToCart ? "Savatchaga o'tish" : "Savatcha"}
      </Button>
    </div>
  );
};

export default ItemCart;
