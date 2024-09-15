import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"





const Akaunt = () => {
    return(
        <div className="w-[1016px] bg-white mt-[30px] ml-24px rounded-[12px]">
            <div className="p-8">
                <h2 className="font-bold text-[22px] mb-6">Sizning profilingiz</h2>
                <div className="flex gap-6 border-bottom border-black mb-[48px]">
                    <Input className="w-[256px] border-none bg-accent" placeholder="Ism"/>
                    <Input className="w-[256px] border-none bg-accent" placeholder="Familiya"/>
                    <Button>Saqlash</Button>
                </div>
                <div className="border border-dotted"></div>
                <h2 className="font-bold text-[22px] my-6">Yetkazib berish manzili</h2>
                <div className="border border-dashed px-[120px] py-[27px] max-w-[375px] ">
                    <p className="text-primary">+  Manzil qo’shish </p>
                </div>
            </div>
        </div>
    )
}



export default Akaunt