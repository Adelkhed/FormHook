
import { useState } from 'react';
import './App.css';

function App() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {firstName :firstName,
                  lastName : lastName, 
                  email: email,
                  password: password,
                  confirmPassword: confirmPassword
        };

        console.log(newUser);
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('');
        setConfirmPassword('');
   };

  return (
    <div className="container mt-5">
      <form onSubmit ={handleSubmit}>
          <div ClassName="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" value= {lastName} onChange={(e) => setLastName(e.target.value)} />
              <label className="form-label">Email</label>
              <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className="form-label">Password</label>
              <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="form-label">Confirm Password</label>
              <input type="text" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <button>Create User</button>
          </div>
          <div ClassName = "container mt-5">
              <p>First Name : {firstName}</p>
              <p>Last Name : {lastName}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
              <p>Confirm Password : {confirmPassword}</p>
          </div>
      </form>

      
    </div>
  );
}

export default App;
