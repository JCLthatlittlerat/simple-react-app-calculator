import React from 'react'

function nameFormUncontrolled() {
  return (

    <form> 
      <h2>nameFormUncontrolled</h2>
        <fieldset>
            <div className="Field">
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder='Name'name='name' id='name' />
            </div>
            <button type="submit">Submit</button>
        </fieldset>
        
    </form>
  )
}

export default nameFormUncontrolled;