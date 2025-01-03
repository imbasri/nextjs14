import connectDB from "@/config/database";
import Categories from "@/models/category";
import Link from "next/link";
import React from "react";

const CategoryPage = async () => {
  await connectDB();
  const categories = await Categories.find();
  return (
    <>
      <Link className='btn btn-primary btn-sm' href={"/dashboard/category/create"}>
        Create
      </Link>

      {/* show table */}
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr className='hover' key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <Link className='btn btn-sm btn-info' href={`/dashboard/category/${item._id}/edit`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryPage;
