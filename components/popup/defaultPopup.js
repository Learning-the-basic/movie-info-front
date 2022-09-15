import React from "react";
import { useSetRecoilState } from "recoil";
import { defaultPopup } from "../../atom";

const DefaultPopup = ({ children, title }) => {
  const closePopup = useSetRecoilState(defaultPopup);
  return (
    <div className="default-popup-container">
      <div
        className="dimmed"
        onClick={() => {
          closePopup('');
        }}
      >
      </div>
      <div className="contents">
        <div className="title">
          <p>{ title }</p>
          <button
            className="close"
            onClick={() => closePopup('')}
          >
            X
          </button>
        </div>
        { children }
      </div>
    </div>
  )
}

export default DefaultPopup;
