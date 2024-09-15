import { CatalogType } from "@/types/catalog-type";
import React from "react";
import Link from "next/link";

export const Catalog: React.FC<CatalogType> = ({ name }) => {
  return (
    <div className="p-4 items-start">
      <Link href={`/catalog-list/${name}`}>
          {name}
      </Link>
    </div>
  );
};
