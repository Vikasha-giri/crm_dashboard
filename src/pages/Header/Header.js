import React from 'react'
import "./header.css"
import joseph from  "../../assets/user.jpg"
const Header = () => {

  return (
   <>
   <div className="d-flex justify-content-end align-items-center mt-2">
    <div className="notificaion">
    <i className="bi bi-bell"></i>
    <span className="notify"></span>
    </div>
    <div className="profile_pic">
      <img  src={joseph} className="img-fluid" alt="profile" />
       <span>Tommy malone <i className="fa-solid fa-angle-down"></i></span>
    </div>
   </div>
   </>
  )
}

export default Header