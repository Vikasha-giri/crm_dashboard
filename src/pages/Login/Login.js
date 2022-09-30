import React from 'react'
import "./login.css"
import login from "../../assets/login.jpg"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="container-fluid">
      <div className="login_secion_outer d-flex ">
        <div className="login_secion_inner">
          <img src={login} className="img-fluid" alt="logform" />
        </div>
        <div className="login_secion_sec">

        </div>
      </div>
      <div className="loginform">
        <h2 className="text-center">Sign into your account</h2>
        <form>
          <div className="form-group mt-4">
            <label for="exampleInputEmail1">Email </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />

          </div>
          <div className="form-group mt-4">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="The Password Your picked" />
            <div className='forgot'>
              <a href="#" className="">Forgot Password</a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <Link to="/launchpad"> <button type="submit" className="btn">Sign In</button></Link>
          </div>
          <div className="tems_condition">
            <p>By Signing in you agree to our <span>Terms and conditions</span></p>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login