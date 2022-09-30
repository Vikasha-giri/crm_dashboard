import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import "./sidebar.css"

const Sidebar = () => {

    const [menuItem, setMenuItem] = useState([
        {
        path:"/launchpad",
        name:"launchpad",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    },
    {
        path:"/Conversations",
        name:"Conversations",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    },
   
    {
        path:"/Contact",
        name:"Contact",
        icon: <i className="bi bi-person-badge"></i>

    },
    {
        path:"/Opportunites",
        name:"Opportunites",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg> 
    },
    {
        path:"/AddUsers",
        name:"Add Users",
        icon: <i className="bi bi-people"></i>
    },
    {
        path:"/UploadList",
        name:"Upload List",
        icon: <i className="bi bi-person-lines-fill"></i>
    },
    {
        path:"/Support",
        name:"Support",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    },
    {
        path:"/Setting",
        name:"Settings",
        icon: <i className="bi bi-gear"></i>
    }
 ]);

 
    return (
      <>
      <div className="container-fluid">
       <div className="row mt-3">
        <div className="col-12 col-lg-2">
        <div  className="sidebar">
            <div className="top_section">
                <h1  className="logo">Logo<span> here </span></h1>
               
            </div>
            <div className="d-flex justify-content-end select_section mt-3">   
            <div>       
             <select className="mb-2">
                 <option>craig sanders</option>
             </select>
             <div className="inputsearch position-relative mb-4">
             <input type="search" placeholder="Search..."/>
             <i className="bi bi-search search-icon"></i>
             </div>
             </div>    
             </div>
             
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon} </div>
                           <div className="d-flex justify-content-between">
                           <div  className="link_text">{item.name} </div>
                           </div>
                       </NavLink>
                   ))
               }
                
           </div>
        </div>
        <div className="col-12 col-lg-10">
          <Header/>
          <Outlet/>
        </div>
       </div>
      </div>
       
        
        </>
    );
};

export default Sidebar;