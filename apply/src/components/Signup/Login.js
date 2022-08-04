import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from '../../context/Context';
import { useContext,useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [error, setError] = useState(false);
  const {user,dispatch, isFetching} = useContext(Context);
  const [user2, setUser]=useState({
    username:"",
    password:"",
});
const handleChange=({currentTarget:input})=>{
  setUser({...user2,[input.name]:input.value});
};
const Redirect=async(e)=>{
  e.preventDefault();
  window.location.replace("/login");
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
     await axios.post("/auth/login",user2)
        .then(res=>dispatch({ type: "LOGIN_SUCCESS", payload: res.data}))
      // const res = await axios.post("/auth/login", {
      //   username: userRef.current.value,
      //   password: passwordRef.current.value,
      // window.onload
       window.location.replace("/home");
       setUser({
        username:"",
        password:"",
      })
    
    } catch (error) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
 
  
  
  return (
    
    <div>
      <div className="login">
      {console.log(user2)}
        <img className="py-3" src="./applydark.png" alt="Apply 4 all logo" height="120px" width="140px" />
        <br />
        <h2>Sign In </h2>
        <br />
        <a className='aa' href=""><span className="lp sp"> Forgot Password</span></a>
        

        <br />
        <br />

        <form className="loginform" onSubmit={handleSubmit}>
          <label htmlfor="uname">
            <b>Username:</b>
          </label>
          <br />
          <input
            onClick="myFunction()"
            type="text"
            name="username"
            id="username-field"
            className="login-form-field"
            placeholder="Email or Username"
            onChange={handleChange}
            // ref = {userRef}
            value={user2.username}
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
            // ref = {passwordRef}
            value={user2.password}
          />
          <br />
          <br />
        
          <hr />
          <br />

          <button className="loginRegisterButton bg-primary" type="submit" disabled={isFetching} value="Sign In">Sign in</button>

        </form>
        
        <br />
       <Link to = "/reset">Forget Password</Link>
        <br />

        <hr />
        {error && <span style={{color:"red", marginTop:"10px"}}>Wrong Credentials!</span>}
        <div id="signupF">
          New here? &nbsp;
          <button onClick={Redirect}>Create an account</button>
        </div>
      </div>
    </div>
  )
}
