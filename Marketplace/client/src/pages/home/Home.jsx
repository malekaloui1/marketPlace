import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import Categories from '../categories/Categories'
import NavBar from '../NavBar/NavBar'





function Home() {
  return (
    <div>

    <NavBar />

    <div className="container">
        <div className="item">< Link to="/categories" >Exclusive Woman's Fashion</Link></div>
        <div className="item"><Link to="/categories">Men's Fashion</Link></div>
        <div className="item"><Link to="/categories">Electronic</Link></div>
        <div className="item"> <Link to="/categories">Home & Lifestyle</Link></div>
        <div className="item"><Link to="/categories">Sports & Outdoor</Link> </div>
        <div className="item"><Link to="/categories">Baby's & Toys</Link> </div>
        <div className="item"><Link to="/categories">Health & Beauty</Link> </div>
    </div>

    <div className='image-de-couverture'>
      <img src="https://img.lapresse.ca/924x615/201405/16/854944-installer-haut-parleurs-ne-fait.jpg" />

     </div>
     {/* <button><Link to="/Create">Add product</Link></button> */}
    </div>
  )
}

export default Home