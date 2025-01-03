import React from 'react'
import { useContext } from 'react'
import { Bio } from '.'

export const Home = () => {

    const {name,age}=useContext({Bio});
    return <h1>Hello My Name is {name} and age {age}</h1>

}

