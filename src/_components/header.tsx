// "use client"
// import Image from "next/image"
// import { Input } from "@/components/ui/input"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// import Link from "next/link"


  
// export const Header = () => {
//     return (
//         <div >
//         <div className="flex items-center justify-between bg-white">
//             <div>
//                 <Image priority src="/logo.png" width={116} height={28} alt="logo"/>
//             </div>
//             <div>
//             <Input placeholder="Qidirish"/>
//             </div>
//             <div>
//                 <Select>
//                 <SelectTrigger className="w-[78px] items-start ">
//                     <SelectValue placeholder="UZ" />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectItem value="uz">UZ</SelectItem>
//                     <SelectItem value="ru">RU</SelectItem>
//                     <SelectItem value="eng">ENG</SelectItem>
//                 </SelectContent>
//                 </Select>
//             </div>
//             <div className="flex gap-5">

//             <div>
//                 <Image src="/message.png" width={24} height={24} alt="img"/>
//             </div>
//             <div className="flex">
//                     <Link href={"/profile"}>
//                     <h2>
//                     Kirish
//                 </h2>
//                 </Link>
//                 <Image src="/profile.png" width={24} height={24} alt="img"/>
//             </div>
//             </div>
//         </div>
//         </div>
//     )
// }










































"use client";
const url = process.env.APP_URL;

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  img: string;
}

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [suggestions, setSuggestions] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim().length > 0) {
        setLoading(true); // Start loading
        try {
          const res = await fetch(
            `https://market-backend-zeta.vercel.app/all?title_like=${searchTerm}`
          );
          const result = await res.json();
          setSuggestions(result);
        } catch (error) {
          console.error("Tavsiyalarni olishda xato:", error);
        } finally {
          setLoading(false); // Stop loading after fetch
        }
      } else {
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Function to highlight matched portion of suggestion
  const highlightMatch = (title: string, searchTerm: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi"); // Case-insensitive match
    return title.replace(regex, (match) => `<span style="color: blue;">${match}</span>`);
  };

  const displayedSuggestions = showMore ? suggestions : suggestions.slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between bg-white">
        <div>
          <Image priority src="/logo.png" width={116} height={28} alt="logo" />
        </div>
        <div className="relative">
          <Input
            placeholder="Qidirish"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {loading ? (
            <div className="absolute bg-white border border-gray-300 w-full mt-2 shadow-md z-50 p-2">
              <p className="text-center text-gray-500">Yuklanmoqda...</p>
            </div>
          ) : suggestions.length > 0 ? (
            <div className="absolute bg-white border border-gray-300 w-full mt-2 shadow-md z-50">
              {displayedSuggestions.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex gap-6 items-center"
                  onClick={() => setSearchTerm(item.title)}
                >
                  <div className="search_item">
                    <img className="" src={item.img} alt="img" />
                  </div>
                  <Link href={`/product/${item.id}`}>
                    {/* Render suggestion with highlighted match */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightMatch(item.title, searchTerm),
                      }}
                    />
                  </Link>
                </div>
              ))}
              {suggestions.length > 4 && (
                <div
                  className="p-2 text-blue-500 cursor-pointer"
                  onClick={handleShowMore}
                >
                 <div className="bg-primary show text-white mx-auto">
                 {showMore ? "Kamroq ko'rsatish" : "Ko'proq ko'rsatish"}
                 </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[78px] items-start">
              <SelectValue placeholder="UZ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz">UZ</SelectItem>
              <SelectItem value="ru">RU</SelectItem>
              <SelectItem value="eng">ENG</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-5">
          <div>
            <Image src="/message.png" width={24} height={24} alt="img" />
          </div>
          <div className="flex">
            <Link href={"/profile"}>
              <h2>Kirish</h2>
            </Link>
            <Image src="/profile.png" width={24} height={24} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

