import React from "react";
import { useSetRecoilState } from "recoil";
import { sortValue } from "../../atom";

const Select = ({options}) => {
  const setSortValue = useSetRecoilState(sortValue);

  const onChange = (e) => {
    setSortValue(e.target.value)
  }
  
  return (
    <select className="select" onChange={onChange}>
      {options.map((option) => (
        <option 
          className="select-options" 
          key={option.id}
          value={option.value}
        >
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default Select;