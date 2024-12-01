import './Toggle.css'
import { useState } from "react"

export const Toggle=()=>{
    const [ison,setIson]=useState(false);
    const handletoggle=()=>{
        setIson(!ison);
    }
    return (
        <>
        <div className="toggle" style={{backgroundColor :ison ? "green" :"red"}} onClick={handletoggle} >
            <div className={`switch ${ison ? "ON" :"OFF"}`}>
                <span className="switch-state">{ison ? "ON" :"OFF"}</span>
            </div>
        </div>
        </>
    )

}