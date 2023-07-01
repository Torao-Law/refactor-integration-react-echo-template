import { useState } from 'react';
import { Alert } from 'react-bootstrap';
// import here

export default function Login() {
  // set title in tab header browser
  const title = 'Login';
  document.title = 'DumbMerch | ' + title;
  
  // code here

  // as a container for login information messages
  const [message, setMessage] = useState(null);

  // as a container for login information from input text
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // Handle change data login on form
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
        <div style={{ fontSize: '36px', lineHeight: '49px', fontWeight: '700' }} className="mb-3" >
          Login
        </div>

        {message && message}

        <form> {/* modify tag form */}
          <div className="mt-3 form">
            <input type="email" placeholder="Email" name="email" onChange={handleChange} className="px-3 py-2 mt-3" />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} className="px-3 py-2 mt-3" />
          </div>

          <div className="d-grid gap-2 mt-5">
            <button className="btn btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
