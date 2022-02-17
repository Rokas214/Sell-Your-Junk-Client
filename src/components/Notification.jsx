import React from 'react'
import "../components/style.css"

const Notification = ({children}) => {
  return (
    <div className='notification' >
        {children}
    </div>
  )
}

export default Notification