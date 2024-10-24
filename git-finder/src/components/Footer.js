import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      © {year} <span className="company">Find My Git</span> Developed by Srijan :)
    </div>
  )
}

export default Footer
