// import React from "react";
// import Link from "next/link";

// const url = process.env.APP_URL;

// interface CatalogTypes {
//   name:string;
// }


// export const Catalog: React.FC<CatalogTypes> = ({ name }) => {
//   return (
//     <div className="p-4 items-start">
//       <Link href={`/catalog-list/${name}`}>
//           {name}
//       </Link>
//     </div>
//   );
// };





import React from "react";
import Link from "next/link";

interface CatalogTypes {
  id: number;
  img: string;
  text: string;
  name: string;
}

export const Catalog: React.FC<CatalogTypes> = ({ id, img, text, name }) => {
  return (
    <div className="p-4 items-start">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold py-4">{name}</h3>
      <p className="text-gray-600">{text}</p>
      <Link href={`/catalog-list/${id}`}>
        <a className="text-blue-500">View Details</a>
      </Link>
    </div>
  );
};

