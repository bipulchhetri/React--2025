import '../App.css'

export const Eventprop=()=>{
    const EventHandler=(user)=>{
        alert(`hy ${user} Great Job`)
    }
const handleHover=()=>{
    alert("Hovered")
    }
return(
    <>
    <EventChild onClick={()=>EventHandler('Bipul')} 
        
        onMouseEnter={handleHover}
        />
        
    </>
)
};
 const EventChild=(props)=>{
    return(
        <>
        <button onClick={props.onClick} className='btn' >Click</button>
        <button onMouseEnter={props.onMouseEnter} className='btn'>Hover Me</button>
        </>
    )
    

}