import React from "react";

export const Posts = ({posts}) => {
  return (
    <>
      {posts.map((posts)=>{
        return(
            <div key={posts.id}>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
            </div>
      )
    })}
    </>
  );
};
