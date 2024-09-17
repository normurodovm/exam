import { Button } from "@/components/ui/button";
import { NextPage } from "next";

interface CatalogProps {
  params: { product_title: string };
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


const ProductDetail: NextPage<CatalogProps> = async ({ params }) => {
  const GetItem = async () :Promise<CatalogType[]> => {
    try {
        const res = await fetch(`${url}/all?id=${params.product_title}`)
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
        {items.map((item)=><div className="w-[1340px] bg-white mx-auto" key={item.id}>
            <div className="flex gap-[56px]" >
            <img className="w-[480px] h-[480px]" src={item.img} alt="" />
            <div>
            <p className="w-[614px] text-4xl mt-[48px] font-bold text-left text-black">
            {item.title}
        </p>
        <p className="text-[42px] font-bold text-left text-[#1fba4a] mb-[20px] mt-[60px]">{item.price}</p>
        <Button className="bg-[#0A0A0A] text-white w-[239px] h-[45px] font-normal text-[16px]">savatcha</Button>
        
            </div>
        </div>
        
        </div>)}

    </div>
  );
};

export default ProductDetail;
