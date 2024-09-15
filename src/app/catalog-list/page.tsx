import { CatalogType } from "@/types/catalog-type";
import React from "react";

export const CatalogList: React.FC<CatalogType> = ({ name }) => {
  return (
    <div className="max-w-sm mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold py-4 hover:border-b-2 hover:border-primary transition duration-300 ease-in-out cursor-pointer">
        {name}
      </h3>
    </div>
  );
};
