import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <Link className='btn btn-primary btn-sm' href={"/dashboard/category/create"}>
      Create
    </Link>
  );
};

export default CategoryPage;
