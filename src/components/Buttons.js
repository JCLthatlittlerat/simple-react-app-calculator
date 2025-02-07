import React from 'react'

function Buttons({label, onClick,className}) {
  

  return (
    <div>
        <button onClick={onClick} className={className}>{label}</button>
    </div>
  )
}

export default Buttons