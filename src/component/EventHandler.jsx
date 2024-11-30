export const EventHandler = () => {
   const ClickHandler = (Event) => {
 alert("Hello Bipul great man !")
 console.log(Event)
 };
   const hadnleclick=(user)=>{
    alert(`hy ${user} Great Job`)
   }
    return (
        <>
        <button onClick={ClickHandler}> Click Me</button>

        {/* fat arrow function */}
        <button onClick={() => ClickHandler()}>Click Me</button>
        <button onClick={()=>hadnleclick("Bipul")}>Click Here</button>
        </>
    )
}