import React from "react";
import { useRouter } from "next/router";

const Post = ({ posts }) => {
  const router = useRouter();

  return (
    <div className="board">
      <div className="board-container">
        <div className="board-name">
          영화 게시판
        </div>
        <div className="post" onClick={() => router.push()}>
          {posts.map(post => (
          <li key={post.id} className="post-list">
            {/* <span className="post-category">{posts.category}</span> */}
            <span className="post-title">{post.title}</span>
            <span className="post-user">{post.user}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-view">{post.view}</span>
            {post.comment && 
              <span className="post-comment">{post.comment}</span>
            }
          </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Post;