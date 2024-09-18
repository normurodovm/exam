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
    <div className="flex flex-wrap gap-7 ml-[70px] mt-[70px]">
        {items.map((item)=><div className="w-[1340px] p-[70px] bg-white mx-auto" key={item.id}>
            <div className="flex gap-[56px]" >
            <img className="w-[480px] h-[480px]" src={item.img} alt="" />
            <div>
            <p className="w-[614px] text-4xl mt-[48px] font-bold text-left text-black">
            {item.title}
        </p>
        <p className="text-[42px] font-bold text-left text-[#1fba4a] mb-[20px] mt-[60px]">{item.price} <span className="text-black">  :  so'm</span></p>
        <Button className="bg-[#0A0A0A] text-white w-[239px] h-[45px] font-normal text-[16px]">savatcha</Button>
              <div className="mt-[27px] flex items-center gap-4">
                <h2 className="text-base font-bold text-left text-[#0a0a0a]">Rangi : </h2>
                <div className="flex gap-5">
  <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]" >
    <div className="bg-[#576755] rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] hover:border-primary"></div>
    <p className="font-normal text-[12px] mx-auto">Alpine Green</p>
  </div>
  <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]" >
    <div className="bg-[#f2f3ee] rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] hover:border-primary"></div>
    <p className="font-normal text-[12px] mx-auto">Silver</p>
  </div>
  <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]" >
    <div className="bg-[#5d5c56] rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] hover:border-primary"></div>
    <p className="font-normal text-[12px] mx-auto">Graphite</p>
  </div>
  <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]" >
    <div className="bg-[#fae8d1] rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] hover:border-primary"></div>
    <p className="font-normal text-[12px] mx-auto">Gold</p>
  </div>
  <div className="w-[103px] h-[61px] rounded-xl bg-white border text-center border-[#f6f8fa]" >
    <div className="bg-[#adc5db] rounded-[50%] h-[18px] w-[18px] mx-auto mt-[12px] hover:border-primary"></div>
    <p className="font-normal text-[12px] mx-auto">Sierra Blue</p>
  </div>
  
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
              <p>{item.title} {item.color} {item.rame} {item.price} </p>
            </div>
            </div>
        </div>
        
        </div>)}

    </div>
  );
};

export default ProductDetail;
