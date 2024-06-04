import { useEffect, useState } from "react";
import "./App.css";
import { Posts } from "./Components/Posts";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center font-semibold">Post</h1>
        <Posts posts={post} />
      </div>
    </div>
  );
}

export default App;
