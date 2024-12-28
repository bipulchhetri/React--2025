export const EventProps = () => {
  const OnclickHandler = (user) => {
    alert(`hy ${user}`);
  };
  const handlerHover = () => {
    alert(`Hy thanks for hovering me`);
  };
  return (
    <>
      <Welcome onClick={() => OnclickHandler("Bipul")} onMouseEnter={handlerHover} />
    </>
  );
};

const Welcome =(props)=>{
    const greeting=()=>
    {
console.log("Hy Welcome")
props.onClick()
    }
return (
    <>
<button onClick={props.onClick}>Click Me</button>
<button onMouseEnter={props.onMouseEnter}>Hover me</button>
<button onClick={greeting}>Greeting</button>
</>
)
}