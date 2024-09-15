import { Button } from "@/components/ui/button";
import { NextPage } from "next";

interface CatalogProps {
  params: { catalo_id: string };
}

const url = process.env.APP_URL;



interface CatalogType {
    id:number;
    img:string;
    title:string;
    rame?:string;
    color?:string;
    price?:string;
}


const CatalogDetail: NextPage<CatalogProps> = async ({ params }) => {
  const GetItem = async () :Promise<CatalogType[]> => {
    try {
        const res = await fetch(`${url}/${params.catalo_id}`)
        const data = res.json()
        return data
    } catch (error) {
        const err = (error as Error).message
        throw new Error(err)
    }
}
    const items = await GetItem()
  return (
    <div className="flex flex-wrap gap-7 mt-[70px]">
        {items.map((item)=> <div key={item.id} className="bg-white w-[262px] p-4 rounded-[9px]">
          <img className="w-[262px] h-[262px]" src={item.img} alt="img" />
          <h2 className="text-[14px] font-normal">{item.title}</h2>
          <p>{item.rame}</p>
          <p>{item.color}</p>
          <p className="font-extrabold text-[18px]">{item.price} so'm</p>
          <Button className="bg-accent text-black hover:text-white px-4">savatcha</Button>
        </div>)}

    </div>
  );
};

export default CatalogDetail;
