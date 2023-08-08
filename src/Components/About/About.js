import React from 'react'
import "./About.css"
import AboutText from './AboutText'
export default function About() {
  return (
    <div className='about'>
        <div className='containerabout '>

        
        <div className='imgabout' >
            <img  src="./images/Aboutpic/about.jfif" alt="" />
        </div>
       
        <AboutText titr="About Me" undertitr={<h2>Developer & <span className='red-color text-truncate'>Designer</span></h2>}>
        My name is Rasoul Ghasemi, and I am a web designer and developer. With a passion for creating visually appealing and functional websites, I specialize in crafting engaging online experiences. I have expertise in various programming languages and technologies, including HTML, CSS, JavaScript, and more. As a detail-oriented professional, I focus on delivering user-friendly and responsive websites that meet the needs and expectations of clients. With my skills in web design and development, I strive to bring ideas to life and create captivating online platforms. Feel free to reach out if you need any guidance or assistance in the world of web development!"

        </AboutText>
        </div>
    </div>
  )
}
