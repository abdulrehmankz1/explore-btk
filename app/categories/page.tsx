import React from 'react';
import CategoriesList from '../components/CategoriesList';
import { type } from 'os';

type Category = {
  _id: string;
  name: string;
  categories: string;
}

export default async function Categories(params: any) {
  const response = await fetch(
    `https://dev-apis.explorebtk.com/api/v1/categories`
  )
  const categories = await response.json();
  return(
    <div>
      <CategoriesList  categories={categories}/>
    </div>
  )
}