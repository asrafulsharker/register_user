import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';



class LoginPage extends React.Component{

submit = data => {

    axios.post('http://localhost:3333/api/login',{
      email:data.email,
      password:data.password
    })
    .then(function(response){
      var email = response.data.email;


      response.data.success
      ?  (document.getElementById('status').innerHTML = "Login Successfull! You are being redirected to landing page in 5 seconds.",setTimeout(() => {window.location.replace('/landing?name='+ email)},5000))
      : document.getElementById('status').innerHTML = response.data.message
    });
  };

render(){
  return(

      <div>
          <h1>Login Page</h1>
          <LoginForm submit={this.submit}/>
          <p id="status"></p>
          <p>Make a new account? Right here.</p>
          <Link to="/registration" className="button">Registration</Link>
      </div>

    );
  }
}




export default LoginPage;
