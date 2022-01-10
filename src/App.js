import * as React from "react";
import "./App.css";
import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom"
import Profile from "./Profile";
import Home from "./Home";
import NewUser from "./NewUser";
import { Button } from "react-bootstrap"
export default function App() {

  return (
    <BrowserRouter>


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/user" element={<NewUser />}>

        </Route>

      </Routes>
      <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
        
      <Link to="/user"> <Button variant="secondary" >Add User Page</Button></Link>
      </div>
     
      
    </BrowserRouter>
  );
}
