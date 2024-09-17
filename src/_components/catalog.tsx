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
        <Link href={`/catalog-list/${name}`}>{name}</Link>
    </div>
  );
};

