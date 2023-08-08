import React from 'react'

export default function Navbar(props) {
  const {menuitem}=props
  return (
    
        <nav class="navbar navbar-expand-lg ">
          

  <a class="navbar-brand text-white" href="#"> Logo</a>
  <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
  <ul class="navbar-nav mr-auto ulmenumain text-center z-3">
    {menuitem.map((item,index)=>{
              return (
                <li className='nav-link'><a key={index} href="#">{item}</a></li>
              )
             })}

    </ul>
    <span class="navbar-text">
    <div className='logo d-none d-lg-flex text-start flex justify-content-start'>
        <button type="button" class="btn btn-danger">Subscribe</button>
            </div>
            
    </span>
  </div>
</nav>
        
    
  )
}
