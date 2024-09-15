import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GetBanner from "@/services/query/get-banner";
import GetCatalog from "@/_components/get-gatalog";
import Phone from "@/_components/phones";
import { Computers } from "@/_components/computers";
export default async function Home() {
  const data = await GetBanner();

  return (
  <div className="flex">
          <div className="w-[280px] bg-white h-screen ">
      <div className="ml-[20px]">
          <GetCatalog/>
      </div>
      </div>
      <div>
      <div className="relative">
            <Carousel className="w-[1086px] ml-[40px] mt-[24px]">
              <CarouselContent>
                {data.map((item, index) => (
                  <CarouselItem key={index} className="relative">
                    <img src={item.img} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
                    <CarouselPrevious className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
                      <img src="/icons/prev-icon.svg" alt="Previous" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
                      <img src="/icons/next-icon.svg" alt="Next" />
                    </CarouselNext>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-[30px] ml-10">
            <h2 className="font-bold text-[32px]">Telefonlar</h2>
            <Phone/>
            <h2 className="font-bold text-[32px] mt-[30p]">Compyuterlar</h2>
            <Computers/>
          </div>
      </div>
  </div>
  );
}







