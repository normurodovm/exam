// import Getdata from "@/services/query/get-catalog";
// import { Catalog } from "@/_components/catalog";

// export default async function GetCatalog ()  {
//   const data = await Getdata();
//   return (
//    <div className="">
//     {data?.map((item)=> <Catalog key={item.id} text={item.text} name={item.name} id={item.id} img={item.img}/>)}
//    </div>
//   );
// }





import Getdata from "@/services/query/get-catalog";
import { Catalog } from "@/_components/catalog";

export default async function GetCatalog() {
  const data = await Getdata();
  return (
    <div className="">
      {data?.map((item) => (
        <Catalog
          key={item.id}
          text={item.text}
          name={item.name}
          id={item.id}
          img={item.img}
        />
      ))}
    </div>
  );
}
