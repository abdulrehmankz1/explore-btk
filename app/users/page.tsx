// import React from "react";

// type results = {
//     name: string;
//     city: string;
//     gander: string;
// };

// type Params = {
//     categoryId: string;
// };
// type UserInfo = {
//     params: Params;
// };

// export default async function RandomUser() {
//     const response = await fetch("https://randomuser.me/api");

//     const results = await response.json();
//     console.log(results);

//     return (
//         <div className="bg-gray-100 p-4 rounded-md shadow-md">
//             <h1>Gender:{results.gender}</h1>
//             <h1>Name: {results.name}</h1>
//             <h1>City: {results.city}</h1>
//         </div>
//     );
// }

// import React, { use } from 'react';

// type Category = {
//     id: string;
//     firstName: string;
//     lastName: string;
//     age: string;
//     color: string;
// };

// type Params = {
//     users: string;
// };
// type UserDetails = {
//     params: Params;
// };

// export default async function UserPage({
//     params: { users },
// }: UserDetails) {
//     const response = await fetch(`https://dummyjson.com/${users}`)
//     const data = await response.json();
//     console.log(data)
//     return (
//         <div className="bg-gray-100 p-4 rounded-md shadow-md">
//             <h1 className="text-xl font-bold mb-2">Order: {data.id}</h1>
//             <h1 className="text-xl font-bold mb-2">Category Name: {data.firstName}</h1>
//             <h1 className="text-xl font-bold mb-2">ID: {data.lastName}</h1>
//             <h1 className="text-xl font-bold mb-2">Icon: {data.age}</h1>
//         </div>
//     )
// }

// RandomUser.tsx
import React from "react";
type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  phone: string;

};
type Params = {
  userId: string;
};
type UserDetailsProps = {
  params: Params;
};

export default async function RandomUser({
  params: { userId },
}: UserDetailsProps) {
  const response = await fetch(`https://randomuser.me/api/?results`);
  const user = await response.json();
  console.log(user);
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-2">Order:{user.email}</h1>
      {/* <h1 className="text-xl font-bold mb-2">Category Name: {user.name}</h1> */}
      <h1 className="text-xl font-bold mb-2">ID: {user.phone}</h1>
      <h1 className="text-xl font-bold mb-2">Icon: {user.gender}</h1>
    </div>
  );
}

// const RandomUser = () => {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     const fetchRandomUser = async (userId: number) => {
//         try {
//             const response = await axios.get(`https://randomuser.me/api/?results=${userId}`);
//             const userData: User = response.data.results[0];
//             setUser(userData);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching random user:', error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         // Fetch the initial random user data
//         fetchRandomUser(1); // Fetch user with ID 1 initially
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!user) {
//         return <div>No user data available.</div>;
//     }

//     return (
//         <div>
//             <p>Name: {`${user.name.first} ${user.name.last}`}</p>
//             <p>Email: {user.email}</p>
//             <p>Gender: {user.gender}</p>
//             <p>Phone: {user.phone}</p>
//             <p>ID Name: {user.id.name}</p>
//             <p>ID Value: {user.id.value}</p>

//             <button onClick={() => fetchRandomUser(2)}>Load User 2</button>
//             <button onClick={() => fetchRandomUser(3)}>Load User 3</button>
//             {/* Add more buttons with different user IDs to fetch data for other users */}
//         </div>
//     );
// };

// export default RandomUser;

