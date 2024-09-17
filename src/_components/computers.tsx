import GetComputers from "@/services/query/get-computers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Computers = async () => {
    const data = await GetComputers();
    return(
        <div className="flex flex-wrap gap-7 mt-[70px]">
        {data.map((item)=> <div key={item.id} className="bg-white w-[262px] p-4 rounded-[9px]">
          <Link href={`/product/${item.id}`}>
          <img className="w-[262px] h-[262px]" src={item.img} alt="img" />
          </Link>
          <h2 className="text-[14px] font-normal">{item.title}</h2>
          <p>{item.rame}</p>
          <p>{item.color}</p>
          <p className="font-extrabold text-[18px]">{item.price} so'm</p>
          <Button className="bg-accent text-black hover:text-white px-4">savatcha</Button>
        </div>)}

    </div>
    )
} 
