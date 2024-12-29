const TextAreaField = ({ label, name, defaultValue, placeholder }) => {
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <textarea
        className='textarea textarea-bordered h-24'
        placeholder={placeholder}
        defaultValue={defaultValue || null}
        name={name}
      ></textarea>
    </label>
  );
};

export default TextAreaField;
