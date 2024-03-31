import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Messagesender } from "../navigation/navigation";
import { Link } from "react-router-dom";

const Controlled = () => {
  const navigate = useNavigate(); 
  const result = useContext(Messagesender);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const usernameHandler = (event) => {
    const username = event.target.value;
    setUsername(username);

    if (username.length > 30) {
      setUsernameError("Username must be less than 30 characters");
    } else {
      setUsernameError("");
    }
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const p = {
    username: username,
    password: password
  };

  const register = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", p)
      .then((response) => {
        console.log(response);
        // navigate("/")
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    register();
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={submitHandler} style={{ width: "400px",border:"2px solid white" }}>
        <div className="mb-3 mt-3" style={{padding:"10px"}}>
          <label htmlFor="username" className="form-label" style={{color:"white"}}>
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={usernameHandler}
          />
          {usernameError && (
            <h5 style={{ color: "red" }}>{usernameError}</h5>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{color:"white",padding:"10px"}}>
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div className="form-check mb-3" style={{color:"white",padding:"10px"}}>
          <label className="form-check-label">
           
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Controlled;
