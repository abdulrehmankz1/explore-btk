import React from 'react';
import Link from 'next/link';

interface Category {
  _id: string;
  name: string;
}

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  // console.log(categories);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id} className="mb-2">
            <Link href={`/categories/${category._id}`} className="text-blue-500 hover:text-blue-700">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;


