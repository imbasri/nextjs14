"use client";
import { categoryCreate } from "@/actions/category";
import { useFormState } from "react-dom";
import InpurtField from "./InpurtField";
import ButtonSubmit from "./ButtonSubmit";
import TextAreaField from "./TextAreaField";

const AddCategory = () => {
  const [state, action] = useFormState(categoryCreate, undefined);

  return (
    <form action={action} className='mt-5'>
      <InpurtField label='Category Name' placeholder='Insert Category Name' name='name' type='text' />
      {state?.errors?.name && <p className='text-red-500 mt-2'>{state?.errors?.name}</p>}
      <TextAreaField label='Description' placeholder='Insert Description' name='description' />
      {state?.errors?.description && <p className='text-red-500 mt-2'>{state?.errors?.description}</p>}
      <ButtonSubmit label='Create' />
    </form>
  );
};

export default AddCategory;
