import GetComputers from "@/services/query/get-computers";
import { Button } from "@/components/ui/button";

export const Computers = async () => {
    const data = await GetComputers();
    return(
        <div className="flex flex-wrap gap-7 mt-[70px]">
        {data.map((item)=> <div className="bg-white w-[262px] p-4 rounded-[9px]">
          <img className="w-[262px] h-[262px]" src={item.img} alt="img" />
          <h2 className="text-[14px] font-normal">{item.title}</h2>
          <p>{item.rame}</p>
          <p>{item.color}</p>
          <p className="font-extrabold text-[18px]">{item.price} so'm</p>
          <Button className="bg-accent text-black hover:text-white px-4">savatcha</Button>
        </div>)}

    </div>
    )
} 