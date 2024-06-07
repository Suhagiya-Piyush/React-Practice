import { useEffect, useState } from "react";
import "./App.css";
import { Posts } from "./Components/Posts";
import { Pagination } from "./Components/Pagination";

function App() {
  const [post, setPost] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postparPage, setpostparPage] = useState(6);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  const lastIndex = currentPage * postparPage;// par page 1 * 6 = 6
  const firstIndex = lastIndex - postparPage; // 6 -6 = 0

  const currentPost = post.slice(firstIndex, lastIndex);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center font-semibold">Post</h1>
        <div className="grid grid-cols-3">
          <Posts posts={currentPost} className="" />
        </div>
        <div className="mx-auto">
          <Pagination totalPost={post.length} postparPage={postparPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
