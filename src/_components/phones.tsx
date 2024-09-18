// import GetItem from "@/services/query/get-phone"
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

//  const Phone = async () => {
//     const data = await GetItem();
//     return(
//         <div className="flex flex-wrap gap-7 mt-[70px]">
//         {data.map((item)=> <div key={item.id} className="bg-white w-[262px] p-4 rounded-[9px]">
//         <Link href={`/product/${item.id}`}>
//           <img className="w-[262px] h-[262px]" src={item.img} alt="img" />
//         </Link>
//           <h2 className="text-[14px] font-normal">{item.title}</h2>
//           <p>{item.rame}</p>
//           <p>{item.color}</p>
//           <p className="font-extrabold text-[18px]">{item.price} so'm</p>
//           <Button className="bg-accent text-black hover:text-white px-4">savatcha</Button>
//         </div>)}

//     </div>
//     )
// } 


// export default Phone

























// "use client"

// import { useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { addToCart } from '@/app/redux/store/cartSlice';
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import GetItem from "@/services/query/get-phone";

// interface PhoneItem {
//   id: number;
//   title: string;
//   img: string;
//   rame: string;
//   color: string;
//   price: number;
// }

// const Phone: React.FC = () => {
//   const [data, setData] = useState<PhoneItem[]>([]); // Typeni aniq belgilash
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await GetItem();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = (item: PhoneItem) => {
//     dispatch(addToCart(item));
//   };

//   return (
//     <div className="flex flex-wrap gap-7 mt-[70px]">
//       {data.map((item) => (
//         <div key={item.id} className="bg-white w-[262px] p-4 rounded-[9px]">
//           <Link href={`/product/${item.id}`}>
//             <img className="w-[262px] h-[262px]" src={item.img} alt="img" />
//           </Link>
//           <h2 className="text-[14px] font-normal">{item.title}</h2>
//           <p>{item.rame}</p>
//           <p>{item.color}</p>
//           <p className="font-extrabold text-[18px]">{item.price} so'm</p>
//           <Button className="bg-accent text-black hover:text-white px-4" onClick={() => handleAddToCart(item)}>
//             Savatcha
//           </Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Phone;


























import GetItem from "@/services/query/get-phone";
import ItemCart from "./item-cart";

const Phone = async () => {
  const data = await GetItem();
  return (
    <div className="flex flex-wrap gap-7 mt-[70px]">
      {data?.map((item) => (
        <ItemCart
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          rame={item.rame}
          color={item.color}
          price={item.price ? parseFloat(item.price) : 0} // price ni number ga aylantirish
        />
      ))}
    </div>
  );
};

export default Phone;
