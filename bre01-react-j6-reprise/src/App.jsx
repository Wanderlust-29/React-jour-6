import React, { useState } from 'react';
import './App.css';
import Posts from './Posts.jsx';
import PostForm from './PostForm.jsx';
import { posts as initialPosts } from './posts.js';

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  return (
    <>
      <section className="posts">
        <Posts posts={posts} />
      </section>
      <section className="add-post">
        <PostForm addPost={addPost} />
      </section>
    </>
  );
}

export default App;
