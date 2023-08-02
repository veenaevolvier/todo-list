// import "./Login.css"
// export const Login = () =>{
//     return (
        
//         <div className="mainDiv">
//             <img className="logo" src='/My TO DO.png' alt="Example" />
//         <div>
//         <div className="manage"> 
        
//         <span className="green">Manage your tasks</span>
//         </div>
//         <div className="logm"><span className="gre">Login</span></div>

//         </div>
//         <form className="form">
//             <input  className="box" type="username" placeholder="Username" id="email" name="email" /><br></br>
//             <input className="box" type="password" placeholder="Password" id="password" name="password"/><br></br>

//        <button class="colButton">LOGIN</button>
//         </form>
//         </div>
    
//     )
// }
import React, { useState } from 'react';
import './Login.css';

export const Login = (props) => {
    console.log(props)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here (e.g., send data to a backend server for authentication)
    // For the example, we'll just simulate a simple login check:
    if (email === 'veena@evolvier.com' && password === '12345') {
      // Successful login
      alert('Login successful!');
    } else {
      // Failed login
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <div className="mainDiv">
      <img className="logo" src="/My TO DO.png" alt="Example" />
      <div>
        <div className="manage">
          <span className="green">Manage your tasks</span>
        </div>
        <div className="logm">
          <span className="gre">Login</span>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="box"
          type="email"
          placeholder="Username"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <input
          className="box"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button className="colButton" type="submit">
          LOGIN
        </button>
      </form>
      {loginError && <div className="error">{loginError}</div>}
    </div>
  );
};
