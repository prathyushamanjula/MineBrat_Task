import React from 'react'

const Display = () => {
    let state=localStorage.getItem("state")
    let city=localStorage.getItem("city")
  return (
    <div>
        <h1 id='tall'>YOU HAVE SELECTED {city}, {state}</h1>
    </div>
  )
}

export default Display