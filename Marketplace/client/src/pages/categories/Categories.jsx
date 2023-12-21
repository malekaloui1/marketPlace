import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../products/Products';
import './categories.css';
import { Link, useNavigate } from 'react-router-dom';

function Categories({setCategorie}) {
  const [categories, setCategories] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/categories/get')
      .then((res) => {
        console.log("categories",res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoryClick = (categorys_idcat) => {
    setCategorie(categorys_idcat);
    navigate('/products')
    
  };

  return (
    <div className='Category'>
      {categories.map((category, i) => (
        <div  key={i}>
          <h1 onClick={() => handleCategoryClick(category.id)}>{category.name}</h1>
          <img  src={category.image}/>
        </div>
      ))}
    </div>
  );
}

export default Categories;
