import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
// import here

export default function Register() {
  // set title in tab header browser
  const title = 'Register';
  document.title = 'DumbMerch | ' + title;

  // as a container for login information messages
  const [message, setMessage] = useState(null);

  // as a container for register information from input text
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle change data register on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // code here

  return (
    <div className="d-flex justify-content-center">
      <div className="card-auth p-4">
        <div style={{ fontSize: '36px', lineHeight: '49px', fontWeight: '700' }} className="mb-2">
          Register
        </div>

        {message && message}

        <form> {/* modify tag form */}
          <div className="mt-3 form">
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={form.name} className="px-3 py-2" />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={form.email} className="px-3 py-2 mt-3" />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={form.password} className="px-3 py-2 mt-3" />
          </div>
          
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-login">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
