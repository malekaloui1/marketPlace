import React, { useEffect, useState } from "react";
import Navbar from "./page_comp/navbar";
import Official from "./Signup&Login/official";
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const[users,setUsers]=useState([])
  axios.defaults.withCredentials=true

useEffect(()=>{
 getall()
},[])
const getall=async()=>{
  try{
  const result=await axios.get("http://localhost:3000/api/market/alluser")
  setUsers(result.data)
  }catch(err){
    console.error(err);
  }
}




  return (
    <div>
       <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Official/>}></Route>

      </Routes>
      </BrowserRouter>
      <Navbar/>
    </div>
  );
}

export default App;
