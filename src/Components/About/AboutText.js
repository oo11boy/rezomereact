import React from 'react'


export default function AboutText(props) {
  const{titr}=props  
    const {children}=props
    const{undertitr}=props
  return (
    <div className='textabout text-white'>
         
    <h3 className='text-start mb-4 w-100'>{titr}</h3>
    <div className='w-100 text-start'>
      {undertitr}
  
    </div>
    <p className='justifytext'>{children}</p>
    <div className='w-100 text-start mt-3'>
<button type="button" class="btn btn-danger">Subscribe</button>
  
</div>
</div>
  )
}


AboutText.defaultProps = {
    undertitr: ""
  };
  