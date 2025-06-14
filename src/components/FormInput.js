import React from 'react';

function FormInput({ label, type='text', id, name, value, onChange, required=true, placeholder, isTextArea }) {
  const inputClasses = "w-full px-4 py-3 rounded-md bg-light-gray text-dark-blue-gey border border-light-gray focus:outline-none focus:border-dark-blue-gray transition-colors";
  const labelClasses = "block text-dark-blue-gray text-lg font-medium mb-2";

  return (
    <div className="mb-6">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          className={`${inputClasses} resize-y`}
          placeholder={placeholder}
          required={required}
      ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormInput;