import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Send a POST request to check if the user exists
      const response = await axios.post(`http://localhost:5000/login`, {
        email: email,
        password: password,
      });
  
      const hash = response.data.message.password;
      const isPasswordMatched = await bcrypt.compare(password, hash);
      
      if (isPasswordMatched) {
        checkRole(response, history); 
      } else {
        setCheckPassword(true); 
      }
    } catch (error) {
      console.log(error);
      setRedirectToSignUp(true);
      setTimeout(() => {
        history.push("/SignUp");
      }, 2500);
    }
  };
  

  function checkRole(response, history) {
    if (response.data.message.role === 'Driver') {
      history.push("/mainPageDriver", { firstName: response.data.message.firstName });
    } else {
        history.push("/mainPageClient", { firstName: response.data.message.firstName });
    }
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="client-register">
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <p id="alert-message" style={{ display: checkPassword ? "block" : "none", color: "red" }}>
            One of the details wrong.
          </p>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" name="button">
            Submit
          </button>
          <p id="alert-message" style={{ display: redirectToSignUp ? "block" : "none", color: "red" }}>
            Ho, seems like you haven't signed up yet
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;


