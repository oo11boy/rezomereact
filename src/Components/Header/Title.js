import React from 'react'
import Myname from '../OtherTools/Myname'
export default function Title(props) {
  const {yourname}=props
  const {yourlastname}=props
  return (
    <div dir='ltr' className=' vh-75 w-100 ' >
      <div className='titleheader'>
<p>Hello, my name is:</p>
<Myname yourname={yourname} yourlastname={yourlastname} />
<p>I'am Web Developer. </p>
    </div>
    </div>
  )
 
}

Title.defaultProps={
  yourname:"YourName",
  yourlastname:"YourLastName"
}