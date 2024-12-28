import React from 'react'

const EventPropagration = () => {
    const Grand=()=>{
        console.log('I am grand')
    }
    const Parent=()=>{
console.log('I am parent')
    }
    const Child=()=>{
        console.log('i am child')
    }
  return (
   <section>
    <div onClick={Grand} >Grand</div>
    <div onClick={Parent} >Parent</div>
    <div onClick={Child} >Child</div>

   </section>
  )
}

export default EventPropagration