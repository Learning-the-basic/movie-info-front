import React from "react";

const MyWriting = ({ list }) => {
  return (
    <div className="myWriting">
      {list.length > 0 ?
        <div>
          review List component
        </div>
        :
        <div className="blank">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/10/01/49/x-1727490_1280.png"
            className="blank-icon"
          />
          <p>등록한 글이 없습니다.</p>
        </div>
      }
    </div>
  )
}

export default MyWriting;
