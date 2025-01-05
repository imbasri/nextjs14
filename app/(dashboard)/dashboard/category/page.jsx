import connectDB from "@/config/database";
import Categories from "@/models/category";
import Link from "next/link";
import React from "react";
import BtnDeleteCategory from "@/components/form/BtnDeleteCategory";
const CategoryPage = async () => {
  await connectDB();
  let categories = [];
  try {
    const category = await Categories.find();
    categories = category;
  } catch (error) {}
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
            {categories &&
              categories?.map((item, index) => (
                <tr className='hover' key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td className='flex gap-2'>
                    <Link
                      className='btn btn-sm btn-info'
                      href={`/dashboard/category/${JSON.parse(JSON.stringify(item._id))}/edit`}
                    >
                      Edit
                    </Link>
                    <BtnDeleteCategory idData={JSON.parse(JSON.stringify(item._id))} />
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
