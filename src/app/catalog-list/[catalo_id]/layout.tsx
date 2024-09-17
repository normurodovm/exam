import GetCatalog from "@/_components/get-gatalog";
import Link from "next/link";
export default function CatalogListLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex">
          <div className="w-[280px] bg-white h-screen pr-[50px] pl-[20px] ">
      <div className="ml-[20px]">
          <GetCatalog/>
          <Link className="ml-[17px] mt-4" href={"/"}>home</Link>
      </div>
      </div>
        <div className="ml-[40px]">{children}</div>
      </div>
    );
  }
  