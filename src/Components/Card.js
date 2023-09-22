import React from 'react'
import "../Styles/Card.css"
export const Card = ({info}) => {
  return (
    <div className='card'>
      <h4>{info.title}</h4>
    </div>
  )
}
