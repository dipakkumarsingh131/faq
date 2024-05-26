import React from 'react'
import './index.css'

export const Header = () => {
    const star = "src/assets/images/icon-star.svg"
  return (
    <div className='head'>
        <img src={star} width= "4%"  alt="no image" /> 
        <h1>FAQ</h1>
    </div>
  )
}

