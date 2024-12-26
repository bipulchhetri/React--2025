import React from 'react'

const Event = () => {
    const click=(e)=>
    {
        console.log(e.target)
    }

  return (
    <div>
        <button onClick={click} >Click</button>
    </div>
  )
}

export default Event