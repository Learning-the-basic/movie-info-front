import React, {useEffect} from "react";

const DefaultInput = ({ label, value, onChange, type, isValidation }) => {

  return (
    <div className={`movie-input ${!isValidation && isValidation !== undefined ? 'disabled' : ''}`}>
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
      {(!isValidation && isValidation !== undefined) &&
        <p className="validation-notice">이메일 형식이 올바르지 않습니다.</p>
      }
    </div>
  )
}

export default DefaultInput;
