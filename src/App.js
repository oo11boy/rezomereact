import React, { useState } from 'react';
import "./App.css"
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Quez2 from './Components/Quez/Quez'
import Footer from './Components/Footer/Footer'
import Ticket from './Components/Ticket/Ticket'
export default function App() {
    const [darker, setDarker] = useState(false);

    const darkmodeHandler = () => {
      setDarker(!darker);
    };
    const buttonStyle = {
        color: '#ffffff',
      };
    
    return (
        <>
       
             
            <Header />
           
            <div  className={darker ? 'lighter' : 'darker'}>
            <button className="btn btndark btn-primary position-fixed z-3" type='submit' onClick={darkmodeHandler}>
            {darker ? <i className="fas fa-sun" style={buttonStyle}></i> : <i className="fas fa-moon" style={buttonStyle}></i>}
      
                 </button>
                 <Ticket />
            <About />
            <Quez2 />
            <Services />
        
            <Footer />
            </div>
        </>
    )
}
