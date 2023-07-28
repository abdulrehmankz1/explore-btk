import React from "react";

type Category = {
  _id: string;
  name: string;
  order: string;
  icon: any;
  color: string;
};

type Params = {
  categoryId: string;
};
type CategoryDetailsProps = {
  params: Params;
};

export default async function CategoryDetails({
  params: { categoryId },
}: CategoryDetailsProps) {
  const response = await fetch(
    `https://dev-apis.explorebtk.com/api/v1/categories/${categoryId}`
  );
  const category = await response.json();

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-2">Order: {category.order}</h1>
      <h1 className="text-xl font-bold mb-2">Category Name: {category.name}</h1>
      <h1 className="text-xl font-bold mb-2">ID: {category._id}</h1>
      <h1 className="text-xl font-bold mb-2">Icon: {category.icon}</h1>
    </div>
  );
}
