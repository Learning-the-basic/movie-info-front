import React from "react";

const Community = () => {
  return (
    <section className="section">
      <div className="board-list">
        <div className="board-container">
          <table className="board-table">
            <thead>
              <tr>
                <th className="board-number">번호</th>
                <th className="board-title">제목</th>
                <th className="board-user">유저</th>
                <th className="board-date">게시일</th>
                <th className="board-view">조회수</th>
                <th className="board-like">좋아요</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <th><a href="">[공조2: 인터내셔날] 공조 보고 난 솔직 후기</a></th>
                <td>익명</td>
                <td>09-25</td>
                <td>123</td>
                <td>21</td>
              </tr>
              <tr>
                <td>2</td>
                <th><a href="">[헌트] 이정재 미쳤다 ㄷㄷㄷ</a></th>
                <td>user1</td>
                <td>09-25</td>
                <td>155</td>
                <td>61</td>
              </tr>
              <tr>
                <td>1</td>
                <th><a href="">[기타] 재밌는 영화 추천좀</a></th>
                <td>user12</td>
                <td>09-25</td>
                <td>521</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="board-bottom">
        <div className="board-post">
          <button className="button button-dark" type="submit">글쓰기</button>
        </div>
        <div className="board-page">
          <ul>
            <li className="prev">
              <a href="">이전</a>
            </li>
            <li>
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">4</a>
            </li>
            <li>
              <a href="">5</a>
            </li>
            <li>
              <a href="">6</a>
            </li>
            <li>
              <a href="">7</a>
            </li>
            <li>
              <a href="">8</a>
            </li>
            <li>
              <a href="">9</a>
            </li>
            <li className="next">
              <a href="">다음</a>
            </li>
          </ul>
        </div>
        <div id="board-search">
          <div class="container">
            <div class="search-window">
              <form action="">
                <div class="search-wrap">
                  <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value="" />
                  <button type="submit" class="btn btn-dark">검색</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community;