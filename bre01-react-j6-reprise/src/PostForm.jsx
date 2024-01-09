import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
    };


    addPost(newPost);


    setTitle('');
    setBody('');
  };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label forHtml="title">Title:</label>
                  <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                
                <br />
                <label forHtml="body">Body:</label>
                  <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                
                <button type="submit">Poster</button>
            </form>
        </>
    )
}

export default PostForm;