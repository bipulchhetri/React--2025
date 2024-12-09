import React, { useContext } from 'react'
import { Bio } from '.'

const Home = () => {
const {myName,age}=useContext(Bio)

  return <div>I am context API {myName,age}</div>
  
}

export default Home