import React from 'react'
import "./Services.css"
import CardServices from './CardServices'
export default function Services() {
  
    const servicesinform=[{
        icon:"fa fa-desktop",
        titrservice:"Unique design",
        contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

    },
{
    icon:"fa fa-user",
    titrservice:"Different Layout",
    contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

}
,
{
    icon:"fa fa-comment",
    titrservice:"Make it Simple",
    contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

},
{
    icon:"fa fa-image",
    titrservice:"Responsiveness",
    contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

}
,
{
    icon:"fa fa-th",
    titrservice:"Testing for Perfection",
    contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

}
,
{
    icon:"fa fa-cog",
    titrservice:"Advanced Options",
    contentservice:"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."

}
]
    
  return (
<section className="section services-section" id="services">
  <div className="containerservices">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title">
          <h2>What I Do</h2>
          <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
        </div>
      </div>
    </div>
    <div className="row">
        {servicesinform.map((item,index)=>{
            return (
                <div key={index} className="col-sm-6 col-lg-4">

                <CardServices {...item} />
                </div>
            )
        })}


    </div>
  </div>
</section>

  )
}
