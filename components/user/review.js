import React from "react";

const MyReview = ({ list }) => {
  return (
    <div className="myReview">
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
          <p>등록한 리뷰가 없습니다.</p>
        </div>
      }
    </div>
  )
}

export default MyReview;
