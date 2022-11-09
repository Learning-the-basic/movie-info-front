import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ posts, postPerPage, totalPosts, pages, setPages }) => {
  const router = useRouter();
  const totalPage = Math.ceil(totalPosts / postPerPage);

  return (
    <div className="board-bottom">
      <div className="board-post">
        <button 
        className="button button-dark" 
        type="submit"
        onClcik={() => router.push()}>
          글쓰기
        </button>
      </div>
      <div className="board-page"> 
        <button onClick={() => 
          pages-10 <= 1 
            ? setPages(1)
            : setPages(pages-10)} 
          disabled={pages >= 10}>
            &lt
          {/* router.push(`/pages/${pages}`) */}
        </button>
        
        {pages.slice().map()}
        
        <button onClick={() => 
          pages+10 >= totalPage 
            ? setPages(totalPage) 
            : setPages(pages+10)} 
          disabled={pages === totalPage}>
            &gt
        </button>
      </div>
    </div>
  )
}

export default Pagination;