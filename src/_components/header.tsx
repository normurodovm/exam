"use client"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from "next/link"


  
export const Header = () => {
    return (
        <div >
        <div className="flex items-center justify-between bg-white">
            <div>
                <Image priority src="/logo.png" width={116} height={28} alt="logo"/>
            </div>
            <div>
            <Input placeholder="Qidirish"/>
            </div>
            <div>
                <Select>
                <SelectTrigger className="w-[78px] items-start ">
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
                <Image src="/message.png" width={24} height={24} alt="img"/>
            </div>
            <div className="flex">
                    <Link href={"/profile"}>
                    <h2>
                    Kirish
                </h2>
                </Link>
                <Image src="/profile.png" width={24} height={24} alt="img"/>
            </div>
            </div>
        </div>
        </div>
    )
}