import React from 'react'
import "./Footer.css"
import Social from '../Socials/Social'
import Myname from '../OtherTools/Myname'
export default function Footer() {
    
  return (
    
    <div className='letme'>
        <div className="contentletme">
<Myname yourname="Rasoul" yourlastname="Ghasemi" />
<p>for more Html,Css,js,React and other Subscribe my Channel:</p>
<Social />

<p className='copyright mt-2'>Copyright By Rassoul Ghasemi </p>
    </div>

    </div>
  )
}
