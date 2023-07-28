// pages/category/[id].tsx

// import { GetServerSideProps } from 'next';
// import CategoryDetails from '../categories/[id]/page';


// interface Category {
//   _id: string;
//   name: string;
// }

// interface CategoryPageProps {
//   category: Category | null;
// }

// const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
//   return <CategoryDetails category={category} />;
// };

// export default CategoryPage;

// export const getServerSideProps: GetServerSideProps = async ({ params = {} }) => {
//   const categoryId = params.id as string || ""; // Use optional chaining and default value

//   try {
//     const response = await fetch(`https://dev-apis.explorebtk.com/api/v1/categories/${categoryId}`);
//     if (!response.ok) {
//       throw new Error('Category not found');
//     }
//     const data = await response.json();
//     return {
//       props: {
//         category: data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching category:', error);
//     return {
//       props: {
//         category: null,
//       },
//     };
//   }
// };

// pages/category/[id].tsx

// import { GetServerSideProps } from 'next';
// import CategoryDetails from '../categories/[id]/page';


// interface Category {
//   _id: string;
//   name: string;
// }

// interface CategoryPageProps {
//   category: Category | null;
// }

// const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
//   return <CategoryDetails category={category} />;
// };

// export default CategoryPage;

// export const getServerSideProps: GetServerSideProps = async ({ params = {} }) => {
//   const categoryId = params.id as string || ""; // Use optional chaining and default value

//   try {
//     const response = await fetch(`https://dev-apis.explorebtk.com/api/v1/categories/${categoryId}`);
//     if (!response.ok) {
//       throw new Error('Category not found');
//     }
//     const data = await response.json();
//     return {
//       props: {
//         category: data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching category:', error);
//     return {
//       props: {
//         category: null,
//       },
//     };
//   }
// };
