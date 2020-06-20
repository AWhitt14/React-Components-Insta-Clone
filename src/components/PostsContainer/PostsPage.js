//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import dummyData from "../../dummy-data"
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data , setData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {data.map(p => (
        <Post key={p.id} post={p}/>
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
