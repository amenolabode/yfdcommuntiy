import React from "react";

const DropDownItem = ({ label, onClick }) => {
  return (
    <li className="text-black cursor-pointer" onClick={onClick}>
      {label}
    </li>
  );
};

export const HeaderDropDown = ({ title, setState, state, items }) => {
  return (
    <div className="relative">
      <li
        className="text-black hover:text-gray-500 inline-flex cursor-pointer"
        onClick={() => {
          setState(!state);
        }}
      >
        <a href="#">{title}</a>
      </li>
      {state && (
        <div className="bg-white w-56 absolute py-6 px-4 mt-8 rounded-md shadow-lg ">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <DropDownItem
                key={index}
                label={item.label}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
