import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Launchpad from './pages/Launchpad/Launchpad';
import Conversations from './pages/Conversations/Conversations';
import Opportunites from './pages/Opportunites/Opportunites';
import Contact from './pages/Contact/Contact';
import AddUsers from './pages/AddUsers/AddUsers';
import UploadList from "./pages/UploadList/UploadList"
import Login from './pages/Login/Login';
import Support from "./pages/Support/Support"
import Setting from "./pages/Settingss/Settings"
const App = () => {

  return (
    <BrowserRouter> 
    
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/" element={<Sidebar />} >
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/Conversations" element={<Conversations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opportunites" element={<Opportunites />} />
          <Route path="/addUsers" element={<AddUsers />} />
          <Route path="/UploadList" element={<UploadList />}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
        
     
    </BrowserRouter>
  );
};

export default App;