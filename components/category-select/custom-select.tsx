'use client';
import React, { useState } from 'react';
import Select, { components } from 'react-select';

// Recursive function to flatten nested categories and track depth
const flattenCategories = (categories: any[], depth: number = 0, parentValue: string | null = null) => {
  return categories.reduce((acc: any[], category) => {
    const { label, value, children } = category;
    acc.push({
      label,
      value,
      parentValue,
      depth, // Track depth to adjust indentation
    });
    if (children) {
      acc = acc.concat(flattenCategories(children, depth + 1, value)); // Increase depth for nested children
    }
    return acc;
  }, []);
};

const CustomSelect = ({ categories, name, defaultValue }: { categories:any, name?:string | undefined,defaultValue?: number }) => {
  const flattenedCategories = flattenCategories(categories);
  console.log(typeof defaultValue);
  console.log(defaultValue)
  // Find the default category value from the flattened categories
  const defaultCategory = flattenedCategories.find(
    (cat) => cat.value === defaultValue
  );

  const [selectedValue, setSelectedValue] = useState(defaultCategory || null);

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
  };

  // Custom Option component for rendering nested categories
  const CustomOption = (props: any) => {
    const { data, innerRef, innerProps } = props;

    return (
      <div
     
        ref={innerRef}
        {...innerProps}
        // style={{
            
        //   paddingLeft: `${data.depth * 20}px`, // Increase indentation based on depth
        //   fontWeight: data.depth > 0 ? 'normal' : 'bold', // Optional: make parent categories bold
        // }}
        className={`${
            data.depth > 0 ? 'pl-6' : 'font-bold pl-2' // Indent child categories and make parent categories bold
          } ${data.depth > 1 ? 'pl-10' : ''} ${data.depth > 2 ? 'pl-12' : ''} cursor-pointer hover:bg-gray-200`}
        >
        {data.label}
      </div>
    );
  };

  return (
    <Select
      name={name}
      value={selectedValue}
      onChange={handleChange}
      options={flattenedCategories}
      getOptionLabel={(e) => e.label}
      getOptionValue={(e) => e.value}
      isClearable
      isSearchable
      components={{ Option: CustomOption }} // Use custom option for tree-like view
    />
  );
};

export default CustomSelect;
