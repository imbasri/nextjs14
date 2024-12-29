const InpurtField = ({ label, type, placeholder, defaultValue, name }) => {
  return (
    <label className='form-control w-full'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue || null}
        name={name}
        className='input input-bordered w-full'
      />
    </label>
  );
};

export default InpurtField;
