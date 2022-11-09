import React, { useState ,useEffect } from "react";
import axios from "axios";
import Post from "../../components/post/post";
import Pagination from "../../components/pagination/pagination";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('');
      setPosts(res);
    }
    getPosts();
  }, [])

  const postPerPage = 10;
  const lastPost = pages * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = posts.slice(firstPost, lastPost)

  return (
    <main className="section">
      <Post posts={currentPost}/>
      <Pagination 
        posts={posts}
        postPerPage={postPerPage}
        totalPosts={posts.length} 
        pages={pages}
        setPages={setPages}/>
    </main>
  )
}

export default Community;