"use client";
import { handleDeleteCategory } from "@/actions/category";
import { toast } from "react-toastify";
const BtnDeleteCategory = ({ idData }) => {
  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this category?");
    if (!confirmation) return;
    await handleDeleteCategory(idData);
    toast.success("Category deleted successfully");
  };
  return (
    <button className='btn btn-sm btn-error' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default BtnDeleteCategory;
