"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/store/cartSlice";
import Link from "next/link";

interface CatalogProps {
  params: { product_title: string };
}

const url = process.env.APP_URL;

interface CatalogType {
  id: number;
  img: string;
  title: string;
  rame?: string;
  color?: string;
  price?: string; // Ensure price is a string if coming from the API
}

interface Phonetype {
  id: number;
  img: string;
  title: string;
  rame: string; // Required property
  color: string; // Required property
  price: number; // Ensure price is a number
  quantity: number; // Required property
}

const ProductDetail: NextPage<CatalogProps> = ({ params }) => {
  const [items, setItems] = useState<CatalogType[]>([]);
  const [quantity, setQuantity] = useState<number>(1); // To manage item quantity
  const dispatch = useDispatch();

  // Fetch items when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `https://market-backend-zeta.vercel.app/all?id=${params.product_title}`;
        console.log("Fetching data from:", endpoint); // Debugging line
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchData();
  }, [params.product_title]);

  const handleAddToCart = (item: CatalogType) => {
    const newItem: Phonetype = {
      ...item,
      quantity, // Use current quantity state
      price: item.price ? parseFloat(item.price) : 0, // Convert price to number
      rame: item.rame || '', // Provide a default empty string if rame is undefined
      color: item.color || '', // Provide a default empty string if color is undefined
    };
    dispatch(addToCart(newItem));
  };

  // Increase quantity
  const increaseQuantity = () => setQuantity(prev => prev + 1);

  // Decrease quantity
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="flex flex-wrap gap-7 ml-[70px] mt-[70px]">
        
      {items.map((item) => (
        <div className="w-[1340px] p-[70px] bg-white mx-auto" key={item.id}>
            <Button>
                <Link href={"/"}>Back</Link>
            </Button>
          <div className="flex gap-[56px]">
            <img className="w-[480px] h-[480px]" src={item.img} alt={item.title} />
            <div>
              <p className="w-[614px] text-4xl mt-[48px] font-bold text-left text-black">
                {item.title}
              </p>
              <p className="text-[42px] font-bold text-left text-[#1fba4a] mb-[20px] mt-[60px]">
                {item.price ? parseFloat(item.price).toFixed(2) : 'N/A'} <span className="text-black"> : so'm</span>
              </p>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-[#0A0A0A] text-white w-[60px] h-[45px] font-normal text-[16px]"
                  onClick={decreaseQuantity}
                >
                  -
                </Button>
                <p className="text-lg">{quantity}</p>
                <Button
                  className="bg-[#0A0A0A] text-white w-[60px] h-[45px] font-normal text-[16px]"
                  onClick={increaseQuantity}
                >
                  +
                </Button>
              </div>
              <Button
                className="bg-[#0A0A0A] text-white w-[239px] h-[45px] font-normal text-[16px] mt-[20px]"
                onClick={() => handleAddToCart(item)}
              >
                Savatcha
              </Button>
              <div className="mt-4">
              <Button><Link href={"/cart"} >savatchaga o'tish</Link></Button>
              </div>
              <div className="mt-[27px] flex items-center gap-4">
                <h2 className="text-base font-bold text-left text-[#0a0a0a]">Rangi : </h2>
                <div className="flex gap-5">
                  {item.color && (
                    <div className="flex gap-4">
                    <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]">
                      <div className="rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] bg-slate-500"></div>
                      <p className="font-normal text-[12px] mx-auto">{item.color}</p>
                    </div>
                    <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]">
                      <div className="rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] bg-red-500"></div>
                      <p className="font-normal text-[12px] mx-auto">Red</p>
                    </div>
                    <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]">
                      <div className="rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] bg-yellow-500"></div>
                      <p className="font-normal text-[12px] mx-auto">Yellow</p>
                    </div>
                    <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]">
                      <div className="rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] bg-green-500"></div>
                      <p className="font-normal text-[12px] mx-auto">Green</p>
                    </div>
                    <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]">
                      <div className="rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] bg-blue-500"></div>
                      <p className="font-normal text-[12px] mx-auto">Blue</p>
                    </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-[14px] rounded-[12px] bg-[#E9F9ED] w-[614px] p-[23px] mt-[20px]">
                <h2 className="font-bold text-[14px] text-[#0d1136]">
                  O’zbekiston bo’ylab yetkazib berish:
                </h2>
                <p className="font-normal text-[15px]">14 ish kuni</p>
              </div>
              <div className="mt-[20px]">
                <h2 className="font-bold text-[18px] mb-[16px]">Описание</h2>
                <p>{item.title} {item.color} {item.rame} {item.price ? parseFloat(item.price).toFixed(2) : 'N/A'} so'm</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
