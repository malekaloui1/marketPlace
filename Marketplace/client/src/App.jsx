import React, { useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Categories from "./pages/categories/Categories.jsx";
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
import Onepage from "./pages/Onepage/Onepage.jsx";




function App() {
const [idCategorie,setCategorie]=useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories setCategorie={setCategorie} />} ></Route>
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
          <Route path="/one" element={<Onepage/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;