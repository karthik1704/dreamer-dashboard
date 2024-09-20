"use client";
import React, { useState } from "react";

const SelectBlood: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className="">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {" "}
        Blood Group <span className="text-meta-1">*</span>{" "} 
      </label> 

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select required
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="" disabled className="text-black dark:text-bodydark">
            Select your blood group
          </option>
          <option value="A positive (A+)" className="text-body dark:text-bodydark">
          A positive (A+)
          </option>
          <option value="A negative (A-" className="text-body dark:text-bodydark">
          A negative (A-)
          </option>
          <option value="B positive (B+)" className="text-body dark:text-bodydark">
          B positive (B+)
          </option>
          <option value="B negative (B-)" className="text-body dark:text-bodydark">
          B negative (B-)
          </option>
          <option value="AB positive (AB+)" className="text-body dark:text-bodydark">
          AB positive (AB+)
          </option>
          <option value="AB negative (AB-)" className="text-body dark:text-bodydark">
          AB negative (AB-)
          </option>
          <option value="O positive (O+)" className="text-body dark:text-bodydark">
          O positive (O+)
          </option>
          <option value="O positive (O-)" className="text-body dark:text-bodydark">
          O positive (O-)
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectBlood;
