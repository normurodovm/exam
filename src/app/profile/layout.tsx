import { ProfileCard } from "@/_components/profile-card";
import Link from "next/link";

export default function CatalogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-20px">
      <div className="flex gap-6">
        <div className="w-[300px] bg-white mt-[30px]">
        <Link href="/profile/akaunt" className="block p-[33px] text-black">
            Akkaunt
          </Link>
          <Link href="/profile/delivery" className="block p-[33px] text-black">
            Sizning buyurtmalaringiz
          </Link>
          <Link href="/" className="block p-[33px] text-black">
            Sizning qurilmalaringiz
          </Link>
          <Link href="/" className="block p-[33px] text-black">
            Yordam kerakmi?
          </Link>
          <Link href="/" className="block p-[33px] text-black">
            Chiqish
          </Link> 
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
