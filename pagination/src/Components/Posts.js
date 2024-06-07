import React from "react";

export const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((posts) => {
        return (
          <div className="mx-auto">
            <div key={posts.id} className="w-[16rem] mx-auto my-2 bg-yellow-200 rounded overflow-hidden">
              <h3 className="font-bold capitalize border-b border-white bg-gray-400">{posts.title}</h3>
              <p className="capitalize">{posts.body}</p>
            </div>
          </div>
        )
      })}
    </>
  );
};
