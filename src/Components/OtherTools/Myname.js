import React from 'react'

export default function Myname(props) {
    const {yourname}=props
    const {yourlastname}=props
  return (
    <h2>{yourname} <span className='red-color text-truncate'>{yourlastname}</span></h2>
  )
}
