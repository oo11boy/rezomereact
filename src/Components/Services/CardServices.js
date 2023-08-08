import React from 'react'

export default function CardServices(props) {
    const {icon}=props
    const {titrservice}=props
    const {contentservice}=props
    
  return (
    <div className="feature-box-1">
    <div className="icon">
      <i className={icon}  />
    </div>
    <div className="feature-content">
      <h5>{titrservice}</h5>
      <p>
        {contentservice}  
          </p> 
          </div>
  </div>
  )
}
