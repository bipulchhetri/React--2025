import React from 'react'
import { useContext } from 'react'
import { BioContext } from '.'

export const Home = () => {

    const {MyName,age}=useContext(BioContext);
    return <h1>Hello My Name is {MyName} and age {age}</h1>

}

