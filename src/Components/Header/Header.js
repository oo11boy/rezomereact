import React from 'react'
import "./Header.css"
import Navbar from './Navbar'
import Title from './Title'
export default function Header() {
  const informtitle=[
    { yourname:"Rasoul",  yourlastname:"Ghasemi" },
    { yourname:"Reza",  yourlastname:"mohammadi" }
  
  ]
  const menuitem=[
    "Home", "About","Blog","Shop"
  ]
  return (

    <div className='header'>
    <img src="./images/bgheader.jpg" alt="" />
    <div className='containerheader'>
 <Navbar menuitem={menuitem} />
 <Title {...informtitle[0]} />
    </div>
             
        
    
    </div>
  )
}
