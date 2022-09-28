import React, { useEffect, useState } from "react";
import MyReview from "../../components/user/review";
import MyWriting from "../../components/user/writing";
import { userInfo } from "../../api/ltb";

const MyPage = () => {
  const [listType, setListType] = useState('write');
  const [user, setUser] = useState();

  useEffect(() => {
    userInfo().then((res) => {
      console.log(res);
      setUser(res);
    })
  }, [])
  return (
    <div className="myPage">
      <div className="userInfo">
        <img
          src="https://ssl.pstatic.net/static/common/myarea/myInfo.gif"
          className="profileImage"
        />
        <div className="detail">
          <p className="name">박상혁</p>
          <div className="contents">
            <p className="write">내가 쓴 글 <span>0</span></p>
            <p className="write">내 리뷰 <span>0</span></p>
          </div>
        </div>
      </div>
      <div className="userContents">
        <div className="tabContainer">
          <button
            className={`tab ${listType === 'write' ? 'active' : ''}`}
            onClick={() => setListType('write')}
          >
            내가 쓴 글
          </button>
          <button
            className={`tab ${listType === 'review' ? 'active' : ''}`}
            onClick={() => setListType('review')}
          >
            내 리뷰
          </button>
        </div>
        <div className="tabContents">
          {listType === 'write' ? <MyWriting list={[]}/> : <MyReview list={[]} />}
        </div>
      </div>
    </div>
  )
}

export default MyPage;
