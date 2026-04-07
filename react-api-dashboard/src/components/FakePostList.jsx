import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userFilter, setUserFilter] = useState("");

  const fetchPosts = () => {

    setLoading(true);

    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {

        setPosts(response.data.posts);
        setFilteredPosts(response.data.posts);
        setLoading(false);

      })
      .catch((err) => {

        setError("Failed to load posts");
        setLoading(false);

      });
  };

  useEffect(() => {

    fetchPosts();

  }, []);

  const handleFilter = (e) => {

    const value = e.target.value;

    setUserFilter(value);

    if (value === "") {

      setFilteredPosts(posts);

    } else {

      const filtered = posts.filter(
        (post) => post.userId === parseInt(value)
      );

      setFilteredPosts(filtered);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (

    <div>

      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>
        Refresh
      </button>

      <br /><br />

      <label>Filter by User ID: </label>

      <select value={userFilter} onChange={handleFilter}>

        <option value="">All</option>

        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>

      </select>

   {filteredPosts.slice(0, 1).map((post) => (

  <div key={post.id} className="card">

    <h4>{post.title}</h4>
    <p>User ID: {post.userId}</p>
    <p>{post.body}</p>

  </div>

))}
    </div>

  );
}

export default FakePostList;