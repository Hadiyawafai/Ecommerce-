import React, { useState } from 'react';

const Letterbox = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
//   [] isliye lagate hain kyunki key (name ya email) fixed nahi hai, runtime par decide hoti hai.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
        <div className='text-2xl font-extrabold'>Write a message to contact us</div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input className='border-2 border-black rounded-lg'
          type="text"
          name="name"
          onChange={handleChange}
          placeholder='name'
          value={form.name}
        />
     <br/>
      <br/>
        <label>Email:</label>
        <input className='border-2 border-black rounded-lg'
          type="email"
          name="email"
          placeholder='you@example.com'
          onChange={handleChange}
          value={form.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Letterbox;