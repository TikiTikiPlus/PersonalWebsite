import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

function WriteUpForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', file);

    const result = await axios.post('/api/writeups', formData);
    console.log(result.data);
  };

  return (
    <div id="WriteUpForm">
      <Navbar/>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default WriteUpForm;
