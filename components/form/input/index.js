import React from "react";

const DefaultInput = ({ label, value, onChange, type }) => {
  return (
    <div className="movie-input">
      <label className="movie-input-title">
        { label }
      </label>
      <div className="input-container">
        <input
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </div>
    </div>
  )
}

export default DefaultInput;
