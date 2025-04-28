import React from 'react';
function nameFormControlled() {
    return (
        <form> 
            <h2>nameFormControlled</h2>
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

export default nameFormControlled;