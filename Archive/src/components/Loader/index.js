import React from 'react'
import './style.css';

export default function Loader({ className }) {
  return (
   <div className={className}>
      <div className="loader"></div>
   </div>
  )
}
