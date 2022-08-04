import React from "react";
import "./UserProfile.css";
import logo from "./apply.png";
import gmail from './gmail.png';
import { useState } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom'

// import FacebookLogin from "react-facebook-login";
export default function Register() {
  const [user, setUser]=useState({
      username:"",
      password:"",
      phone:"",
      email:""
  });
  
  const google=()=>{
    window.open("http://localhost:5000/api/auth/google","_self")
  }
  const [error, setError] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");

  // const [email, setEmail] = useState("");

  
  const handleChange=({currentTarget:input})=>{
    setUser({...user,[input.name]:input.value});
  };
  // const handleChange=e=>{
  //   const{username,value}=e.target
  //   setUser({
  //     // ...user,
  //     [input.name]:input.value
  //   }) 
  // }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      alert("Data Stored");
      // const url="/auth/register";
      await axios.post('/auth/register',user);
      window.location.replace("/login");
      setUser({
        username:"",
        password:"",
        phone:"",
        email:""
      })
        // user.username,
        // user.password,
        // user.phone,
        // user.email);
        // res.data && window.location.replace("/login");
    }catch(error)
    
    {
      if(error.response &&error.response.status>=400 && error.response.status<=500)
      {
        setError(true)
      }
    }
    }
 
  // const handleSubmit = ()=>{
  //   const {username,password,phone,email}=user
  //     const res=axios.post("http://localhost:3000/api/auth/register", username,
  //           password,
  //          phone,
  //         email,)
      // .then(res.data) && window.location.replace("/login");
  //     console.log(res.data)
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setError(false);
  //   try {
  //     console.log("posted")
  //     const res = await axios.post("http://localhost:3000/register", {
  //       username,
  //       password,
  //       phone,
  //       email,
  //     });
  //     res.data && window.location.replace("/login");
  //   } catch (err) {
  //     // setError(true);
  //   }
  // };

  return (
    
    <div>
      <div className="login">
        {console.log("User",user)}
        {/* {console.log("user",username)} */}
        <img src="./apply4all.png" alt="Apply 4 all logo" height="120px" width="150px" />
        <h2>Create Account</h2>
        <br />
        <button type="button" className="facebook">
          <svg
            className="Icon-image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12"
              fillRule="evenodd"
            ></path>
          </svg>
          &nbsp;&nbsp;
          <h3 className="fb-connect">Create with Facebook</h3>
        </button>
        <br/>
        <button type="submit" onClick={google} className="gmail">
          <img id="gmail-icon" src={gmail}></img>
          &nbsp;&nbsp;
          <h3 className="gmail-connect">Create with Google</h3>
        </button>

        <br />
        <span className="sp"> OR </span>

        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <label htmlfor="uname">
            <b>Enter Username:</b>
          </label>
          <br />
          <input
            
            type="text"
            name="username"
            id="username-field"
            className="login-form-field"
            placeholder="Email or Username"
            onChange={handleChange}
            value={user.username}
          />
          <br />
          <br />
          <label htmlfor="uname">
            <b>Enter Password:</b>
          </label>
          <br />
          <input
            type="password"
            name="password"
            id="password-field"
            className="login-form-field"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          <br />
          <br />
          <label htmlFor="phone">
            <b>Enter a phone number:</b>
          </label>
          <br />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="0321-5456479"
            onChange={handleChange}
            value={user.phone}
          />
          <br />
          <br />
          <label htmlFor="phone">
            <b>Enter email address:</b>
          </label>
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={handleChange}
            value={user.email}
          />
          <br />
          <br />

          <br />
          {/* <button className="login-field" type="submit" >
          Create Account2
        </button> */}
          <input className="login-field" type="submit"   value="Create Account" />
    </form>

        <br />
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

        <small className="TermsACond">
          By registering you confirm that you accept the
          <a
            href="www.google.com"
            width="500,"
            height="450,"
            left="100,"
            top="100"
          >
            Terms and Conditions
          </a>
          and
          <a href="www.google.com"> Privacy Policy </a>
        </small>

        <br />

        <hr />

        <div id="signupF">
          Already have an account? &nbsp;
          <Link to="hello">Log In</Link>
        </div>
      </div>
    </div>
  );
}