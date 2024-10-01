import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  defaultValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, onChange }) => {
  return (
    <select defaultValue={defaultValue} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;


