import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import "../css/Writeupform.css";

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

    try {
      const result = await axios.post('https://localhost:3000/api/writeups', formData);
      console.log(result.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div id="WriteUpForm">
      <Navbar />
      <div id="Writeupform-container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
          <input type="file" onChange={e => setFile(e.target.files[0])} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default WriteUpForm;
