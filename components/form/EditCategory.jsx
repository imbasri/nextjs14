"use client";
import { useFormState } from "react-dom";
import InpurtField from "./InpurtField";
import ButtonSubmit from "./ButtonSubmit";
import TextAreaField from "./TextAreaField";
import { handleEditCategory } from "@/actions/category";

const EditCategory = ({ category }) => {
  // karna data props dari server ke components harus menggunakan plain text jadi harus diconvert ke json agar tidak warning dari nextjsnya.
  const data = JSON.parse(category);
  const [state, action] = useFormState(handleEditCategory, data._id);
  return (
    <form action={action} className='mt-5'>
      <InpurtField
        label='Category Name'
        placeholder='Insert Category Name'
        name='name'
        type='text'
        defaultValue={data.name}
      />
      {state?.errors?.name && <p className='text-red-500 mt-2'>{state?.errors?.name}</p>}
      <TextAreaField
        label='Description'
        placeholder='Insert Description'
        name='description'
        defaultValue={data.description}
      />
      {state?.errors?.description && <p className='text-red-500 mt-2'>{state?.errors?.description}</p>}
      <ButtonSubmit label='Edit' />
    </form>
  );
};

export default EditCategory;
