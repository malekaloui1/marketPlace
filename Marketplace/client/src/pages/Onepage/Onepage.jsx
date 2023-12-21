import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function Onepage() {


    const location = useLocation();
    const one = location.state.one

useEffect(()=>{
    axios.get(`http://localhost:5000/api/product/getOne/${one.id}`).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err);
    })
},[])

  return (
    <div>
        <h1>One Page</h1>
<h1>
{one.name}
</h1>
<img src={one.image}/> 
    </div>
  )
}

export default Onepage