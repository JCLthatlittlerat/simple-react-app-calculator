import React from 'react'

function Buttons({label, onClick}) {
  

  return (
    <div>
        <button onClick={onClick} className='addButton'>{label}</button>
    </div>
  )
}

export default Buttons