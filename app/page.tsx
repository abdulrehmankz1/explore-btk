import React from "react";
// import Categories from "./categories/page";
import Link from "next/link";

const App = () => {
  return (
    <div className="mt-5 ms-5 ">
      <div>
        <Link href={'/categories'} className="text-2xl font-bold mb-4 text-blue-500 hover:text-blue-700">
          Categories List Page
        </Link>
      </div>
      <div>
        <Link href={'/users'} className="text-2xl font-bold mb-4 text-blue-500 hover:text-blue-700">
          Users Page
        </Link>
      </div>
    </div>
  );
};

export default App;
