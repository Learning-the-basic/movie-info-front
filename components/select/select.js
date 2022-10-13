import React from "react";
import { useSetRecoilState } from "recoil";
import { sortValue } from "../../atom";

const Select = ({options}) => {
  const setSortValue = useSetRecoilState(sortValue);

  const onChange = (e) => {
    setSortValue(e.target.value)
  }
  
  return (
    <div className="select">
      <select className="select-box" onChange={onChange}>
        {options.map((option) => (
          <option 
            className="select-box-options" 
            key={option.id}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>    
  )
}

export default Select;