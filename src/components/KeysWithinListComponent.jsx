import React from 'react'

function KeysWithinListComponent(props) {
  return (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
  )
}

export default KeysWithinListComponent