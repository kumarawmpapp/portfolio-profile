import React from 'react';

function FormSelect({ label, id, name, value, onChange, required=true, options }) {
  const selectClasses = "w-full px-4 py-3 rounded-md bg-light-gray text-dark-blue-gray border border-light-gray focus:outline-none focus:border-dark-blue-gray transition-colors appearance-none";
  const labelClasses = "block text-dark-blue-gray text-lg font-medium mb-2";

  return (
    <div className="mb-6">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={selectClasses}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;