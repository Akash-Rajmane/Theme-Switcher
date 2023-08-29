import React, { useState } from 'react';
import  './Dropdown.scss';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';


const Dropdown = ({
  optionsArr,
  selected,
  setSelected,
}) => {
  const [isActive, setIsAcive] = useState(false);
  const dropDownContentClass = isActive
    ? "dropDownContentOverlay"
    : "dropDownContentHidden";


  return (
    <div className={"dropdown"}>
      <div className={"dropDownContainer"}>
        <div className={"dropDownBox"}  onClick={(e) => {
              !selected && setIsAcive(!isActive);
            }}>
          { selected }
   
          <span
            className={"dropIcon"}
            onClick={(e) => {
              setIsAcive(!isActive);
            }}
          >
            {!isActive ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </span>
        </div>
      </div>
      <div className={dropDownContentClass}>
        {isActive &&
          optionsArr.map((option, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setSelected(option);
                  setIsAcive(false);
                }}
                className={"dropDownItem"}
              >
                {option}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;